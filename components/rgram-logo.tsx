type Props = { className?: string }

export function RgramLogo({ className }: Props) {
  return (
    <div className={className}>
      <img 
        src="/images/Logo.png" 
        alt="Rgram Logo" 
        className="h-30 w-auto mx-auto"
      />
    </div>
  )
}
