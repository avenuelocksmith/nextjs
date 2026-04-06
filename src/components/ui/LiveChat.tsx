'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Phone, Send, Loader2 } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { FLOW, type FlowNode } from '@/lib/chatFlow'
import { useAvailability } from '@/hooks/useAvailability'
import { replace247 } from '@/lib/availability'

interface Message {
  from: 'bot' | 'user'
  text: string
}

type Phase = 'flow' | 'ai_loading' | 'ai_done' | 'submitting' | 'done'

export function LiveChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [node, setNode] = useState<FlowNode>(FLOW.welcome)
  const [phase, setPhase] = useState<Phase>('flow')
  const [inputVal, setInputVal] = useState('')
  const [inputError, setInputError] = useState('')
  const [aiCanAnswer, setAiCanAnswer] = useState(true)
  const [unread, setUnread] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Show unread dot after 12 s if not opened
  useEffect(() => {
    const t = setTimeout(() => { if (!open) setUnread(true) }, 12000)
    return () => clearTimeout(t)
  }, [open])

  // Seed welcome message on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: 'bot', text: FLOW.welcome.bot }])
      setNode(FLOW.welcome)
    }
    if (open) setUnread(false)
  }, [open, messages.length])

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, phase])

  // Focus input when node changes to an input node
  useEffect(() => {
    if (node.input) setTimeout(() => inputRef.current?.focus(), 80)
  }, [node])

  function addMessage(from: 'bot' | 'user', text: string) {
    setMessages((prev) => [...prev, { from, text }])
  }

  function goToNode(id: string) {
    const next = FLOW[id]
    if (!next) return
    setNode(next)
    setTimeout(() => addMessage('bot', next.bot), 300)
  }

  function handleOption(option: { label: string; value: string; next: string }) {
    addMessage('user', option.label)
    goToNode(option.next)
  }

  async function handleInputSubmit() {
    const val = inputVal.trim()
    if (!val) return

    // Phone validation
    if (node.input?.type === 'tel') {
      const digits = val.replace(/\D/g, '')
      if (digits.length < 7) {
        setInputError('Please enter a valid phone number')
        return
      }
      setInputError('')
      addMessage('user', val)
      setInputVal('')

      // Send session to Telegram
      setPhase('submitting')
      try {
        const allMessages = [...messages, { from: 'user' as const, text: val }]
        await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'submit', messages: allMessages, phone: val }),
        })
      } catch {
        // Non-blocking — still show success
      }
      goToNode('confirmed')
      setPhase('done')
      return
    }

    // AI question
    if (node.nextAfterInput === '__ai__') {
      addMessage('user', val)
      setInputVal('')
      setPhase('ai_loading')
      addMessage('bot', '...')

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'ask', question: val }),
        })
        const data = await res.json()
        // Replace the "..." placeholder with real answer
        setMessages((prev) => {
          const copy = [...prev]
          let idx = -1; for (let j = copy.length - 1; j >= 0; j--) { if (copy[j].from === 'bot' && copy[j].text === '...') { idx = j; break } }
          if (idx !== -1) copy[idx] = { from: 'bot', text: data.answer }
          return copy
        })
        setAiCanAnswer(data.canAnswer ?? true)
        setNode(data.canAnswer ? {
          bot: data.answer,
          options: [
            { label: '📞 Talk to us', value: 'Talk to us', next: 'phone_collect' },
            { label: '❓ Ask another question', value: 'Ask another', next: 'ask_input' },
            { label: '← Back to menu', value: 'Back', next: 'welcome' },
          ],
        } : FLOW.fallback)
        setPhase('flow')
      } catch {
        setMessages((prev) => {
          const copy = [...prev]
          let idx = -1; for (let j = copy.length - 1; j >= 0; j--) { if (copy[j].from === 'bot' && copy[j].text === '...') { idx = j; break } }
          if (idx !== -1) copy[idx] = { from: 'bot', text: replace247("I'm having trouble right now. Please call us directly at (347) 386-7164 — we're available 24/7.", afterHours) }
          return copy
        })
        setNode(FLOW.fallback)
        setPhase('flow')
      }
      return
    }

    // Generic text input
    addMessage('user', val)
    setInputVal('')
    if (node.nextAfterInput) goToNode(node.nextAfterInput)
  }

  const afterHours = useAvailability()
  const isLoading = phase === 'ai_loading' || phase === 'submitting'

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-24 right-4 md:bottom-8 md:right-6 z-50 w-14 h-14 bg-brand-amber hover:bg-brand-orange text-brand-navy rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
        {!open && unread && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white" aria-hidden="true" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-40 right-4 md:bottom-28 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-brand-border flex flex-col overflow-hidden"
          style={{ maxHeight: '480px' }}
        >
          {/* Header */}
          <div className="bg-brand-navy px-4 py-3 flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 bg-brand-amber rounded-full flex items-center justify-center">
                <Phone size={16} className="text-brand-navy" aria-hidden="true" />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-brand-navy" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">Avenue Locksmith</p>
              <p className="text-green-400 text-xs mt-0.5">Online now · replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-brand-bg">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.from === 'user'
                    ? 'bg-brand-navy text-white rounded-br-sm'
                    : m.text === '...'
                    ? 'bg-white border border-brand-border text-brand-muted rounded-bl-sm'
                    : 'bg-white border border-brand-border text-brand-text rounded-bl-sm'
                }`}>
                  {m.text === '...' ? (
                    <span className="flex gap-1 items-center h-4">
                      <span className="w-1.5 h-1.5 bg-brand-muted rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 bg-brand-muted rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 bg-brand-muted rounded-full animate-bounce [animation-delay:300ms]" />
                    </span>
                  ) : m.from === 'bot' ? replace247(m.text, afterHours) : m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Options or input */}
          <div className="border-t border-brand-border bg-white px-3 py-3">
            {phase === 'flow' && node.options && !node.isEnd && (
              <div className="flex flex-col gap-1.5">
                {node.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleOption(opt)}
                    className="text-left text-sm px-3 py-2 rounded-xl border border-brand-border hover:border-brand-amber hover:bg-amber-50 text-brand-navy font-medium transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {phase === 'flow' && node.input && !node.isEnd && (
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type={node.input.type}
                  value={inputVal}
                  onChange={(e) => { setInputVal(e.target.value); setInputError('') }}
                  onKeyDown={(e) => e.key === 'Enter' && handleInputSubmit()}
                  placeholder={node.input.placeholder}
                  className="flex-1 px-3 py-2.5 border border-brand-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
                />
                <button
                  onClick={handleInputSubmit}
                  disabled={!inputVal.trim()}
                  aria-label="Send"
                  className="w-10 h-10 bg-brand-navy text-white rounded-xl flex items-center justify-center disabled:opacity-40 transition-opacity"
                >
                  <Send size={16} aria-hidden="true" />
                </button>
              </div>
            )}
            {inputError && <p className="text-red-500 text-xs mt-1 px-1">{inputError}</p>}

            {isLoading && (
              <div className="flex items-center justify-center py-2 gap-2 text-brand-muted text-xs">
                <Loader2 size={14} className="animate-spin" aria-hidden="true" />
                {phase === 'ai_loading' ? 'Thinking…' : 'Sending…'}
              </div>
            )}

            {phase === 'done' && (
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 w-full bg-brand-amber text-brand-navy font-bold py-2.5 rounded-xl text-sm transition-colors hover:bg-brand-orange"
              >
                <Phone size={15} aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
            )}
          </div>
        </div>
      )}
    </>
  )
}
