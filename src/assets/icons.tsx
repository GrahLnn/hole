import { motion, AnimationProps } from "motion/react";

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  thick?: number;
}

export const logos = {
  tauri({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        width="206"
        height="231"
        viewBox="0 0 206 231"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M143.143 84C143.143 96.1503 133.293 106 121.143 106C108.992 106 99.1426 96.1503 99.1426 84C99.1426 71.8497 108.992 62 121.143 62C133.293 62 143.143 71.8497 143.143 84Z"
          fill={color || "currentColor"}
        />
        <ellipse
          cx="84.1426"
          cy="147"
          rx="22"
          ry="22"
          transform="rotate(180 84.1426 147)"
          fill="#24C8DB"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M166.738 154.548C157.86 160.286 148.023 164.269 137.757 166.341C139.858 160.282 141 153.774 141 147C141 144.543 140.85 142.121 140.558 139.743C144.975 138.204 149.215 136.139 153.183 133.575C162.73 127.404 170.292 118.608 174.961 108.244C179.63 97.8797 181.207 86.3876 179.502 75.1487C177.798 63.9098 172.884 53.4021 165.352 44.8883C157.82 36.3744 147.99 30.2165 137.042 27.1546C126.095 24.0926 114.496 24.2568 103.64 27.6274C92.7839 30.998 83.1319 37.4317 75.8437 46.1553C74.9102 47.2727 74.0206 48.4216 73.176 49.5993C61.9292 50.8488 51.0363 54.0318 40.9629 58.9556C44.2417 48.4586 49.5653 38.6591 56.679 30.1442C67.0505 17.7298 80.7861 8.57426 96.2354 3.77762C111.685 -1.01901 128.19 -1.25267 143.769 3.10474C159.348 7.46215 173.337 16.2252 184.056 28.3411C194.775 40.457 201.767 55.4101 204.193 71.404C206.619 87.3978 204.374 103.752 197.73 118.501C191.086 133.25 180.324 145.767 166.738 154.548ZM41.9631 74.275L62.5557 76.8042C63.0459 72.813 63.9401 68.9018 65.2138 65.1274C57.0465 67.0016 49.2088 70.087 41.9631 74.275Z"
          fill={color || "currentColor"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.4045 76.4519C47.3493 70.6709 57.2677 66.6712 67.6171 64.6132C65.2774 70.9669 64 77.8343 64 85.0001C64 87.1434 64.1143 89.26 64.3371 91.3442C60.0093 92.8732 55.8533 94.9092 51.9599 97.4256C42.4128 103.596 34.8505 112.392 30.1816 122.756C25.5126 133.12 23.9357 144.612 25.6403 155.851C27.3449 167.09 32.2584 177.598 39.7906 186.112C47.3227 194.626 57.153 200.784 68.1003 203.846C79.0476 206.907 90.6462 206.743 101.502 203.373C112.359 200.002 122.011 193.568 129.299 184.845C130.237 183.722 131.131 182.567 131.979 181.383C143.235 180.114 154.132 176.91 164.205 171.962C160.929 182.49 155.596 192.319 148.464 200.856C138.092 213.27 124.357 222.426 108.907 227.222C93.458 232.019 76.9524 232.253 61.3736 227.895C45.7948 223.538 31.8055 214.775 21.0867 202.659C10.3679 190.543 3.37557 175.59 0.949823 159.596C-1.47592 143.602 0.768139 127.248 7.41237 112.499C14.0566 97.7497 24.8183 85.2327 38.4045 76.4519ZM163.062 156.711L163.062 156.711C162.954 156.773 162.846 156.835 162.738 156.897C162.846 156.835 162.954 156.773 163.062 156.711Z"
          fill={color || "currentColor"}
        />
      </svg>
    );
  },
};

export const icons = {
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjx0aXRsZT5taW51czwvdGl0bGU+PGcgZmlsbD0iIzIxMjEyMSI+PHBhdGggZD0iTTE0Ljc1MDEgOS43NUgzLjI1MDEyQzIuODM2MDIgOS43NSAyLjUwMDEyIDkuNDE0MSAyLjUwMDEyIDlDMi41MDAxMiA4LjU4NTkgMi44MzYwMiA4LjI1IDMuMjUwMTIgOC4yNUgxNC43NTAxQzE1LjE2NDIgOC4yNSAxNS41MDAxIDguNTg1OSAxNS41MDAxIDlDMTUuNTAwMSA5LjQxNDEgMTUuMTY0MiA5Ljc1IDE0Ljc1MDEgOS43NVoiPjwvcGF0aD48L2c+PC9zdmc+)
   * @returns
   */
  minus({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <line x1="3.25" y1="9" x2="14.75" y2="9" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjx0aXRsZT5tZWRpYS1zdG9wPC90aXRsZT48ZyBmaWxsPSIjMjEyMTIxIj48cmVjdCB4PSIyLjc1IiB5PSIyLjc1IiB3aWR0aD0iMTIuNSIgaGVpZ2h0PSIxMi41IiByeD0iMiIgcnk9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9yZWN0PjwvZz48L3N2Zz4=)
   * @returns
   */
  square({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <rect x="2.75" y="2.75" width="12.5" height="12.5" rx="2" ry="2" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4IiA+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0id2hpdGUiLz48ZyBmaWxsPSJub25lIiBzdHJva2VMaW5lY2FwPSJyb3VuZCIgc3Ryb2tlTGluZWpvaW49InJvdW5kIiBzdHJva2VXaWR0aD0iMS41IiBzdHJva2U9IiMyMTIxMjEiPjxyZWN0IHg9IjIuNzUiIHk9IjQuNzUiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgcng9IjIiIHJ5PSIyIiAvPjxwYXRoIGQ9Ik0xNS4yNSAxMS4yNXYtNWE0IDQgMCAwIDAtNC00aC01IiBzdHJva2VMaW5lY2FwPSJyb3VuZCIgc3Ryb2tlTGluZWpvaW49InJvdW5kIiBzdHJva2VXaWR0aD0iMS41Ii8+PC9nPjwvc3ZnPg==)
   * @returns
   */
  stacksquare({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <rect x="2.75" y="4.75" width="10" height="10" rx="2" ry="2" />
          <path
            d="M15.25 11.25v-5a4 4 0 0 0-4-4h-5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjx0aXRsZT54bWFyazwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMjEyMTIxIj48cGF0aCBkPSJNMTQgNEw0IDE0Ij48L3BhdGg+PHBhdGggZD0iTTQgNEwxNCAxNCI+PC9wYXRoPjwvZz48L3N2Zz4=)
   * @returns
   */
  xmark({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <line x1="14" y1="4" x2="4" y2="14" />
          <line x1="4" y1="4" x2="14" y2="14" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjx0aXRsZT5waW4tdGFjay0yPC90aXRsZT48ZyBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMyMTIxMjEiPjxwYXRoIGQ9Ik0xMC4zNzEgMTUuNTUzQzEwLjgwMyAxNC45OTYgMTEuMzkxIDE0LjA4MyAxMS43MTkgMTIuODM1QzExLjg4OCAxMi4xOTMgMTEuOTQ5IDExLjYxMSAxMS45NjIgMTEuMTM0TDE0Ljk2NyA4LjEyOUMxNS43NDggNy4zNDggMTUuNzQ4IDYuMDgyIDE0Ljk2NyA1LjMwMUwxMi42OTkgMy4wMzNDMTEuOTE4IDIuMjUyIDEwLjY1MiAyLjI1MiA5Ljg3MTAxIDMuMDMzTDYuODY2MDEgNi4wMzhDNi4zODgwMSA2LjA1MSA1LjgwNzAxIDYuMTEyIDUuMTY1MDEgNi4yODFDMy45MTcwMSA2LjYwOSAzLjAwNDAxIDcuMTk3IDIuNDQ3MDEgNy42MjlMMTAuMzcyIDE1LjU1NEwxMC4zNzEgMTUuNTUzWiIgZmlsbD0iIzIxMjEyMSIgZmlsbC1vcGFjaXR5PSIwLjMiIGRhdGEtc3Ryb2tlPSJub25lIiBzdHJva2U9Im5vbmUiPjwvcGF0aD48cGF0aCBkPSJNMy4wODA5OSAxNC45MTlMNi40MDg5OSAxMS41OTEiPjwvcGF0aD48cGF0aCBkPSJNMTAuMzcxIDE1LjU1M0MxMC44MDMgMTQuOTk2IDExLjM5MSAxNC4wODMgMTEuNzE5IDEyLjgzNUMxMS44ODggMTIuMTkzIDExLjk0OSAxMS42MTEgMTEuOTYyIDExLjEzNEwxNC45NjcgOC4xMjlDMTUuNzQ4IDcuMzQ4IDE1Ljc0OCA2LjA4MiAxNC45NjcgNS4zMDFMMTIuNjk5IDMuMDMzQzExLjkxOCAyLjI1MiAxMC42NTIgMi4yNTIgOS44NzEwMSAzLjAzM0w2Ljg2NjAxIDYuMDM4QzYuMzg4MDEgNi4wNTEgNS44MDcwMSA2LjExMiA1LjE2NTAxIDYuMjgxQzMuOTE3MDEgNi42MDkgMy4wMDQwMSA3LjE5NyAyLjQ0NzAxIDcuNjI5TDEwLjM3MiAxNS41NTRMMTAuMzcxIDE1LjU1M1oiPjwvcGF0aD48L2c+PC9zdmc+)
   * @returns
   */
  pin({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <path
            d="M10.371 15.553C10.803 14.996 11.391 14.083 11.719 12.835C11.888 12.193 11.949 11.611 11.962 11.134L14.967 8.129C15.748 7.348 15.748 6.082 14.967 5.301L12.699 3.033C11.918 2.252 10.652 2.252 9.87101 3.033L6.86601 6.038C6.38801 6.051 5.80701 6.112 5.16501 6.281C3.91701 6.609 3.00401 7.197 2.44701 7.629L10.372 15.554L10.371 15.553Z"
            fill={color || "currentColor"}
            fillOpacity="0.3"
            data-stroke="none"
            stroke="none"
          />
          <path d="M3.08099 14.919L6.40899 11.591" />
          <path d="M10.371 15.553C10.803 14.996 11.391 14.083 11.719 12.835C11.888 12.193 11.949 11.611 11.962 11.134L14.967 8.129C15.748 7.348 15.748 6.082 14.967 5.301L12.699 3.033C11.918 2.252 10.652 2.252 9.87101 3.033L6.86601 6.038C6.38801 6.051 5.80701 6.112 5.16501 6.281C3.91701 6.609 3.00401 7.197 2.44701 7.629L10.372 15.554L10.371 15.553Z" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjx0aXRsZT5sYW5ndWFnZTwvdGl0bGU+PGcgZmlsbD0iIzIxMjEyMSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDIuMjVDNyAxLjgzNTc5IDYuNjY0MjEgMS41IDYuMjUgMS41QzUuODM1NzkgMS41IDUuNSAxLjgzNTc5IDUuNSAyLjI1VjMuNUgyLjI1QzEuODM1NzkgMy41IDEuNSAzLjgzNTc5IDEuNSA0LjI1QzEuNSA0LjY2NDIxIDEuODM1NzkgNSAyLjI1IDVIMy41NjM0N0MzLjc0Njc2IDYuMzAzMzEgNC4yOTgxOCA3LjUwMTcgNS4xMjEyIDguNDczMzZDNC45OTQxIDguNTU2IDQuODY2MjQgOC42MzIwNCA0LjczODc4IDguNzAyMDlDNC4wODk3NSA5LjA1ODc3IDMuNDQ2MTYgOS4yNjA3MSAyLjk2MjAyIDkuMzcyODVDMi43MjEyMSA5LjQyODYyIDIuNTIzMzkgOS40NjEzNyAyLjM4ODg3IDkuNDc5OTNDMi4yOTQ0MSA5LjQ5Mjk3IDIuMjQ0MzIgOS40OTgwNSAyLjE5ODY0IDkuNTAxNzVDMS43ODU5NyA5LjUzMDA2IDEuNDc0MDMgOS44ODcyMyAxLjUwMTY3IDEwLjMwMDFDMS41MjkzNSAxMC43MTM0IDEuODg2ODIgMTEuMDI2IDIuMzAwMTEgMTAuOTk4M0wyLjMwMTgyIDEwLjk5ODJDMi4zODA0NCAxMC45OTI3IDIuNDU3MzcgMTAuOTg0NyAyLjU5Mzk0IDEwLjk2NTlDMi43NjcyMyAxMC45NDE5IDMuMDEwMDMgMTAuOTAxNCAzLjMwMDQ4IDEwLjgzNDJDMy44Nzg4MyAxMC43MDAyIDQuNjYwMjUgMTAuNDU2OCA1LjQ2MTIyIDEwLjAxNjZDNS43MjAyOSA5Ljg3NDI3IDUuOTgwODYgOS43MTEzOCA2LjIzNjc5IDkuNTI1NTZDNi43NzIxNyA5LjkyNzY0IDcuMzcxMDMgMTAuMjU0NiA4LjAxOTYzIDEwLjQ4OUM4LjQwOTE3IDEwLjYyOTkgOC44MzkxMiAxMC40MjgyIDguOTc5OTQgMTAuMDM4N0M5LjEyMDc2IDkuNjQ5MTYgOC45MTkxMyA5LjIxOTIyIDguNTI5NTkgOS4wNzg0QzguMTE0MzkgOC45MjgzIDcuNzI1MjkgOC43Mjk2NyA3LjM2ODE5IDguNDg5OTZDOC4xMDU5NyA3LjYzNjI1IDguNjk0MTIgNi41MDA2IDguOTIxMjMgNUgxMC4yNUMxMC42NjQyIDUgMTEgNC42NjQyMSAxMSA0LjI1QzExIDMuODM1NzkgMTAuNjY0MiAzLjUgMTAuMjUgMy41SDdWMi4yNVpNNy40MDAwNSA1SDYuMjVINS4wODI1NEM1LjI1MTE5IDUuOTI5OCA1LjY2MDk0IDYuNzg0MTcgNi4yNTIyNyA3LjQ4Nzg4QzYuNzc2NzMgNi44NzI1IDcuMjAxMTYgNi4wNjUyOCA3LjQwMDA1IDVaIiBmaWxsLW9wYWNpdHk9IjAuNCI+PC9wYXRoPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMjUgN0MxMS45Mzc0IDcgMTEuNjU3NSA3LjE5MzkzIDExLjU0NzcgNy40ODY2Nkw4LjU0Nzc0IDE1LjQ4NjdDOC40MDIzIDE1Ljg3NDUgOC41OTg4MSAxNi4zMDY4IDguOTg2NjUgMTYuNDUyMkM5LjM3NDQ5IDE2LjU5NzcgOS44MDY4IDE2LjQwMTIgOS45NTIyNCAxNi4wMTMzTDEwLjcwNzIgMTRMMTQuMjkyNyAxNEwxNS4wNDc3IDE2LjAxMzNDMTUuMTkzMiAxNi40MDEyIDE1LjYyNTUgMTYuNTk3NyAxNi4wMTMzIDE2LjQ1MjJDMTYuNDAxMiAxNi4zMDY4IDE2LjU5NzcgMTUuODc0NSAxNi40NTIyIDE1LjQ4NjdMMTMuNDUyMiA3LjQ4NjY2QzEzLjM0MjUgNy4xOTM5MyAxMy4wNjI2IDcgMTIuNzUgN0gxMi4yNVpNMTMuNzMwMiAxMi41TDEyLjUgOS4yMTkzM0wxMS4yNjk3IDEyLjVMMTMuNzMwMiAxMi41WiI+PC9wYXRoPjwvZz48L3N2Zz4=)
   * @returns
   */
  lang({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <path d="M2.25 4.25H10.25" /> <path d="M6.25 2.25V4.25" />
          <path d="M4.25 4.25C4.341 6.926 6.166 9.231 8.75 9.934" />
          <path d="M8.25 4.25C7.85 9.875 2.25 10.25 2.25 10.25" />
          <path d="M9.25 15.75L12.25 7.75H12.75L15.75 15.75" />
          <path d="M10.188 13.25H14.813" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preivew ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSIgPjxsaW5lIHgxPSIxMy4yNSIgeTE9IjUuMjUiIHgyPSIxNi4yNSIgeTI9IjUuMjUiIC8+PGxpbmUgeDE9IjEuNzUiIHkxPSI1LjI1IiB4Mj0iOC43NSIgeTI9IjUuMjUiIC8+PGNpcmNsZSBjeD0iMTEiIGN5PSI1LjI1IiByPSIyLjI1IiAvPjxsaW5lIHgxPSI0Ljc1IiB5MT0iMTIuNzUiIHgyPSIxLjc1IiB5Mj0iMTIuNzUiIC8+PGxpbmUgeDE9IjE2LjI1IiB5MT0iMTIuNzUiIHgyPSI5LjI1IiB5Mj0iMTIuNzUiIC8+PGNpcmNsZSBjeD0iNyIgY3k9IjEyLjc1IiByPSIyLjI1IiAvPjwvZz48L3N2Zz4=)
   * @returns
   */
  sliders({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <line x1="13.25" y1="5.25" x2="16.25" y2="5.25" />
          <line x1="1.75" y1="5.25" x2="8.75" y2="5.25" />
          <circle cx="11" cy="5.25" r="2.25" />
          <line x1="4.75" y1="12.75" x2="1.75" y2="12.75" />
          <line x1="16.25" y1="12.75" x2="9.25" y2="12.75" />
          <circle cx="7" cy="12.75" r="2.25" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preivew ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSIgPjxsaW5lIHgxPSIxNS4yNSIgeTE9IjkiIHgyPSIxNi4yNSIgeTI9IjkiIC8+PGxpbmUgeDE9IjEuNzUiIHkxPSI5IiB4Mj0iOSIgeTI9IjkiIC8+PGxpbmUgeDE9IjUiIHkxPSIzLjc1IiB4Mj0iMS43NSIgeTI9IjMuNzUiIC8+PGxpbmUgeDE9IjE2LjI1IiB5MT0iMy43NSIgeDI9IjExLjI1IiB5Mj0iMy43NSIgLz48bGluZSB4MT0iNSIgeTE9IjE0LjI1IiB4Mj0iMS43NSIgeTI9IjE0LjI1IiAvPjxsaW5lIHgxPSIxNi4yNSIgeTE9IjE0LjI1IiB4Mj0iMTEuMjUiIHkyPSIxNC4yNSIgLz48Y2lyY2xlIGN4PSIxMSIgY3k9IjkiIHI9IjEuNzUiIC8+PGNpcmNsZSBjeD0iNi43NSIgY3k9IjMuNzUiIHI9IjEuNzUiIC8+PGNpcmNsZSBjeD0iNi43NSIgY3k9IjE0LjI1IiByPSIxLjc1IiAvPjwvZz48L3N2Zz4=)
   * @returns
   */
  sliders2({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <line x1="15.25" y1="9" x2="16.25" y2="9" />
          <line x1="1.75" y1="9" x2="9" y2="9" />
          <line x1="5" y1="3.75" x2="1.75" y2="3.75" />
          <line x1="16.25" y1="3.75" x2="11.25" y2="3.75" />
          <line x1="5" y1="14.25" x2="1.75" y2="14.25" />
          <line x1="16.25" y1="14.25" x2="11.25" y2="14.25" />
          <circle cx="11" cy="9" r="1.75" />
          <circle cx="6.75" cy="3.75" r="1.75" />
          <circle cx="6.75" cy="14.25" r="1.75" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSIgPjxsaW5lIHgxPSI1LjI1IiB5MT0iOSIgeDI9IjEyLjc1IiB5Mj0iOSIgLz48bGluZSB4MT0iMi43NSIgeTE9IjQuMjUiIHgyPSIxNS4yNSIgeTI9IjQuMjUiIC8+PGxpbmUgeDE9IjgiIHkxPSIxMy43NSIgeDI9IjEwIiB5Mj0iMTMuNzUiIC8+PC9nPjwvc3ZnPg==)
   * @returns
   */
  barsFilter({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <line x1="5.25" y1="9" x2="12.75" y2="9" />
          <line x1="2.75" y1="4.25" x2="15.25" y2="4.25" />
          <line x1="8" y1="13.75" x2="10" y2="13.75" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preivew ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSIgPjxlbGxpcHNlIGN4PSI5IiBjeT0iOSIgcng9IjMiIHJ5PSI3LjI1IiAvPjxsaW5lIHgxPSIyLjEwNiIgeTE9IjYuNzUiIHgyPSIxNS44OTQiIHkyPSI2Ljc1IiAvPjxsaW5lIHgxPSIyLjI5IiB5MT0iMTEuNzUiIHgyPSIxNS43MSIgeTI9IjExLjc1IiAvPjxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSI3LjI1IiAvPjwvZz48L3N2Zz4=)
   * @returns
   */
  globe3({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <ellipse cx="9" cy="9" rx="3" ry="7.25" />
          <line x1="2.106" y1="6.75" x2="15.894" y2="6.75" />
          <line x1="2.29" y1="11.75" x2="15.71" y2="11.75" />
          <circle cx="9" cy="9" r="7.25" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSIgPjxwYXRoIGQ9Ik0xNC4yNCwxMy44MjNjMS4xOTUtLjYyNywyLjAxLTEuODgsMi4wMS0zLjMyMywwLTEuNzM2LTEuMTg1LTMuMTgyLTIuNzg2LTMuNjA5LS4xODYtMi4zMTQtMi4xMDItNC4xNDEtNC40NjQtNC4xNDEtMi40ODUsMC00LjUsMi4wMTUtNC41LDQuNSwwLC4zNSwuMDQ5LC42ODYsLjEyNCwxLjAxMy0xLjU5NywuMDY3LTIuODc0LDEuMzc0LTIuODc0LDIuOTg3LDAsMS4zMDYsLjgzNSwyLjQxNywyLDIuODI5IiAvPjxwb2x5bGluZSBwb2ludHM9IjkuMjUgMTMuNzUgMTEuNzUgMTMuNzUgMTEuNzUgMTEuMjUiIC8+PHBhdGggZD0iTTExLDE2LjM4N2MtLjUwMSwuNTMxLTEuMjEyLC44NjMtMiwuODYzLTEuNTE5LDAtMi43NS0xLjIzMS0yLjc1LTIuNzVzMS4yMzEtMi43NSwyLjc1LTIuNzVjMS4xNjYsMCwyLjE2MiwuNzI2LDIuNTYzLDEuNzUiIC8+PC9nPjwvc3ZnPg==)
   * @returns
   */
  cloudRefresh({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <path d="M14.24,13.823c1.195-.627,2.01-1.88,2.01-3.323,0-1.736-1.185-3.182-2.786-3.609-.186-2.314-2.102-4.141-4.464-4.141-2.485,0-4.5,2.015-4.5,4.5,0,.35,.049,.686,.124,1.013-1.597,.067-2.874,1.374-2.874,2.987,0,1.306,.835,2.417,2,2.829" />
          <polyline points="9.25 13.75 11.75 13.75 11.75 11.25" />
          <path d="M11,16.387c-.501,.531-1.212,.863-2,.863-1.519,0-2.75-1.231-2.75-2.75s1.231-2.75,2.75-2.75c1.166,0,2.162,.726,2.563,1.75" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSIgPjxsaW5lIHgxPSIxNS4yNSIgeTE9IjE1LjI1IiB4Mj0iMTEuMjg1IiB5Mj0iMTEuMjg1IiAvPjxjaXJjbGUgY3g9IjcuNzUiIGN5PSI3Ljc1IiByPSI1IiAvPjxwYXRoIGQ9Ik03Ljc1LDUuMjVjMS4zODEsMCwyLjUsMS4xMTksMi41LDIuNSIgLz48L2c+PC9zdmc+)
   * @returns
   */
  magnifler3({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <line x1="15.25" y1="15.25" x2="11.285" y2="11.285" />
          <circle cx="7.75" cy="7.75" r="5" />
          <path d="M7.75,5.25c1.381,0,2.5,1.119,2.5,2.5" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSIgPjxsaW5lIHgxPSI1Ljc1IiB5MT0iOSIgeDI9IjE2LjI1IiB5Mj0iOSIgLz48bGluZSB4MT0iMS43NSIgeTE9IjkiIHgyPSIyLjc1IiB5Mj0iOSIgLz48bGluZSB4MT0iMTUuMjUiIHkxPSIzLjc1IiB4Mj0iMTYuMjUiIHkyPSIzLjc1IiAvPjxsaW5lIHgxPSIxLjc1IiB5MT0iMy43NSIgeDI9IjEyLjI1IiB5Mj0iMy43NSIgLz48bGluZSB4MT0iMTUuMjUiIHkxPSIxNC4yNSIgeDI9IjE2LjI1IiB5Mj0iMTQuMjUiIC8+PGxpbmUgeDE9IjEuNzUiIHkxPSIxNC4yNSIgeDI9IjEyLjI1IiB5Mj0iMTQuMjUiIC8+PC9nPjwvc3ZnPg==)
   * @returns
   */
  menuBars({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <line x1="5.75" y1="9" x2="16.25" y2="9" />
          <line x1="1.75" y1="9" x2="2.75" y2="9" />
          <line x1="15.25" y1="3.75" x2="16.25" y2="3.75" />
          <line x1="1.75" y1="3.75" x2="12.25" y2="3.75" />
          <line x1="15.25" y1="14.25" x2="16.25" y2="14.25" />
          <line x1="1.75" y1="14.25" x2="12.25" y2="14.25" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSIgPjxsaW5lIHgxPSI5IiB5MT0iMi43NSIgeDI9IjkiIHkyPSIxNS4yNSIgLz48cmVjdCB4PSIyLjc1IiB5PSIyLjc1IiB3aWR0aD0iMTIuNSIgaGVpZ2h0PSIxMi41IiByeD0iMiIgcnk9IjIiIC8+PC9nPjwvc3ZnPg==)
   * @returns
   */
  tableCols2({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <line x1="9" y1="2.75" x2="9" y2="15.25" />
          <rect x="2.75" y="2.75" width="12.5" height="12.5" rx="2" ry="2" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSIgPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSIyLjUiIC8+PGNpcmNsZSBjeD0iMTMiIGN5PSI1IiByPSIyLjUiIC8+PGNpcmNsZSBjeD0iNSIgY3k9IjEzIiByPSIyLjUiIC8+PGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMi41IiAvPjwvZz48L3N2Zz4=)
   * @returns
   */
  gridCircle({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <circle cx="5" cy="5" r="2.5" />
          <circle cx="13" cy="5" r="2.5" />
          <circle cx="5" cy="13" r="2.5" />
          <circle cx="13" cy="13" r="2.5" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSIgPjxsaW5lIHgxPSI5IiB5MT0iMTUuMjUiIHgyPSI5IiB5Mj0iMi43NSIgLz48cG9seWxpbmUgcG9pbnRzPSIxMy4yNSAxMSA5IDE1LjI1IDQuNzUgMTEiIC8+PC9nPjwvc3ZnPg==)
   * @returns
   */
  arrowDown({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <line x1="9" y1="15.25" x2="9" y2="2.75" />
          <polyline points="13.25 11 9 15.25 4.75 11" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSIgPjxsaW5lIHgxPSI5IiB5MT0iMTYiIHgyPSI5IiB5Mj0iMTIuNzUiIC8+PHBhdGggZD0iTTE0LjI1LDguNzV2NS41YzAsMS4xMDUtLjg5NSwyLTIsMkg1Ljc1Yy0xLjEwNSwwLTItLjg5NS0yLTJ2LTUuNSIgLz48cG9seWxpbmUgcG9pbnRzPSIyIDcgOSAxLjc1IDE2IDciIC8+PC9nPjwvc3ZnPg==)
   * @returns
   */
  house6({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <line x1="9" y1="16" x2="9" y2="12.75" />
          <path d="M14.25,8.75v5.5c0,1.105-.895,2-2,2H5.75c-1.105,0-2-.895-2-2v-5.5" />
          <polyline points="2 7 9 1.75 16 7" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSI+PHBhdGggZD0iTTQuNzUyNjkgMi43NUwxMy4yNTQ3IDIuNzVMMTUuNTIxOSAxMi4yNUg3LjA0NjlMNC43NTI2OSAyLjc1WiIgZmlsbD0iIzIxMjEyMSIgZmlsbC1vcGFjaXR5PSIwLjMiIGRhdGEtc3Ryb2tlPSJub25lIiBzdHJva2U9Im5vbmUiPjwvcGF0aD48cGF0aCBkPSJNNC4yNDk5NyAxMi4yNUgyLjQ2OTk3Ij48L3BhdGg+PHBhdGggZD0iTTEuNzUgMTUuMjVMNC43NSAyLjc1Ij48L3BhdGg+PHBhdGggZD0iTTE1LjUzIDEyLjI1SDcuMDMwMDMiPjwvcGF0aD48cGF0aCBkPSJNNy43NSAxNS4yNUw0Ljc1IDIuNzVIMTMuMjVMMTYuMjUgMTUuMjUiPjwvcGF0aD48L2c+PC9zdmc+)
   * @returns
   */
  signboard({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <path
            d="M4.75269 2.75L13.2547 2.75L15.5219 12.25H7.0469L4.75269 2.75Z"
            fill={color || "currentColor"}
            fillOpacity="0.3"
            data-stroke="none"
            stroke="none"
          />
          <path d="M4.24997 12.25H2.46997" />
          <path d="M1.75 15.25L4.75 2.75" />
          <path d="M15.53 12.25H7.03003" />
          <path d="M7.75 15.25L4.75 2.75H13.25L16.25 15.25" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9IiMyMTIxMjEiPjxwYXRoIGQ9Ik0xMy4xNjIxIDMuODE5OTlDMTMuMDE0MSAzLjgxOTk5IDEyLjg2MzEgMy43NzYgMTIuNzMxMSAzLjY4NEMxMS45NDcxIDMuMTMyIDExLjA2OTEgMi43Njg5OSAxMC4xMjExIDIuNjAzOTlDOS43MTQwNyAyLjUzMjk5IDkuNDQwMDggMi4xNDQ5OCA5LjUxMTA4IDEuNzM2OThDOS41ODIwOCAxLjMyODk4IDkuOTcwMDYgMS4wNTMgMTAuMzc5MSAxLjEyN0MxMS41NDYxIDEuMzMgMTIuNjI3MSAxLjc3Njk1IDEzLjU5NTEgMi40NTY5NUMxMy45MzQxIDIuNjk0OTUgMTQuMDE1MSAzLjE2MyAxMy43NzcxIDMuNTAyQzEzLjYzMTEgMy43MSAxMy4zOTkxIDMuODIwOTcgMTMuMTYzMSAzLjgyMDk3TDEzLjE2MjEgMy44MTk5OVoiPjwvcGF0aD48cGF0aCBkPSJNMTYuMTM2MSA4LjUwMDAzQzE1Ljc3OTEgOC41MDAwMyAxNS40NjExIDguMjQzMDIgMTUuMzk4MSA3Ljg3ODAyQzE1LjIzNTEgNi45MzYwMiAxNC44NzExIDYuMDU4MDUgMTQuMzE2MSA1LjI3MDA1QzE0LjA3ODEgNC45MzEwNSAxNC4xNTkxIDQuNDYzIDE0LjQ5ODEgNC4yMjVDMTQuODM4MSAzLjk4NiAxNS4zMDcxIDQuMDY5MDEgMTUuNTQzMSA0LjQwNzAxQzE2LjIyNjEgNS4zNzcwMSAxNi42NzUxIDYuNDU5IDE2Ljg3NzEgNy42MjFDMTYuOTQ3MSA4LjAyOSAxNi42NzQxIDguNDE3IDE2LjI2NjEgOC40ODhDMTYuMjIzMSA4LjQ5NiAxNi4xODAxIDguNDk5MDUgMTYuMTM3MSA4LjQ5OTA1TDE2LjEzNjEgOC41MDAwM1oiPjwvcGF0aD48cGF0aCBkPSJNMTQuOTMwMSAxMy45MTNDMTQuNzgyMSAxMy45MTMgMTQuNjMxMSAxMy44NjkgMTQuNDk5MSAxMy43NzZDMTQuMTYwMSAxMy41MzggMTQuMDc5MSAxMy4wNyAxNC4zMTcxIDEyLjczMUMxNC44NjgxIDExLjk0NyAxNS4yMzExIDExLjA2OSAxNS4zOTUxIDEwLjEyMkMxNS40NjYxIDkuNzE0IDE1Ljg2MSA5LjQzNzk4IDE2LjI2MiA5LjUxMDk4QzE2LjY3IDkuNTgxOTggMTYuOTQ0MSA5Ljk2OTk4IDE2Ljg3MzEgMTAuMzc4QzE2LjY3MDEgMTEuNTQ1IDE2LjIyMyAxMi42MjggMTUuNTQzIDEzLjU5NEMxNS4zOTcgMTMuODAyIDE1LjE2NTEgMTMuOTEyIDE0LjkyOTEgMTMuOTEyTDE0LjkzMDEgMTMuOTEzWiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMC4yNDkxIDE2Ljg4N0M5Ljg5MjExIDE2Ljg4NyA5LjU3NDEgMTYuNjMgOS41MTExIDE2LjI2NkM5LjQ0MTEgMTUuODU4IDkuNzEzMDkgMTUuNDY5IDEwLjEyMTEgMTUuMzk4QzExLjA2NjEgMTUuMjMzIDExLjk0MzEgMTQuODY5IDEyLjcyOTEgMTQuMzE2QzEzLjA2OTEgMTQuMDc4IDEzLjUzNjEgMTQuMTYgMTMuNzc0MSAxNC40OThDMTQuMDEyMSAxNC44MzYgMTMuOTMxMSAxNS4zMDUgMTMuNTkyMSAxNS41NDNDMTIuNjI0MSAxNi4yMjUgMTEuNTQyMSAxNi42NzMgMTAuMzc4MSAxNi44NzZDMTAuMzM0MSAxNi44ODQgMTAuMjkxMSAxNi44ODcgMTAuMjQ4MSAxNi44ODdIMTAuMjQ5MVoiPjwvcGF0aD48cGF0aCBkPSJNNy43NTEwNyAxNi44ODVDNy43MDgwNyAxNi44ODUgNy42NjUwNiAxNi44ODIgNy42MjEwNiAxNi44NzRDNi40NTQwNiAxNi42NzEgNS4zNzIwNiAxNi4yMjMgNC40MDUwNiAxNS41NDRDNC4wNjYwNiAxNS4zMDYgMy45ODUwOCAxNC44MzggNC4yMjMwOCAxNC40OTlDNC40NTkwOCAxNC4xNiA0LjkyNTA2IDE0LjA3OCA1LjI2ODA2IDE0LjMxNkM2LjA1MjA2IDE0Ljg2NyA2LjkzMDA4IDE1LjIzMSA3Ljg3ODA4IDE1LjM5NkM4LjI4NjA4IDE1LjQ2NyA4LjU1OTA2IDE1Ljg1NSA4LjQ4ODA2IDE2LjI2NEM4LjQyNTA2IDE2LjYyOCA4LjEwNzA2IDE2Ljg4NSA3Ljc1MDA2IDE2Ljg4NUg3Ljc1MTA3WiI+PC9wYXRoPjxwYXRoIGQ9Ik0zLjA3MjEgMTMuOTExQzIuODM2MSAxMy45MTEgMi42MDMwOSAxMy44IDIuNDU4MDkgMTMuNTkzQzEuNzc1MDkgMTIuNjIzIDEuMzI2MTEgMTEuNTQxMSAxLjEyNDExIDEwLjM3OTFDMS4wNTQxMSA5Ljk3MTA2IDEuMzI3MSA5LjU4MzA1IDEuNzM1MSA5LjUxMjA1QzIuMTM4MSA5LjQzOTA1IDIuNTMxMSA5LjcxNDA0IDIuNjAyMSAxMC4xMjJDMi43NjUxIDExLjA2NCAzLjEyOTEgMTEuOTQyIDMuNjg0MSAxMi43M0MzLjkyMjEgMTMuMDY5IDMuODQxMSAxMy41MzcxIDMuNTAyMSAxMy43NzUxQzMuMzcxMSAxMy44NjcxIDMuMjIwMSAxMy45MTIgMy4wNzExIDEzLjkxMkwzLjA3MjEgMTMuOTExWiI+PC9wYXRoPjxwYXRoIGQ9Ik0xLjg2NjA2IDguNUMxLjgyMzA2IDguNSAxLjc4MDA2IDguNDk3MDIgMS43MzcwNiA4LjQ4OTAyQzEuMzI5MDYgOC40MTgwMiAxLjA1NTA3IDguMDMwMDEgMS4xMjYwNyA3LjYyMjAxQzEuMzI5MDcgNi40NTUwMSAxLjc3NjA2IDUuMzcyMDEgMi40NTYwNiA0LjQwNjAxQzIuNjkyMDYgNC4wNjcwMSAzLjE1OTA3IDMuOTg0IDMuNTAxMDcgNC4yMjRDMy44NDAwNyA0LjQ2MiAzLjkyMTA4IDQuOTI5OTkgMy42ODMwOCA1LjI2ODk5QzMuMTMyMDggNi4wNTI5OSAyLjc2OTA3IDYuOTMxIDIuNjA1MDcgNy44NzhDMi41NDIwNyA4LjI0MyAyLjIyNDA3IDguNSAxLjg2NzA3IDguNUgxLjg2NjA2WiI+PC9wYXRoPjxwYXRoIGQ9Ik00Ljg0MDExIDMuODIxQzQuNjA0MTEgMy44MjEgNC4zNzIxMiAzLjcxIDQuMjI2MTIgMy41MDNDMy45ODgxMiAzLjE2NSA0LjA2OTEzIDIuNjk2MDIgNC40MDgxMyAyLjQ1ODAyQzUuMzc2MTMgMS43NzYwMiA2LjQ1ODEyIDEuMzI4MDEgNy42MjIxMiAxLjEyNTAxQzguMDMyMTIgMS4wNTMwMSA4LjQxOTEzIDEuMzI3IDguNDkwMTMgMS43MzVDOC41NjAxMyAyLjE0MyA4LjI4ODExIDIuNTMyMDQgNy44ODAxMSAyLjYwMzA0QzYuOTM1MTEgMi43NjgwNCA2LjA1ODExIDMuMTMyMDEgNS4yNzIxMSAzLjY4NTAxQzUuMTQxMTEgMy43NzcwMSA0Ljk5MDExIDMuODIyMDQgNC44NDExMSAzLjgyMjA0TDQuODQwMTEgMy44MjFaIj48L3BhdGg+PHBhdGggZD0iTTkuMDAwMTIgNi41QzcuNjIxMTIgNi41IDYuNTAwMTIgNy42MjEgNi41MDAxMiA5QzYuNTAwMTIgMTAuMzc5IDcuNjIxMTIgMTEuNSA5LjAwMDEyIDExLjVDMTAuMzc5MSAxMS41IDExLjUwMDEgMTAuMzc5IDExLjUwMDEgOUMxMS41MDAxIDcuNjIxIDEwLjM3OTEgNi41IDkuMDAwMTIgNi41WiI+PC9wYXRoPjwvZz48L3N2Zz4=)
   * @returns
   */
  progressCircle8of8({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <path d="M13.163,3.07c-.854-.601-1.843-1.019-2.913-1.205" />
          <path d="M16.137,7.75c-.179-1.029-.583-2.023-1.208-2.912" />
          <path d="M14.93,13.163c.601-.854,1.019-1.843,1.205-2.913" />
          <path d="M10.25,16.137c1.029-.179,2.023-.583,2.912-1.208" />
          <path d="M4.837,14.93c.854,.601,1.843,1.019,2.913,1.205" />
          <path d="M1.863,10.25c.179,1.029,.583,2.023,1.208,2.912" />
          <path d="M3.07,4.837c-.601,.854-1.019,1.843-1.205,2.913" />
          <path d="M7.75,1.863c-1.029,.179-2.023,.583-2.912,1.208" />
          <circle cx="9" cy="9" r="2.25" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9IiMyMTIxMjEiPjxwYXRoIG9wYWNpdHk9IjAuNCIgZD0iTTE1LjI1IDguNUg5LjI1QzguODM2IDguNSA4LjUgOC44MzYgOC41IDkuMjVDOC41IDkuNjY0IDguODM2IDEwIDkuMjUgMTBIMTUuMjVDMTUuNjY0IDEwIDE2IDkuNjY0IDE2IDkuMjVDMTYgOC44MzYgMTUuNjY0IDguNSAxNS4yNSA4LjVaIj48L3BhdGg+PHBhdGggb3BhY2l0eT0iMC40IiBkPSJNOS4yNSA3SDEzLjI1QzEzLjY2NCA3IDE0IDYuNjY0IDE0IDYuMjVDMTQgNS44MzYgMTMuNjY0IDUuNSAxMy4yNSA1LjVIOS4yNUM4LjgzNiA1LjUgOC41IDUuODM2IDguNSA2LjI1QzguNSA2LjY2NCA4LjgzNiA3IDkuMjUgN1oiPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIwLjQiIGQ9Ik05LjI1IDRIMTEuMjVDMTEuNjY0IDQgMTIgMy42NjQgMTIgMy4yNUMxMiAyLjgzNiAxMS42NjQgMi41IDExLjI1IDIuNUg5LjI1QzguODM2IDIuNSA4LjUgMi44MzYgOC41IDMuMjVDOC41IDMuNjY0IDguODM2IDQgOS4yNSA0WiI+PC9wYXRoPjxwYXRoIGQ9Ik03Ljk2OTk5IDExLjk3MDJMNi40OTk5OSAxMy40Mzk5VjIuNzVDNi40OTk5OSAyLjMzNTkgNi4xNjM5OSAyIDUuNzQ5OTkgMkM1LjMzNTk5IDIgNC45OTk5OSAyLjMzNTkgNC45OTk5OSAyLjc1VjEzLjQzOUwzLjUyOTk5IDExLjk2OTRDMy4yMzY5OSAxMS42NzU5IDIuNzYxOTkgMTEuNjc1OSAyLjQ2ODk5IDExLjk2OTRDMi4xNzU5OSAxMi4yNjI0IDIuMTc1OTkgMTIuNzM2OSAyLjQ2ODk5IDEzLjAyOThMNS4yMTg5OSAxNS43Nzk4QzUuMzY0OTkgMTUuOTI1OCA1LjU1Njk5IDE2IDUuNzQ4OTkgMTZDNS45NDA5OSAxNiA2LjEzMyAxNS45MjY4IDYuMjc5IDE1Ljc3OThMOS4wMjkgMTMuMDI5OEM5LjMyMiAxMi43MzY4IDkuMzIyIDEyLjI2MjMgOS4wMjkgMTEuOTY5NEM4LjczNiAxMS42NzU5IDguMjYxIDExLjY3NTkgNy45NjggMTEuOTY5NEw3Ljk2OTk5IDExLjk3MDJaIj48L3BhdGg+PC9nPjwvc3ZnPg==)
   * @returns
   */
  sorting({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g fill={color || "currentColor"}>
          <path
            opacity="0.4"
            d="M15.25 8.5H9.25C8.836 8.5 8.5 8.836 8.5 9.25C8.5 9.664 8.836 10 9.25 10H15.25C15.664 10 16 9.664 16 9.25C16 8.836 15.664 8.5 15.25 8.5Z"
          />
          <path
            opacity="0.4"
            d="M9.25 7H13.25C13.664 7 14 6.664 14 6.25C14 5.836 13.664 5.5 13.25 5.5H9.25C8.836 5.5 8.5 5.836 8.5 6.25C8.5 6.664 8.836 7 9.25 7Z"
          />
          <path
            opacity="0.4"
            d="M9.25 4H11.25C11.664 4 12 3.664 12 3.25C12 2.836 11.664 2.5 11.25 2.5H9.25C8.836 2.5 8.5 2.836 8.5 3.25C8.5 3.664 8.836 4 9.25 4Z"
          />
          <path d="M7.96999 11.9702L6.49999 13.4399V2.75C6.49999 2.3359 6.16399 2 5.74999 2C5.33599 2 4.99999 2.3359 4.99999 2.75V13.439L3.52999 11.9694C3.23699 11.6759 2.76199 11.6759 2.46899 11.9694C2.17599 12.2624 2.17599 12.7369 2.46899 13.0298L5.21899 15.7798C5.36499 15.9258 5.55699 16 5.74899 16C5.94099 16 6.133 15.9268 6.279 15.7798L9.029 13.0298C9.322 12.7368 9.322 12.2623 9.029 11.9694C8.736 11.6759 8.261 11.6759 7.968 11.9694L7.96999 11.9702Z" />
        </g>
      </svg>
    );
  },
  /**
   * @component @name Dots
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjx0aXRsZT5kb3RzPC90aXRsZT48ZyBmaWxsPSIjMjEyMTIxIj48cGF0aCBvcGFjaXR5PSIwLjQiIGQ9Ik05LjAwMDA5IDEwLjI1QzkuNjkwNDUgMTAuMjUgMTAuMjUwMSA5LjY5MDM2IDEwLjI1MDEgOUMxMC4yNTAxIDguMzA5NjQgOS42OTA0NSA3Ljc1IDkuMDAwMDkgNy43NUM4LjMwOTc0IDcuNzUgNy43NTAwOSA4LjMwOTY0IDcuNzUwMDkgOUM3Ljc1MDA5IDkuNjkwMzYgOC4zMDk3NCAxMC4yNSA5LjAwMDA5IDEwLjI1WiI+PC9wYXRoPiA8cGF0aCBkPSJNMy4yNTAwOSAxMC4yNUMzLjk0MDQ1IDEwLjI1IDQuNTAwMDkgOS42OTAzNiA0LjUwMDA5IDlDNC41MDAwOSA4LjMwOTY0IDMuOTQwNDUgNy43NSAzLjI1MDA5IDcuNzVDMi41NTk3NCA3Ljc1IDIuMDAwMDkgOC4zMDk2NCAyLjAwMDA5IDlDMi4wMDAwOSA5LjY5MDM2IDIuNTU5NzQgMTAuMjUgMy4yNTAwOSAxMC4yNVoiPjwvcGF0aD4gPHBhdGggZD0iTTE0Ljc1MDEgMTAuMjVDMTUuNDQwNCAxMC4yNSAxNi4wMDAxIDkuNjkwMzYgMTYuMDAwMSA5QzE2LjAwMDEgOC4zMDk2NCAxNS40NDA0IDcuNzUgMTQuNzUwMSA3Ljc1QzE0LjA1OTcgNy43NSAxMy41MDAxIDguMzA5NjQgMTMuNTAwMSA5QzEzLjUwMDEgOS42OTAzNiAxNC4wNTk3IDEwLjI1IDE0Ljc1MDEgMTAuMjVaIj48L3BhdGg+PC9nPjwvc3ZnPg==)
   *
   */
  dots({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g fill={color || "currentColor"}>
          <path
            opacity="0.4"
            d="M9.00009 10.25C9.69045 10.25 10.2501 9.69036 10.2501 9C10.2501 8.30964 9.69045 7.75 9.00009 7.75C8.30974 7.75 7.75009 8.30964 7.75009 9C7.75009 9.69036 8.30974 10.25 9.00009 10.25Z"
          />
          <path d="M3.25009 10.25C3.94045 10.25 4.50009 9.69036 4.50009 9C4.50009 8.30964 3.94045 7.75 3.25009 7.75C2.55974 7.75 2.00009 8.30964 2.00009 9C2.00009 9.69036 2.55974 10.25 3.25009 10.25Z" />
          <path d="M14.7501 10.25C15.4404 10.25 16.0001 9.69036 16.0001 9C16.0001 8.30964 15.4404 7.75 14.7501 7.75C14.0597 7.75 13.5001 8.30964 13.5001 9C13.5001 9.69036 14.0597 10.25 14.7501 10.25Z" />
        </g>
      </svg>
    );
  },
  dotsVertical({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g fill={color || "currentColor"}>
          <path
            opacity="0.4"
            d="M9.00009 10.25C9.69045 10.25 10.2501 9.69036 10.2501 9C10.2501 8.30964 9.69045 7.75 9.00009 7.75C8.30974 7.75 7.75009 8.30964 7.75009 9C7.75009 9.69036 8.30974 10.25 9.00009 10.25Z"
          />
          <path d="M9.00009 4.5C9.69045 4.5 10.2501 3.94036 10.2501 3.25C10.2501 2.55964 9.69045 2 9.00009 2C8.30974 2 7.75009 2.55964 7.75009 3.25C7.75009 3.94036 8.30974 4.5 9.00009 4.5Z" />
          <path d="M9.00009 16C9.69045 16 10.2501 15.4404 10.2501 14.75C10.2501 14.0596 9.69045 13.5 9.00009 13.5C8.30974 13.5 7.75009 14.0596 7.75009 14.75C7.75009 15.4404 8.30974 16 9.00009 16Z" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSI+PHBhdGggZD0iTTkgMy4yNVYxNC43NSI+PC9wYXRoPjxwYXRoIGQ9Ik0zLjI1IDlIMTQuNzUiPjwvcGF0aD48L2c+PC9zdmc+)
   * @returns
   */
  plus({ size, color, className }: IconProps) {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <path d="M9 3.25V14.75" /> <path d="M3.25 9H14.75" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSI+PHBhdGggZD0iTTUuODUyLDljLjMzOS0yLjEzNCwxLjItMy43MTcsMi4xNDgtNC4zOTEiPjwvcGF0aD48cGF0aCBkPSJNMy4yLDEwLjk3N0MzLjIsNS43MDUsNS43NzgsMS43NSw5LDEuNzVjMy4xOTUsMCw1LjgsMy45NTUsNS44LDkuMjI3LDAsMy4yOTUtMi45NTMsNS4yNzMtNS44LDUuMjczcy01LjgtMS45NzctNS44LTUuMjczWiI+PC9wYXRoPjwvZz48L3N2Zz4=)
   */
  egg({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <path d="M5.852,9c.339-2.134,1.2-3.717,2.148-4.391" />
          <path d="M3.2,10.977C3.2,5.705,5.778,1.75,9,1.75c3.195,0,5.8,3.955,5.8,9.227,0,3.295-2.953,5.273-5.8,5.273s-5.8-1.977-5.8-5.273Z" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSI+PHJlY3QgeD0iMS43NSIgeT0iMi43NSIgd2lkdGg9IjE0LjUiIGhlaWdodD0iMTIuNSIgcng9IjIiIHJ5PSIyIj48L3JlY3Q+PGxpbmUgeDE9IjQuNzUiIHkxPSI1Ljc1IiB4Mj0iNC43NSIgeTI9IjEyLjI1Ij48L2xpbmU+PC9nPjwvc3ZnPg==)
   * @returns
   */
  layoutLeft({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <rect x="1.75" y="2.75" width="14.5" height="12.5" rx="2" ry="2" />
          <line x1="4.75" y1="5.75" x2="4.75" y2="12.25" />
        </g>
      </svg>
    );
  },
  arrowLeft({ size, color, className, thick }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={thick || 1.5}
          stroke={color || "currentColor"}
        >
          <path d="M2.75 9H15.25" />
          <path d="M7 13.25L2.75 9L7 4.75" />
        </g>
      </svg>
    );
  },
  circles4Filled({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g fill={color || "currentColor"}>
          <path
            d="m10,17c-3.866,0-7-3.134-7-7"
            fill="none"
            stroke={color || "currentColor"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="m10,3c3.866,0,7,3.134,7,7"
            fill="none"
            stroke={color || "currentColor"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <circle
            cx="10"
            cy="10"
            r="3"
            fill={color || "currentColor"}
            stroke={color || "currentColor"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    );
  },
  focusMode({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g fill={color || "currentColor"}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.68263 2.08733C6.85421 2.46433 6.68768 2.90905 6.31068 3.08064C4.06136 4.10436 2.5 6.37069 2.5 9C2.5 11.6293 4.06136 13.8957 6.31068 14.9194C6.68768 15.091 6.85421 15.5357 6.68263 15.9127C6.51104 16.2897 6.06632 16.4562 5.68932 16.2846C2.92464 15.0263 1 12.2387 1 9C1 5.76131 2.92464 2.97366 5.68932 1.71538C6.06632 1.5438 6.51104 1.71033 6.68263 2.08733Z"
            fillOpacity="0.4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3174 2.08733C11.489 1.71033 11.9337 1.5438 12.3107 1.71538C15.0754 2.97366 17 5.76131 17 9C17 12.2387 15.0754 15.0263 12.3107 16.2846C11.9337 16.4562 11.489 16.2897 11.3174 15.9127C11.1458 15.5357 11.3123 15.091 11.6893 14.9194C13.9386 13.8957 15.5 11.6293 15.5 9C15.5 6.37069 13.9386 4.10436 11.6893 3.08064C11.3123 2.90905 11.1458 2.46433 11.3174 2.08733Z"
            fillOpacity="0.4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 9C5 6.79079 6.79079 5 9 5C11.2092 5 13 6.79079 13 9C13 11.2092 11.2092 13 9 13C6.79079 13 5 11.2092 5 9Z"
          />
        </g>
      </svg>
    );
  },
  chevronDown({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <path d="M15.25 6.5L9 12.75L2.75 6.5" />
        </g>
      </svg>
    );
  },
  barcode({ size, color, className, ...props }: MotionIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill={color || "currentColor"}
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <motion.path
            {...props}
            d="M5.75 3.75H5.25V12.25H5.75V3.75Z"
            fill={color || "currentColor"}
            stroke={color || "currentColor"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            {...props}
            d="M12.75 3.75H11.75V12.25H12.75V3.75Z"
            fill={color || "currentColor"}
            stroke={color || "currentColor"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            {...props}
            d="M8.75 3.75V14.25"
            stroke={color || "currentColor"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <motion.path
            {...props}
            d="M15.75 3.75V14.25"
            stroke={color || "currentColor"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <motion.path
            {...props}
            d="M2.25 3.75V14.25"
            stroke={color || "currentColor"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    );
  },
  note({ size, color, className, ...props }: MotionIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <motion.rect
            {...props}
            x="1.75"
            y="4.75"
            width="14.5"
            height="11"
            rx="2"
            ry="2"
          />
          <motion.line {...props} x1="5" y1="11.75" x2="9.25" y2="11.75" />
          <motion.line {...props} x1="5" y1="8.75" x2="13" y2="8.75" />
          <motion.line {...props} x1="14.25" y1="1.75" x2="3.75" y2="1.75" />
        </g>
      </svg>
    );
  },
  ban({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <line x1="3.873" y1="14.127" x2="14.118" y2="3.882" />
          <circle cx="9" cy="9" r="7.25" />
        </g>
      </svg>
    );
  },
  circleCheck3({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <circle cx="9" cy="9" r="7.25" />
          <path d="M5.5,9c.863,.867,1.537,1.868,2.1,2.962,1.307-2.491,2.94-4.466,4.9-5.923" />
        </g>
      </svg>
    );
  },
  duplicate2({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <path d="M4.25 12.75H10.75C11.855 12.75 12.75 11.855 12.75 10.75V4.25C12.75 3.145 11.855 2.25 10.75 2.25H4.25C3.145 2.25 2.25 3.145 2.25 4.25V10.75C2.25 11.855 3.145 12.75 4.25 12.75Z" />
          <path d="M5.59875 15.25C5.99775 15.9385 6.78486 16.3516 7.61996 16.2271L14.544 15.198C15.636 15.0361 16.39 14.019 16.228 12.926L15.25 6.34521" />
        </g>
      </svg>
    );
  },
  check3({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <path d="M2.75,9c1.54,1.537,2.745,3.312,3.75,5.25,2.333-4.417,5.25-7.917,8.75-10.5" />
        </g>
      </svg>
    );
  },
  xmarksm({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 12}
        height={size || 12}
        viewBox="0 0 12 12"
        className={className}
      >
        <g fill={color || "currentColor"}>
          <path
            d="m2.25,10.5c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L9.22,1.72c.293-.293.768-.293,1.061,0s.293.768,0,1.061l-7.5,7.5c-.146.146-.338.22-.53.22Z"
            strokeWidth="0"
          />
          <path
            d="m9.75,10.5c-.192,0-.384-.073-.53-.22L1.72,2.78c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l7.5,7.5c.293.293.293.768,0,1.061-.146.146-.338.22-.53.22Z"
            strokeWidth="0"
          />
        </g>
      </svg>
    );
  },
  minussm({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 12}
        height={size || 12}
        viewBox="0 0 12 12"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <line x1="10.75" y1="6" x2="1.25" y2="6" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9IiMyMTIxMjEiPjxwYXRoIGQ9Ik05LjU3LDMuNjE3Yy0uMTU2LS4zNzUtLjUxOS0uNjE3LS45MjQtLjYxN0g0Yy0uNTUyLDAtMSwuNDQ5LTEsMXY0LjY0NmMwLC40MDYsLjI0MiwuNzY5LC42MTgsLjkyNCwuMTI0LC4wNTEsLjI1NSwuMDc2LC4zODMsLjA3NiwuMjYxLDAsLjUxNS0uMTAyLC43MDYtLjI5M2w0LjY0Ny00LjY0N2MuMjg2LS4yODcsLjM3MS0uNzE1LC4yMTYtMS4wODlaIj48L3BhdGg+PHBhdGggZD0iTTE0LjM4Miw4LjQyOWMtLjM3Ny0uMTU2LS44MDQtLjA2OC0xLjA4OSwuMjE3bC00LjY0Nyw0LjY0N2MtLjI4NiwuMjg3LS4zNzEsLjcxNS0uMjE2LDEuMDg5LC4xNTYsLjM3NSwuNTE5LC42MTcsLjkyNCwuNjE3aDQuNjQ2Yy41NTIsMCwxLS40NDksMS0xdi00LjY0NmMwLS40MDYtLjI0Mi0uNzY5LS42MTgtLjkyNFoiPjwvcGF0aD48L2c+PC9zdmc+)
   * @returns
   */
  caretMaximizeDiagonal2({ size, color, className }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 12}
        height={size || 12}
        viewBox="0 0 12 12"
        className={className}
      >
        <g fill={color || "currentColor"}>
          <path
            d="m10.383,4.93c-.375-.155-.803-.07-1.09.217l-4.146,4.146c-.287.287-.372.715-.217,1.09s.518.617.924.617h4.146c.551,0,1-.449,1-1v-4.146c0-.406-.242-.769-.617-.924Z"
            strokeWidth="0"
          />
          <path
            d="m6.146,1H2c-.551,0-1,.449-1,1v4.146c0,.406.242.769.617.924.125.052.255.077.384.077.26,0,.514-.102.706-.293L6.854,2.707c.287-.287.372-.715.217-1.09s-.518-.617-.924-.617Z"
            strokeWidth="0"
          />
        </g>
      </svg>
    );
  },
};

export interface MotionIconProps extends IconProps {
  initial?: AnimationProps["initial"];
  animate?: AnimationProps["animate"];
  exit?: AnimationProps["exit"];
  transition?: AnimationProps["transition"];
}

export const motionIcons = {
  check3({
    size,
    color,
    className,
    initial,
    animate,
    exit,
    transition,
  }: MotionIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <motion.path
            d="M2.75,9c1.54,1.537,2.745,3.312,3.75,5.25,2.333-4.417,5.25-7.917,8.75-10.5"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
          />
        </g>
      </svg>
    );
  },
  duplicate2({
    size,
    color,
    className,
    initial,
    animate,
    exit,
    transition,
  }: MotionIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <motion.path
            d="M4.25 12.75H10.75C11.855 12.75 12.75 11.855 12.75 10.75V4.25C12.75 3.145 11.855 2.25 10.75 2.25H4.25C3.145 2.25 2.25 3.145 2.25 4.25V10.75C2.25 11.855 3.145 12.75 4.25 12.75Z"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
          />
          <motion.path
            d="M5.59875 15.25C5.99775 15.9385 6.78486 16.3516 7.61996 16.2271L14.544 15.198C15.636 15.0361 16.39 14.019 16.228 12.926L15.25 6.34521"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
          />
        </g>
      </svg>
    );
  },
  gear3({ size, color, className, ...props }: MotionIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <motion.path
            {...props}
            d="M9 11.2495C10.2426 11.2495 11.25 10.2422 11.25 8.99951C11.25 7.75687 10.2426 6.74951 9 6.74951C7.75736 6.74951 6.75 7.75687 6.75 8.99951C6.75 10.2422 7.75736 11.2495 9 11.2495Z"
          />
          <motion.path
            {...props}
            d="M15.175 7.27802L14.246 6.95001C14.144 6.68901 14.027 6.42999 13.883 6.17999C13.739 5.92999 13.573 5.69999 13.398 5.48099L13.578 4.513C13.703 3.842 13.391 3.164 12.8 2.823L12.449 2.62C11.857 2.278 11.115 2.34699 10.596 2.79099L9.851 3.42801C9.291 3.34201 8.718 3.34201 8.148 3.42801L7.403 2.79001C6.884 2.34601 6.141 2.27699 5.55 2.61899L5.199 2.82199C4.607 3.16299 4.296 3.84099 4.421 4.51199L4.601 5.47699C4.241 5.92599 3.955 6.42299 3.749 6.95099L2.825 7.27701C2.181 7.50401 1.75 8.11299 1.75 8.79599V9.20099C1.75 9.88399 2.181 10.493 2.825 10.72L3.754 11.048C3.856 11.309 3.972 11.567 4.117 11.817C4.262 12.067 4.427 12.297 4.602 12.517L4.421 13.485C4.296 14.156 4.608 14.834 5.199 15.175L5.55 15.378C6.142 15.72 6.884 15.651 7.403 15.207L8.148 14.569C8.707 14.655 9.28 14.655 9.849 14.569L10.595 15.208C11.114 15.652 11.857 15.721 12.448 15.379L12.799 15.176C13.391 14.834 13.702 14.157 13.577 13.486L13.397 12.52C13.756 12.071 14.043 11.575 14.248 11.047L15.173 10.721C15.817 10.494 16.248 9.885 16.248 9.202V8.797C16.248 8.114 15.817 7.50502 15.173 7.27802H15.175Z"
          />
        </g>
      </svg>
    );
  },
  openInBrowser({ size, color, className, ...props }: MotionIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <motion.path
            {...props}
            d="M1.75 4.75C1.75 3.64543 2.64543 2.75 3.75 2.75H14.25C15.3546 2.75 16.25 3.64543 16.25 4.75V6.25H1.75V4.75Z"
            fill={color || "currentColor"}
            fillOpacity="0.3"
            data-stroke="none"
            stroke="none"
          />
          <motion.path
            {...props}
            d="M6 14.25H3.75C2.645 14.25 1.75 13.355 1.75 12.25V4.75C1.75 3.645 2.645 2.75 3.75 2.75H14.25C15.355 2.75 16.25 3.645 16.25 4.75V12.25C16.25 13.355 15.355 14.25 14.25 14.25H12"
          />
          <motion.path {...props} d="M1.75 6.25H16.25" />
          <motion.path {...props} d="M6.5 11.25L9 8.75L11.5 11.25" />
          <motion.path {...props} d="M9 8.75V17.25" />
        </g>
      </svg>
    );
  },
  arrowsOppositeDirectionY({
    size,
    color,
    className,
    ...props
  }: MotionIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g fill={color || "currentColor"}>
          <motion.path
            opacity="0.4"
            d="M14.4697 11.9697L12.5 13.9394V7.74991C12.5 7.33581 12.1641 6.99991 11.75 6.99991C11.3359 6.99991 11 7.33581 11 7.74991V13.9394L9.03029 11.9697C8.73729 11.6767 8.26267 11.6767 7.96977 11.9697C7.67687 12.2627 7.67677 12.7373 7.96977 13.0302L11.2198 16.2802C11.3663 16.4267 11.5577 16.4999 11.7501 16.4999C11.9425 16.4999 12.1339 16.4267 12.2804 16.2802L15.5304 13.0302C15.8234 12.7372 15.8234 12.2626 15.5304 11.9697C15.2374 11.6768 14.7626 11.6767 14.4697 11.9697Z"
            {...props}
          />
          <motion.path
            {...props}
            d="M8.96969 6.0303C9.11619 6.1768 9.30759 6.24999 9.49999 6.24999C9.69239 6.24999 9.8838 6.1768 10.0303 6.0303C10.3233 5.7373 10.3233 5.26268 10.0303 4.96978L6.7803 1.71978C6.4873 1.42678 6.01268 1.42678 5.71978 1.71978L2.4698 4.96978C2.1768 5.26278 2.1768 5.7374 2.4698 6.0303C2.7628 6.3232 3.2374 6.3233 3.5303 6.0303L5.49999 4.0606V10.2501C5.49999 10.6642 5.83589 11.0001 6.24999 11.0001C6.66409 11.0001 6.99999 10.6642 6.99999 10.2501V4.0606L8.96969 6.0303Z"
          />
        </g>
      </svg>
    );
  },
  userUpdate({ size, color, className, ...props }: MotionIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g fill={color || "currentColor"}>
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 15.2686C13 14.3023 13.7838 13.5186 14.75 13.5186C15.7162 13.5186 16.5 14.3023 16.5 15.2686C16.5 16.2348 15.7162 17.0186 14.75 17.0186C13.7838 17.0186 13 16.2348 13 15.2686Z"
            {...props}
          />
          <motion.path
            d="M8.99999 9.01855C6.14167 9.01855 3.69058 10.7343 2.60517 13.1859C2.05162 14.4371 2.74425 15.8502 4.01259 16.2499C5.29503 16.654 6.99283 17.0186 8.99999 17.0186C10.044 17.0186 11.0044 16.9199 11.8661 16.7684C11.6322 16.3196 11.5 15.8095 11.5 15.2686C11.5 13.4781 12.9486 12.0253 14.7376 12.0186C13.4753 10.2068 11.3787 9.01855 8.99999 9.01855Z"
            fillOpacity="0.4"
            {...props}
          />
          <motion.path
            d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
            fillOpacity="0.4"
            {...props}
          />
        </g>
      </svg>
    );
  },
  usersDots({ size, color, className, ...props }: MotionIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g fill={color || "currentColor"}>
          <motion.path
            {...props}
            d="M13 15.0005C12.449 15.0005 12 14.5525 12 14.0005C12 13.4485 12.449 13.0005 13 13.0005C13.551 13.0005 14 13.4485 14 14.0005C14 14.5525 13.551 15.0005 13 15.0005Z"
          />
          <motion.path
            {...props}
            d="M10 15.0005C9.449 15.0005 9 14.5525 9 14.0005C9 13.4485 9.449 13.0005 10 13.0005C10.551 13.0005 11 13.4485 11 14.0005C11 14.5525 10.551 15.0005 10 15.0005Z"
          />
          <motion.path
            d="M1.42474 12.181C2.45324 10.1468 4.56096 8.74951 7.00003 8.74951C9.15644 8.74951 11.0536 9.84245 12.1751 11.5005H9.99997C8.62152 11.5005 7.49997 12.6191 7.49997 14.0005C7.49997 14.7745 7.85211 15.4661 8.40425 15.9245C7.95938 15.9728 7.49056 16.0005 7.00003 16.0005C5.26802 16.0005 3.80715 15.6556 2.71401 15.276C1.47805 14.8468 0.805407 13.4059 1.42474 12.181Z"
            fillOpacity="0.4"
            {...props}
          />
          <motion.path
            {...props}
            d="M16 15.0005C15.449 15.0005 15 14.5525 15 14.0005C15 13.4485 15.449 13.0005 16 13.0005C16.551 13.0005 17 13.4485 17 14.0005C17 14.5525 16.551 15.0005 16 15.0005Z"
          />
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.25 4.75049C4.25 3.2313 5.48133 2.00049 7 2.00049C8.51867 2.00049 9.75 3.2313 9.75 4.75049C9.75 6.26968 8.51867 7.50049 7 7.50049C5.48133 7.50049 4.25 6.26968 4.25 4.75049Z"
            fillOpacity="0.4"
            {...props}
          />
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5503 7.08782C10.9712 7.34943 11.468 7.50049 12 7.50049C13.5187 7.50049 14.75 6.26968 14.75 4.75049C14.75 3.2313 13.5187 2.00049 12 2.00049C11.468 2.00049 10.9712 2.15155 10.5503 2.41315C10.9926 3.08366 11.25 3.88692 11.25 4.75049C11.25 5.61405 10.9926 6.41732 10.5503 7.08782Z"
            fillOpacity="0.4"
            {...props}
          />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSI+PHBhdGggZD0iTTMuNzUsMTUuMjVzMy41OTktLjU2OCw0LjU0Ni0xLjUxNWMuOTQ3LS45NDcsNy4zMjctNy4zMjcsNy4zMjctNy4zMjcsLjgzNy0uODM3LC44MzctMi4xOTQsMC0zLjAzLS44MzctLjgzNy0yLjE5NC0uODM3LTMuMDMsMCwwLDAtNi4zOCw2LjM4LTcuMzI3LDcuMzI3cy0xLjUxNSw0LjU0Ni0xLjUxNSw0LjU0NmgwWiI+PC9wYXRoPjxsaW5lIHgxPSI4LjI1IiB5MT0iMi43NSIgeDI9IjEuNzUiIHkyPSIyLjc1Ij48L2xpbmU+PGxpbmUgeDE9IjQuMjUiIHkxPSI2LjI1IiB4Mj0iMS43NSIgeTI9IjYuMjUiPjwvbGluZT48L2c+PC9zdmc+)
   * @returns
   */
  penWriting7({ size, color, className, ...props }: MotionIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <motion.path
            {...props}
            d="M3.75,15.25s3.599-.568,4.546-1.515c.947-.947,7.327-7.327,7.327-7.327,.837-.837,.837-2.194,0-3.03-.837-.837-2.194-.837-3.03,0,0,0-6.38,6.38-7.327,7.327s-1.515,4.546-1.515,4.546h0Z"
          />
          <motion.line {...props} x1="8.25" y1="2.75" x2="1.75" y2="2.75" />
          <motion.line {...props} x1="4.25" y1="6.25" x2="1.75" y2="6.25" />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSI+PHBhdGggZD0iTTQuNjAwOTQgMTMuMzk5TDQuMzAzMzQgNy43NSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMy42NTM1IDguNTg4NzVMMTMuMzUgMTQuMzVDMTMuMjk0IDE1LjQyMDEgMTIuNDE2IDE2LjI1IDExLjM1MyAxNi4yNUg2LjY0Nzk2QzYuNDQ5MjYgMTYuMjUgNi4yNTcwNiAxNi4yMjExIDYuMDc1NTYgMTYuMTY3Ij48L3BhdGg+PHBhdGggZD0iTTIuNzUgNC43NUgxMy4yNSI+PC9wYXRoPjxwYXRoIGQ9Ik02Ljc1IDQuNzVWMi43NUM2Ljc1IDIuMiA3LjE5OCAxLjc1IDcuNzUgMS43NUgxMC4yNUMxMC44MDIgMS43NSAxMS4yNSAyLjIgMTEuMjUgMi43NVY0Ljc1Ij48L3BhdGg+PHBhdGggZD0iTTIgMTZMMTYgMiI+PC9wYXRoPjwvZz48L3N2Zz4=)
   * @returns
   */
  trashSlash({ size, color, className, ...props }: MotionIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <motion.path d="M4.60094 13.399L4.30334 7.75" {...props} />
          <motion.path
            d="M13.6535 8.58875L13.35 14.35C13.294 15.4201 12.416 16.25 11.353 16.25H6.64796C6.44926 16.25 6.25706 16.2211 6.07556 16.167"
            {...props}
          />
          <motion.path d="M2.75 4.75H13.25" {...props} />
          <motion.path
            d="M6.75 4.75V2.75C6.75 2.2 7.198 1.75 7.75 1.75H10.25C10.802 1.75 11.25 2.2 11.25 2.75V4.75"
            {...props}
          />
          <motion.path d="M2 16L16 2" {...props} />
        </g>
      </svg>
    );
  },
  /**
   *
   * @preview ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzIxMjEyMSI+PHBhdGggZD0iTTIuNzUsMTUuMjVzMy41OTktLjU2OCw0LjU0Ni0xLjUxNWMuOTQ3LS45NDcsNy4zMjctNy4zMjcsNy4zMjctNy4zMjcsLjgzNy0uODM3LC44MzctMi4xOTQsMC0zLjAzLS44MzctLjgzNy0yLjE5NC0uODM3LTMuMDMsMCwwLDAtNi4zOCw2LjM4LTcuMzI3LDcuMzI3cy0xLjUxNSw0LjU0Ni0xLjUxNSw0LjU0NmgwWiI+PC9wYXRoPjwvZz48L3N2Zz4=)
   * @returns
   */
  pen({ size, color, className, ...props }: MotionIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 18}
        height={size || 18}
        viewBox="0 0 18 18"
        className={className}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke={color || "currentColor"}
        >
          <motion.path
            d="M2.75,15.25s3.599-.568,4.546-1.515c.947-.947,7.327-7.327,7.327-7.327,.837-.837,.837-2.194,0-3.03-.837-.837-2.194-.837-3.03,0,0,0-6.38,6.38-7.327,7.327s-1.515,4.546-1.515,4.546h0Z"
            {...props}
          />
        </g>
      </svg>
    );
  },
};
