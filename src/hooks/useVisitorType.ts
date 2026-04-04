'use client'

import { useState, useEffect } from 'react'

export type VisitorType = 'new' | 'returning' | 'unknown'

const VISITED_KEY = 'av_visited'
const VISIT_COUNT_KEY = 'av_visit_count'

export function useVisitorType() {
  const [visitorType, setVisitorType] = useState<VisitorType>('unknown')
  const [visitCount, setVisitCount] = useState(0)

  useEffect(() => {
    try {
      const visited = localStorage.getItem(VISITED_KEY)
      const count = parseInt(localStorage.getItem(VISIT_COUNT_KEY) ?? '0', 10)
      const newCount = count + 1

      localStorage.setItem(VISIT_COUNT_KEY, String(newCount))
      setVisitCount(newCount)

      if (visited) {
        setVisitorType('returning')
      } else {
        localStorage.setItem(VISITED_KEY, String(Date.now()))
        setVisitorType('new')
      }
    } catch {
      setVisitorType('new')
    }
  }, [])

  return {
    visitorType,
    visitCount,
    isNew: visitorType === 'new',
    isReturning: visitorType === 'returning',
  }
}
