import React from 'react';

interface ILogoIcon {
	size?: number;
}

export function LogoIcon({ size = 40 }: ILogoIcon) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_18770_226)">
				<path
					d="M38.9151 23.2834C38.9151 33.7058 30.466 40 20.0437 40C9.62098 40 1.17188 31.5509 1.17188 21.1282C1.17188 10.7059 9.88496 4.2981 20.3073 4.2981C30.73 4.2981 38.9151 12.8607 38.9151 23.2834Z"
					fill="#DC3E22"
				/>
				<path
					d="M28.238 12.6066C27.3211 11.673 25.8377 10.8048 24.733 10.551C25.3401 10.0127 25.4623 9.99494 26.2227 9.61816C28.1713 8.65365 31.0576 8.56485 31.0576 8.56485C31.0576 8.56485 27.6509 6.8042 25.1601 6.91468C24.5259 6.94257 23.8571 7.16658 23.2118 7.48403C23.5757 6.97054 23.9205 6.45998 24.1409 6.07643C24.8152 4.90368 25.524 3.42627 25.524 3.42627C25.524 3.42627 22.9122 3.56573 21.7008 5.01565C21.2407 5.56645 20.8934 6.26625 20.6392 6.92275C20.1878 6.40419 19.6896 5.94242 19.1913 5.58195C16.6999 3.77896 12.7192 4.16903 12.7192 4.16903C12.7192 4.16903 15.7263 5.87486 17.0793 7.57656C17.6076 8.2411 18.1437 8.54842 18.4642 9.29352C17.3564 9.05367 14.8569 9.13565 13.63 9.59057C10.4771 10.7599 9.11852 15.4649 9.11852 15.4649C9.11852 15.4649 12.1952 13.3443 16.3813 11.8565C17.3017 11.5295 18.2748 11.4429 19.1229 11.4578C18.7379 12.0575 18.3173 12.8363 17.999 13.7546C17.2247 15.9904 18.2479 21.3113 18.2479 21.3113C18.2479 21.3113 20.4896 18.1647 21.403 15.6157C21.8718 14.3073 21.9879 12.9936 21.9904 12.0242C22.8217 12.3931 23.8009 12.9319 24.5326 13.398C28.2794 15.7852 30.072 20.1435 30.072 20.1435C30.072 20.1435 30.5941 15.006 28.238 12.6066Z"
					fill="#899441"
				/>
				<path
					d="M20.5008 10.3094C20.4889 10.3094 20.477 10.3091 20.4651 10.3088C19.7242 10.2896 19.1391 9.67376 19.1572 8.9334C19.1587 8.86931 19.2234 4.36125 16.7191 2.40111C16.135 1.94395 16.0318 1.09984 16.489 0.515424C16.9465 -0.0686834 17.7906 -0.171833 18.3747 0.285626C21.9559 3.08806 21.8491 8.76128 21.843 9.00145C21.8238 9.73083 21.2262 10.3094 20.5008 10.3094Z"
					fill="#A8B64F"
				/>
			</g>
			<defs>
				<clipPath id="clip0_18770_226">
					<rect width="40" height="40" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
