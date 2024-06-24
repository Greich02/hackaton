import { createTheme } from "@mui/material"
const theme = createTheme({
	components : {
		MuiTypography : {
			variants : [{
				props :{
					variant : "body2"
				},
				style:{
					fontSize : 11,
				}
			}]
		}
	}
})


export default theme