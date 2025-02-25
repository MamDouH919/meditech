import { Stack } from "@mui/material"
import { styled } from "@mui/material/styles";
import bg from "../assets/banner/hexagon_rounded-glow-bg.svg";

const SVGStyle = styled("svg")(({ theme }) => ({
    fill: theme.palette.primary.main,
}));

const SpanStyle = styled("span")(() => ({
    backgroundImage: `url("${bg}")`,
    width: "72px",
    height: "72px",
    fontSize: "34.2857px",
    lineHeight: "72px",
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "auto 100%",
}));

const StackStyle = styled(Stack)(() => ({
    transform: "translate(-50%, -50%)",
    "& svg": {
        color: "white",
        fontSize: "34.2857px",
    }
}));

const Shape = ({
    children,
}:{
    children: any
}) => {
    return (
        <span style={{
            width: "72px",
            height: "72px",
            position: "relative",
        }}>
            <SVGStyle width="100px" height="100px" viewBox="0 0 572 650"
                style={{
                    width: "72px",
                    height: "72px",
                }}>
                <path d="M553.901,178.69c-1.79-3.97-3.976-7.721-6.519-11.198c-19.332-32.392-216.94-145.165-255.816-146.085
		c-2.269-0.25-4.57-0.388-6.905-0.388c-2.509,0-4.979,0.165-7.41,0.452C236.099,24.391,42.725,135.1,22.422,167.653
		c-2.579,3.504-4.792,7.29-6.603,11.297C-3.06,212.637-3.067,443.009,16.166,472.354c1.523,3.224,3.318,6.291,5.347,9.184
		c16.503,31.159,214.665,144.547,255.519,146.812c2.502,0.305,5.044,0.48,7.629,0.48c3.483,0,6.896-0.298,10.223-0.846
		c0.731-0.12,1.462-0.245,2.185-0.391c0.159-0.031,0.323-0.067,0.485-0.102c0.87-0.183,1.775-0.391,2.721-0.628
		c0.005-0.001,0.01-0.003,0.015-0.004c53.772-13.502,226.592-113.494,246.468-144.499c3.103-4.124,5.705-8.645,7.722-13.473
		C572.138,429.665,572.058,212.169,553.901,178.69z">

                </path>
            </SVGStyle>
            <SpanStyle>
            </SpanStyle>
            <StackStyle position={"absolute"} top={"50%"} left={"50%"}>
                {children}
            </StackStyle>
        </span>
    )
}

export default Shape