import * as React from 'react'
const DownloadIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h.5m6-18L19 8.625M13.5 3v4.625a1 1 0 0 0 1 1H19m0 0V19a2 2 0 0 1-2 2h-.5M12 12v8m0 0-2.5-2.5M12 20l2.5-2.5"
    />
  </svg>
)
export default DownloadIcon
