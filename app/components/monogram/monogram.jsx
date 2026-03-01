import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const blueGradientId = `${id}blueGradient`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="100"
      height="60"
      viewBox="0 0 100 80"
      ref={ref}
      {...props}
    >
      <defs>
        <linearGradient id={blueGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="50%" stopColor="#0099FF" />
          <stop offset="100%" stopColor="#00CCFF" />
        </linearGradient>
      </defs>

      {/* Bold Stylish Y with curves - Premium Design */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Left arm - smooth curve */}
        <path
          d="M 18 10 Q 32 26 50 40"
          stroke={highlight ? 'url(#' + blueGradientId + ')' : '#0066FF'}
          strokeWidth="8"
        />
        
        {/* Right arm - smooth curve */}
        <path
          d="M 82 10 Q 68 26 50 40"
          stroke={highlight ? 'url(#' + blueGradientId + ')' : '#0066FF'}
          strokeWidth="8"
        />
        
        {/* Vertical stem - bold and curved */}
        <path
          d="M 50 40 Q 46 54 50 72"
          stroke={highlight ? 'url(#' + blueGradientId + ')' : '#0066FF'}
          strokeWidth="9"
        />
      </g>

      {/* Top accent bar - stylish element */}
      {highlight && (
        <line
          x1="20"
          y1="6"
          x2="80"
          y2="6"
          stroke="url(#' + blueGradientId + ')"
          strokeWidth="3"
          opacity="0.8"
        />
      )}

      {/* Left accent line */}
      {highlight && (
        <line
          x1="15"
          y1="20"
          x2="25"
          y2="12"
          stroke="url(#' + blueGradientId + ')"
          strokeWidth="2"
          opacity="0.6"
        />
      )}

      {/* Right accent line */}
      {highlight && (
        <line
          x1="85"
          y1="20"
          x2="75"
          y2="12"
          stroke="url(#' + blueGradientId + ')"
          strokeWidth="2"
          opacity="0.6"
        />
      )}

      {/* Bold center junction circle */}
      <circle
        cx="50"
        cy="40"
        r="4"
        fill={highlight ? 'url(#' + blueGradientId + ')' : '#0066FF'}
      />

      {/* Bottom accent dot */}
      {highlight && (
        <circle
          cx="50"
          cy="72"
          r="2.5"
          fill="url(#' + blueGradientId + ')"
        />
      )}
    </svg>
  );
});
