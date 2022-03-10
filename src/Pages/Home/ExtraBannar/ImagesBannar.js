import { Grid } from "@material-ui/core";
import React from "react";

const images = [
  "https://www.titan.co.in/wps/wcm/connect/titan/8e626b0d-a111-4caf-9c67-5271df0d1c2d/767x695.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-8e626b0d-a111-4caf-9c67-5271df0d1c2d-nZjQqks",
  "https://www.titan.co.in/wps/wcm/connect/titan/39136453-882d-4ed8-846f-585e842484bc/767x695-AK.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-39136453-882d-4ed8-846f-585e842484bc-nZjQqks",
  "https://www.titan.co.in/wps/wcm/connect/titan/ace215a6-6262-4612-b0ab-04d88cf978bf/767x695.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-ace215a6-6262-4612-b0ab-04d88cf978bf-nZjQqks",
  "https://www.titan.co.in/wps/wcm/connect/titan/3cc1c64b-3b10-4d9a-822e-b54e03d9efe2/767x695_reflextunes.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-3cc1c64b-3b10-4d9a-822e-b54e03d9efe2-nZjQqks",
];

const ImagesBannar = () => {
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {images.map((index) => (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <img className=" m-2 img-fluid" width="360px" src={index} alt="" />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ImagesBannar;
