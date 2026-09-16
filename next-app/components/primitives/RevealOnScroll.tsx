"use client"
import { motion } from "motion/react"
import type { ReactNode } from "react"

type RevealVariant = "reveal" | "reveal-left" | "reveal-right" | "reveal-grow"

export function RevealOnScroll({
  variant = "reveal",
  children,
}: {
  variant?: RevealVariant
  children: ReactNode
}) {
  return (
    <motion.div
      className={variant}
      viewport={{ once: true, amount: 0.15 }}
      onViewportEnter={(entry) => {
        ;(entry?.target as HTMLElement | undefined)?.classList.add("is-visible")
      }}
    >
      {children}
    </motion.div>
  )
}
