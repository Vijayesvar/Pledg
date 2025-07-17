export default function Button({
    children,
    className,
    variant = "fancy",
    disabled = false,
    onClick,
    type = "button",
}: { children: React.ReactNode, className?: string, variant?: "fancy" | "boring", disabled?: boolean, onClick?: () => void, type?: "button" | "submit" | "reset" }) {
    return (
        <button
            className={`${variant === "fancy" ? "text-white shadow-lg" : "text-foreground shadow-sm border border-foreground/20"} cursor-pointer font-medium text-lg px-7 py-2.5 rounded-2xl ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
            style={{ background: variant === "fancy" ? "var(--button-fancy-gradient)" : "var(--button-boring-gradient)" }}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
}
