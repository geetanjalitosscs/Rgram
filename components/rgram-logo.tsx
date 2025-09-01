type Props = { className?: string }

export function RgramLogo({ className }: Props) {
  return (
    <div className={className}>
      <img 
        src="/images/logo-rgram.png" 
        alt="Rgram Logo" 
        className="h-16 w-auto mx-auto"
      />
    </div>
  )
}
