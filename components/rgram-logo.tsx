type Props = { className?: string }

export function RgramLogo({ className }: Props) {
  return (
    <div className={className}>
      <img 
        src="/images/Rgram-logo.jpeg" 
        alt="Rgram Logo" 
        className="h-30 w-auto mx-auto"
      />
    </div>
  )
}
