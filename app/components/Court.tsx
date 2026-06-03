type props = {
  court?: string | null;
  visible?: boolean;
};

export default function Court({ court, visible = true }: props) {
  return (
    <div className="relative h-full">
      <svg
        className="maincourt relative h-full"
        viewBox="0 0 941 501"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 30.5L140.5 30.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M0.5 470.5L140.5 470.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M0.5 170.5L190.5 170.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M0.5 330.5L190.5 330.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M0.5 190.5L190.5 190.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M0.5 310.5L190.5 310.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M190.5 170.5L190.5 330.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M40.5 220.5L40.5 280.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M40.5 250.5L43 250.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M40.5 210.5L50.5 210.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M40.5 290.5L50.5 290.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M43 250.5C43 246.4 46.4 243 50.5 243C54.6 243 58 246.4 58 250.5C58 254.6 54.6 258 50.5 258C46.4 258 43 254.6 43 250.5Z"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M410.5 250.5C410.5 283.6 437.4 310.5 470.5 310.5L470.5 270.5C459.5 270.5 450.5 261.5 450.5 250.5C450.5 239.5 459.5 230.5 470.5 230.5L470.5 190.5C437.4 190.5 410.5 217.4 410.5 250.5Z"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M450.5 250.5C450.5 261.5 459.5 270.5 470.5 270.5L470.5 230.5C459.5 230.5 450.5 239.5 450.5 250.5Z"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M190.5 190.5C223.6 190.5 250.5 217.4 250.5 250.5C250.5 283.6 223.6 310.5 190.5 310.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M190.5 190.5C157.4 190.5 130.5 217.4 130.5 250.5C130.5 283.6 157.4 310.5 190.5 310.5"
          stroke="var(--stroke)"
          strokeDasharray="2 4"
        />
        <path
          d="M50.5 210.5C72.6 210.5 90.5 228.4 90.5 250.5C90.5 272.6 72.6 290.5 50.5 290.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M140.4 30.6998C261.8 80.3998 320 219 270.3 340.4C246.2 399.4 199.4 446.2 140.4 470.3C261.8 420.6 320 282 270.3 160.6C246.2 101.6 199.4 54.7998 140.4 30.6998Z"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M0.5 360.5L5.5 360.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M0.5 140.6L5.5 140.6"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M282.101 30.5L282.101 0.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M287.2 500.5L287.2 470.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path d="M70.3008 330.5L70.3008 340.5" stroke="var(--stroke)" />
        <path d="M80.4004 330.5L80.4004 340.5" stroke="var(--stroke)" />
        <path d="M110.4 330.5L110.4 340.5" stroke="var(--stroke)" />
        <path d="M140.5 330.5L140.5 340.5" stroke="var(--stroke)" />
        <path d="M70.3008 160.5L70.3008 170.5" stroke="var(--stroke)" />
        <path d="M80.4004 160.5L80.4004 170.5" stroke="var(--stroke)" />
        <path d="M110.4 160.5L110.4 170.5" stroke="var(--stroke)" />
        <path d="M140.5 500.5L140.5 470.5" stroke="var(--stroke)" />
        <path d="M140.4 30.5L140.4 0.5" stroke="var(--stroke)" />
        <path
          d="M940.5 30.5L800.5 30.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M940.5 470.5L800.5 470.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M940.5 170.5L750.5 170.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M940.5 330.5L750.5 330.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M940.5 190.5L750.5 190.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M940.5 310.5L750.5 310.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M750.5 170.5L750.5 330.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M900.5 220.5L900.5 280.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M900.5 250.5L898 250.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M900.5 210.5L890.5 210.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M900.5 290.5L890.5 290.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M898 250.5C898 246.4 894.6 243 890.5 243C886.4 243 883 246.4 883 250.5C883 254.6 886.4 258 890.5 258C894.6 258 898 254.6 898 250.5Z"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M470.5 500.5L470.5 310.5M470.5 190.5L470.5 0.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M530.5 250.5C530.5 283.6 503.6 310.5 470.5 310.5L470.5 270.5C481.5 270.5 490.5 261.5 490.5 250.5C490.5 239.5 481.5 230.5 470.5 230.5L470.5 190.5C503.6 190.5 530.5 217.4 530.5 250.5Z"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M490.5 250.5C490.5 261.5 481.5 270.5 470.5 270.5L470.5 230.5C481.5 230.5 490.5 239.5 490.5 250.5Z"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M750.5 190.5C717.4 190.5 690.5 217.4 690.5 250.5C690.5 283.6 717.4 310.5 750.5 310.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M750.5 190.5C783.6 190.5 810.5 217.4 810.5 250.5C810.5 283.6 783.6 310.5 750.5 310.5"
          stroke="var(--stroke)"
          strokeDasharray="2 4"
        />
        <path
          d="M890.5 210.5C868.4 210.5 850.5 228.4 850.5 250.5C850.5 272.6 868.4 290.5 890.5 290.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M800.6 30.6998C679.2 80.3998 621 219 670.7 340.4C694.8 399.4 741.6 446.2 800.6 470.3C679.2 420.6 621 282 670.7 160.6C694.8 101.6 741.6 54.7998 800.6 30.6998Z"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M940.5 360.5L935.5 360.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M940.5 140.6L935.5 140.6"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M658.899 30.5L658.899 0.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path
          d="M653.8 500.5L653.8 470.5"
          stroke="var(--stroke)"
          strokeLinecap="round"
        />
        <path d="M870.699 330.5L870.699 340.5" stroke="var(--stroke)" />
        <path d="M860.6 330.5L860.6 340.5" stroke="var(--stroke)" />
        <path d="M830.6 330.5L830.6 340.5" stroke="var(--stroke)" />
        <path d="M800.5 330.5L800.5 340.5" stroke="var(--stroke)" />
        <path d="M870.699 160.5L870.699 170.5" stroke="var(--stroke)" />
        <path d="M860.6 160.5L860.6 170.5" stroke="var(--stroke)" />
        <path d="M830.6 160.5L830.6 170.5" stroke="var(--stroke)" />
        <path d="M800.5 500.5L800.5 470.5" stroke="var(--stroke)" />
        <path d="M800.6 30.5L800.6 0.5" stroke="var(--stroke)" />
      </svg>
      {court ? (
        <img
          className="absolute inset-0 transition-opacity duration-400 ease-in-out"
          src={court}
          alt="Court"
          style={{ opacity: visible ? 1 : 0 }}
        />
      ) : null}
    </div>
  );
}
