import React from 'react';
import styled, { keyframes } from 'styled-components';

export const StyledProcessor = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b8bfda;
  z-index: 2;
`;

export const Icon = styled.svg`
  width: 25px;
  height: 20px;
  fill: #e8e8e8;
`;

const Processor = (props) => (
	<StyledProcessor>
		<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 12">
		  <path fillRule="evenodd" d="M9.9343 10.8217c.7743.1003 1.4635.078 2.0678-.0668 1.115-.279 2.03-.856 2.746-1.73.739-.886 1.109-1.894 1.109-3.025 0-1.354-.507-2.513-1.522-3.477-1.009-.958-2.226-1.438-3.6512-1.438-.223 0-.452.014-.6863.042.8153.557 1.4547 1.2533 1.918 2.089.481.869.7218 1.7966.7218 2.783 0 1.437-.487 2.713-1.4606 3.827-.4633.05-.956.014-1.478-.1086 1.1966-.9804 1.795-2.22 1.795-3.7187 0-1.4597-.575-2.6798-1.7247-3.6604-.739-.624-1.537-1.025-2.3936-1.2033-.616-.128-1.2583-.1222-1.927.017-1.232.2007-2.2556.755-3.071 1.663-.8225.92-1.233 1.9814-1.233 3.1847 0 1.3537.5044 2.5126 1.5134 3.4763 1.0148.9583 2.235 1.4373 3.6605 1.4373.222 0 .448-.014.677-.042-.81-.557-1.446-1.256-1.91-2.0973C4.605 7.911 4.364 6.986 4.364 6c0-1.426.478-2.6935 1.4344-3.8022.5456-.0836 1.0617-.0695 1.5486.0418C6.121 3.2256 5.508 4.479 5.508 6c0 .925.2522 1.78.7568 2.5655.4988.7632 1.1646 1.3566 1.9977 1.78.4164.2228.9736.3816 1.6718.4762zM8.5.3677C9.198.1227 9.9255 0 10.6822 0c1.7423 0 3.2293.588 4.4612 1.7633C16.381 2.9333 17 4.3453 17 6c0 1.6546-.619 3.0668-1.8566 4.2367C13.9114 11.4124 12.4244 12 10.6822 12c-.7567 0-1.4842-.1225-2.1822-.3677-.704.2452-1.4313.3677-2.182.3677-1.7424 0-3.2294-.5876-4.4613-1.7633C.619 9.0667 0 7.6547 0 6c0-1.6546.619-3.0668 1.8567-4.2367C3.0887.588 4.5757 0 6.318 0 7.0686 0 7.796.1227 8.5.3677z"/>
		</Icon>
	</StyledProcessor>
)

export default Processor;