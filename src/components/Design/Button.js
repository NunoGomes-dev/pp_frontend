import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const Button = styled.button`
  ${({ variant, theme }) => theme.components.button.variants[variant] || ``}
  ${sizes}
  ${spacings}
  ${tipography}
  ${colors}
  ${(props) => props}}
`;

export default Button;

// import styled from "styled-components";

// const Button = styled.button`
//   ${({ variant }) => {
//     switch (variant) {
//       case "solid":
//         return `background-color: #ddba92; color: white; padding: 1rem 0.5rem; border-radius: 8px; border: none;`;
//       case "light":
//         return `background-color: #DDBA9233; color: #DDBA92; padding: 1rem 0.5rem; border-radius: 8px; border: none;`;

//       default:
//         return `background-color: #ddba92; color: white; padding: 1rem 0.5rem; border-radius: 8px; border: none;`;
//     }
//   }}
//   ${(props) => {
//     console.log(props.theme.space[props.margin]);
//     return props;
//   }}
//   margin: ${(props) => props.theme.space[props.margin]};
//   font-weight: ${(props) => props.theme.fontWeights[props.fontWeight]};
// `;

// export default Button;
