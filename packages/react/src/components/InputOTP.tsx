import clsx from "clsx";
import React, { forwardRef, KeyboardEvent, useRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface InputOTPProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	/** Number of OTP digits */
	length?: number;
	/** Callback when OTP value changes */
	onChange?: (value: string) => void;
	/** Callback when OTP is complete */
	onComplete?: (value: string) => void;
	/** Current value */
	value?: string;
	/** Unique identifier for the OTP input group */
	id?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * InputOTP component for one-time password entry
 *
 * @example
 * ```tsx
 * <InputOTP
 *   length={6}
 *   value={otp}
 *   onChange={setOtp}
 *   onComplete={handleOtpComplete}
 * />
 * ```
 */
export const InputOTP = forwardRef<HTMLDivElement, InputOTPProps>(
	({ length = 6, onChange, onComplete, value = "", className, id, ...props }, ref) => {
		const [otp, setOtp] = useState<string[]>(value.split("").slice(0, length));
		const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
		const inputId = id || `otp-${Math.random().toString(36).substr(2, 9)}`;

		const handleChange = (index: number, digit: string) => {
			// Only allow digits
			if (digit && !/^\d$/.test(digit)) return;

			const newOtp = [...otp];
			newOtp[index] = digit;
			setOtp(newOtp);

			const otpValue = newOtp.join("");
			onChange?.(otpValue);

			// Move to next input if digit entered
			if (digit && index < length - 1) {
				inputRefs.current[index + 1]?.focus();
			}

			// Call onComplete if all digits entered
			if (otpValue.length === length) {
				onComplete?.(otpValue);
			}
		};

		const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
			// Move to previous input on backspace if current is empty
			if (e.key === "Backspace" && !otp[index] && index > 0) {
				inputRefs.current[index - 1]?.focus();
			}
		};

		const handlePaste = (e: React.ClipboardEvent) => {
			e.preventDefault();
			const pastedData = e.clipboardData.getData("text").slice(0, length);
			const digits = pastedData.split("").filter((char) => /^\d$/.test(char));

			const newOtp = [...otp];
			digits.forEach((digit, i) => {
				if (i < length) {
					newOtp[i] = digit;
				}
			});
			setOtp(newOtp);

			const otpValue = newOtp.join("");
			onChange?.(otpValue);

			if (otpValue.length === length) {
				onComplete?.(otpValue);
			}

			// Focus last filled input
			const lastIndex = Math.min(digits.length, length - 1);
			inputRefs.current[lastIndex]?.focus();
		};

		return (
			<div ref={ref} id={inputId} className={clsx("flex gap-2", className)} role="group" aria-label="OTP input" {...props}>
				{Array.from({ length }).map((_, index) => (
					<input
						key={index}
						ref={(el) => {
							inputRefs.current[index] = el;
						}}
						id={`${inputId}-${index}`}
						type="text"
						inputMode="numeric"
						maxLength={1}
						value={otp[index] || ""}
						onChange={(e) => handleChange(index, e.target.value)}
						onKeyDown={(e) => handleKeyDown(index, e)}
						onPaste={handlePaste}
						className="input input-bordered w-12 h-12 text-center text-lg"
						aria-label={`OTP digit ${index + 1}`}
					/>
				))}
			</div>
		);
	},
);

InputOTP.displayName = "InputOTP";
