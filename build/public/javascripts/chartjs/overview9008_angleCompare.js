var data={labels:["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","11.0","12.0","13.0","14.0","15.0","16.0","17.0","18.0","19.0"],series:[[{meta:"IN-9008HD: Image width in [m]",value:1.17},{meta:"IN-9008HD: Image width in [m]",value:2.34},{meta:"IN-9008HD: Image width in [m]",value:3.5},{meta:"IN-9008HD: Image width in [m]",value:4.67},{meta:"IN-9008HD: Image width in [m]",value:5.84},{meta:"IN-9008HD: Image width in [m]",value:7.01},{meta:"IN-9008HD: Image width in [m]",value:8.18},{meta:"IN-9008HD: Image width in [m]",value:9.34},{meta:"IN-9008HD: Image width in [m]",value:10.51},{meta:"IN-9008HD: Image width in [m]",value:11.68},{meta:"IN-9008HD: Image width in [m]",value:12.85},{meta:"IN-9008HD: Image width in [m]",value:14.02},{meta:"IN-9008HD: Image width in [m]",value:15.18},{meta:"IN-9008HD: Image width in [m]",value:16.35},{meta:"IN-9008HD: Image width in [m]",value:17.52},{meta:"IN-9008HD: Image width in [m]",value:18.69},{meta:"IN-9008HD: Image width in [m]",value:19.86},{meta:"IN-9008HD: Image width in [m]",value:21.01},{meta:"IN-9008HD: Image width in [m]",value:22.19}],[{meta:"IN-5905HD: Image width in [m]",value:1.3},{meta:"IN-5905HD: Image width in [m]",value:2.59},{meta:"IN-5905HD: Image width in [m]",value:3.89},{meta:"IN-5905HD: Image width in [m]",value:5.19},{meta:"IN-5905HD: Image width in [m]",value:6.48},{meta:"IN-5905HD: Image width in [m]",value:7.78},{meta:"IN-5905HD: Image width in [m]",value:9.08},{meta:"IN-5905HD: Image width in [m]",value:10.38},{meta:"IN-5905HD: Image width in [m]",value:11.67},{meta:"IN-5905HD: Image width in [m]",value:12.97},{meta:"IN-5905HD: Image width in [m]",value:14.27},{meta:"IN-5905HD: Image width in [m]",value:15.56},{meta:"IN-5905HD: Image width in [m]",value:16.86},{meta:"IN-5905HD: Image width in [m]",value:18.16},{meta:"IN-5905HD: Image width in [m]",value:19.45},{meta:"IN-5905HD: Image width in [m]",value:20.75},{meta:"IN-5905HD: Image width in [m]",value:22.05},{meta:"IN-5905HD: Image width in [m]",value:23.35},{meta:"IN-5905HD: Image width in [m]",value:24.64}],[{meta:"IN-5907HD: Image width in [m]",value:.65},{meta:"IN-5907HD: Image width in [m]",value:1.3},{meta:"IN-5907HD: Image width in [m]",value:1.95},{meta:"IN-5907HD: Image width in [m]",value:2.59},{meta:"IN-5907HD: Image width in [m]",value:3.24},{meta:"IN-5907HD: Image width in [m]",value:3.89},{meta:"IN-5907HD: Image width in [m]",value:4.54},{meta:"IN-5907HD: Image width in [m]",value:5.19},{meta:"IN-5907HD: Image width in [m]",value:5.84},{meta:"IN-5907HD: Image width in [m]",value:6.48},{meta:"IN-5907HD: Image width in [m]",value:7.13},{meta:"IN-5907HD: Image width in [m]",value:7.78},{meta:"IN-5907HD: Image width in [m]",value:8.43},{meta:"IN-5907HD: Image width in [m]",value:9.08},{meta:"IN-5907HD: Image width in [m]",value:9.73},{meta:"IN-5907HD: Image width in [m]",value:10.38},{meta:"IN-5907HD: Image width in [m]",value:11.02},{meta:"IN-5907HD: Image width in [m]",value:11.67},{meta:"IN-5907HD: Image width in [m]",value:12.32}]]},options={width:900,height:500,showArea:!0,showLine:!0,showPoint:!0,fullWidth:!0,lineSmooth:Chartist.Interpolation.simple({divisor:2}),fullWidth:!0,chartPadding:{right:20},low:0,plugins:[Chartist.plugins.tooltip()]},responsiveOptions=[["screen and (min-width: 975px) and (max-width: 1050px)",{width:775,height:430}],["screen and (min-width: 746px) and (max-width: 974px)",{width:568,height:315}],["screen and (max-width: 745px)",{width:510,height:283}]];new Chartist.Line("#chart3",data,options,responsiveOptions);