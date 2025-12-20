interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'success'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-surface text-gray-400 border border-white/10',
    accent: 'bg-accent text-void',
    success: 'bg-accent/20 text-accent border border-accent/30',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
