/* 
*                                                                                                                                                                           *
*      ###                                               @@@@@@@@@&(                                                                          @@@@                          *
*     ######                                             @@@@@@@@@@@@@@@                                                                      @@@@                          *
*      ####                                              @@@@       @@@@@                                                                     @@@@                          *
*      ####        ##########        #### #######*       @@@@        @@@@          @@@@@@@@@,       &@@@@,@@@@@@@            *@@@@@@@@@       @@@@%@@@@@@@%                 *
*      ####     ################     ###############     @@@@      %@@@@@       @@@@@@@@@@@@@@@*    @@@@@@@@@@@@@@@@      #@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@,              *
*      ####   #####         #####    #####      .####(   @@@@@@@@@@@@@@@      @@@@@         @@@@@   @@@@@&      &@@@@    @@@@@        .@@@@&  @@@@@       @@@@&             *
*      ####  ####             ####   ####        *####   @@@@      (@@@@@@   %@@@@@@@@@@@@@@@@@@@@  @@@@@        @@@@%  @@@@%                 @@@@        /@@@@             *
*      ####   ####            ####   ####        *####   @@@@         @@@@@  &@@@&                  @@@@@        @@@@@  @@@@                  @@@@        /@@@@             *
*      ####   #####          #####   ####        *####   @@@@         @@@@@   @@@@&         *@@@@,  @@@@@        @@@@@  *@@@@                 @@@@        *@@@@             *
*      ####    (######(  #######     ####        *####   @@@@@@@@@@@@@@@@@     @@@@@@@*..@@@@@@@    @@@@@        @@@@@    @@@@@@@../@@@@@@&   @@@@        *@@@@             *
*      ####       ############       ####        *####   @@@@@@@@@@@@@@          *@@@@@@@@@@@&      @@@@@        @@@@@      &@@@@@@@@@@@.     @@@@        *@@@@             *
*                                                                                                                                                                           *
*     *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*            *
*     *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*            *
*                   (##############)                                                                                              (##############)                          *
*                   (##############)                                                                                              (##############)                          *
*                   (##############)                                                                                              (##############)                          *
*                 @@@@@@@@@@@@@@@@@@@@                                                                                          @@@@@@@@@@@@@@@@@@@@                        *
*                                                                                                                                                                           *
*																				ION BENCH™ 																					*
*																				COPYRIGHT ©																					*
*																			Tous Droits Reservés																			*
*																			Reproduction Interdite																			*
*																			All Rights Reserved																				*
*																				Do Not Copy !																				*
****************************************************************************************************************************************************************************/

var _api;
var myMaterials;
var currentSize = "90x75";
var currentPosition = 0;
var resultImg = '';
var myConfigResult;
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const iframe = document.getElementById('api-frame');
const configurator = new Sketchfab(iframe);
const uid = 'df9cbd13f18548b78029f6457dc1a367'; //Lien id du Sketchfab
const myBench = {};

const sizeConfig = {
	"45x55":{
		defaultOptionEnabled:{"uh3_id":["CO1UH3_1P","CO1UH3_2P","CO1UH3_22P"]},
		optionAvailabled:['shelving_id','flex_id','pc1_id','iec_id'],
		widthCol1: 0.024,
		depthCol1: 0.024,
		widthCol2: 0,
		depthCol2: 0,
		widthCol3: 0,
		depthCol3: 0,
		widthPOS: -0.12,
		depthPOS: 0.265,
		widthPOSsK: -0.12,
		depthPOSsK: 0.265,
		widthREMOT: 0.15,
		depthREMOT: 0.315,
		widthELECLEVEL: -0.25,
		depthELECLEVEL: -0.4,
		heightPOS: 0,
		widthOption: 0.474,
		depthOption: 0.066,
		depthSOLV: -0.07,
		rotateOption:0,
		widthAlim:0,
		depthAlim:0.07
	},
	"45x75":{
		defaultOptionEnabled:{"uh3_id":["CO1UH3_1P","CO1UH3_2P","CO2UH3_1P","CO2UH3_2P","CO1UH3_22P"]},
		optionAvailabled:['iec_id'],
		widthCol1: 0.024,
		depthCol1: 0.2,
		widthCol2: 0.024,
		depthCol2: -0.17,
		widthCol3: 0,
		depthCol3: 0,
		widthPOS: -0.12,
		depthPOS: 0.365,
		widthPOSsK: -0.12,
		depthPOSsK: 0.365,
		widthREMOT: 0.15,
		depthREMOT: 0.415,
		widthELECLEVEL: -0.25,
		depthELECLEVEL: 0.1,
		heightPOS: 0,
		widthOption: 0.474,
		depthOption: -0.025,
		depthSOLV: -0.26,
		rotateOption:0,
		widthAlim:0,
		depthAlim:0.22
	},
	"67x65":{
		defaultOptionEnabled:{"uh3_id":["CO1UH3_1P","CO1UH3_2P","CO2UH3_1P","CO2UH3_2P","CO1UH3_22P"]},
		optionAvailabled:['iec_id'],
		widthCol1: -0.19,
		depthCol1: 0,
		widthCol2: 0.19,
		depthCol2: 0,
		widthCol3: 0,
		depthCol3: 0,
		widthPOS: -0.23,
		depthPOS: 0.285,
		widthPOSsK: -0.23,
		depthPOSsK: 0.32,
		widthREMOT: 0.19,
		depthREMOT: 0.365,
		widthELECLEVEL: 0,
		depthELECLEVEL: -0.05,
		heightPOS: 0,
		widthOption: 0.364,
		depthOption: 0.02,
		depthSOLV: -0.025,
		rotateOption:0,
		widthAlim:0,
		depthAlim:0.03
	},
	"75x75":{
		defaultOptionEnabled:{"uh3_id":["CO1UH3_1P","CO1UH3_2P","CO2UH3_1P","CO2UH3_2P","CO1UH3_22P"]},
		optionAvailabled:['iec_id'],
		widthCol1: -0.175,
		depthCol1: 0,
		widthCol2: 0.175,
		depthCol2: 0,
		widthCol3: 0,
		depthCol3: 0,
		widthPOS: -0.26,
		depthPOS: 0.33,
		widthPOSsK: -0.272,
		depthPOSsK: 0.37,
		widthREMOT: 0.23,
		depthREMOT: 0.415,
		widthELECLEVEL: 0,
		depthELECLEVEL: 0,
		heightPOS: 0,
		widthOption: 0.324,
		depthOption: 0,
		depthSOLV: 0,
		rotateOption:1,
		widthAlim:-0.2,
		depthAlim:-0.1
	},
	"90x75":{
		defaultOptionEnabled:{"uh3_id":["CO1UH3_1P","CO1UH3_2P","CO2UH3_1P","CO2UH3_2P","CO1UH3_22P"]},
		optionAvailabled:['arm1_id','pc1_id','iec_id','pc1_id'],
		widthCol1: -0.23,
		depthCol1: 0,
		widthCol2: 0.23,
		depthCol2: 0,
		widthCol3: 0,
		depthCol3: 0,
		widthPOS: -0.19,
		depthPOS: 0.35,
		heightPOS: -0.092,
		widthPOSsK: -0.272,
		depthPOSsK: 0.37,
		widthREMOT: 0.33,
		depthREMOT: 0.415,
		widthELECLEVEL: 0,
		depthELECLEVEL: 0,
		widthOption: 0.249,
		depthOption: 0,
		depthSOLV: 0,
		rotateOption:1,
		widthAlim:-0.2,
		depthAlim:-0.1
	},
	"100x75":{
		defaultOptionEnabled:{"uh3_id":["CO1UH3_1P","CO1UH3_2P","CO2UH3_1P","CO2UH3_2P","CO1UH3_22P"]},
		optionAvailabled:['arm1_id','pc1_id','iec_id','pc1_id'],
		widthCol1: -0.30,
		depthCol1: 0,
		widthCol2: 0.30,
		depthCol2: 0,
		widthCol3: 0,
		depthCol3: 0,
		widthPOS: -0.19,
		depthPOS: 0.35,
		heightPOS: -.092,
		widthPOSsK: -0.322,
		depthPOSsK: 0.37,
		widthREMOT: 0.38,
		depthREMOT: 0.415,
		widthELECLEVEL: 0,
		depthELECLEVEL: 0,
		widthOption: 0.199,
		depthOption: 0,
		depthSOLV: 0,
		rotateOption:1,
		widthAlim:-0.2,
		depthAlim:-0.1
	},
	"120x75":{
		defaultOptionEnabled:{"uh3_id":["CO1UH3_1P","CO1UH3_2P","CO2UH3_1P","CO2UH3_2P","CO1UH3_22P"]},
		optionAvailabled:['arm1_id','pc1_id','iec_id','pc1_id'],
		widthCol1: -0.38,
		depthCol1: 0,
		widthCol2: 0.38,
		depthCol2: 0,
		widthCol3: 0,
		depthCol3: 0,
		widthPOS: -0.19,
		depthPOS: 0.35,
		heightPOS: -.092,
		widthPOSsK: -0.422,
		depthPOSsK: 0.37,
		widthREMOT: 0.48,
		depthREMOT: 0.415,
		widthELECLEVEL: 0,
		depthELECLEVEL: 0,
		widthOption: 0.099,
		depthOption: 0,
		depthSOLV: 0,
		rotateOption:1,
		widthAlim:-0.2,
		depthAlim:-0.1
	},
	"140x75":{
		defaultOptionEnabled:{"uh3_id":["CO1UH3_1P","CO1UH3_2P","CO2UH3_1P","CO2UH3_2P","CO3UH3_1P","CO3UH3_2P","CO1UH3_22P"]},
		optionAvailabled:['arm1_id','pc1_id','iec_id','pc1_id'],
		widthCol1: -0.45,
		depthCol1: 0,
		widthCol2: 0.45,
		depthCol2: 0,
		widthCol3: 0,
		depthCol3: 0,
		widthPOS: -0.19,
		depthPOS: 0.35,
		heightPOS: -.092,
		widthPOSsK: -0.522,
		depthPOSsK: 0.37,
		widthREMOT: 0.58,
		depthREMOT: 0.415,
		widthELECLEVEL: 0,
		depthELECLEVEL: 0,
		widthOption: 0,
		depthOption: 0,
		depthSOLV: 0,
		rotateOption:1,
		widthAlim:0,
		depthAlim:-0.1
	},
	"150x75":{
		defaultOptionEnabled:{"uh3_id":["CO1UH3_1P","CO1UH3_2P","CO2UH3_1P","CO2UH3_2P","CO3UH3_1P","CO3UH3_2P","CO1UH3_22P"]},
		optionAvailabled:['arm1_id','pc1_id','iec_id','pc1_id'],
		widthCol1: -0.50,
		depthCol1: 0,
		widthCol2: 0.50,
		depthCol2: 0,
		widthCol3: 0,
		depthCol3: 0,
		widthPOS: -0.19,
		depthPOS: 0.35,
		heightPOS: -.092,
		widthPOSsK: -0.572,
		depthPOSsK: 0.37,
		widthREMOT: 0.58,
		depthREMOT: 0.415,
		widthELECLEVEL: 0,
		depthELECLEVEL: 0,
		widthOption: -0.049,
		depthOption: 0,
		depthSOLV: 0,
		rotateOption:1,
		widthAlim:0,
		depthAlim:-0.1
	}
}
const dimWS = {
	'45x55' : {Cm:["W45 x D55 cm"], In:["W17.7 x D21.6 in"], size:'4555'},
	'45x75' : {Cm:["W45 x D75 cm"], In:["W17.7 x D29.5 in"], size:'4575'},
	'67x65' : {Cm:["W67 x D65 cm"], In:["W26.4 x D25.6 in"], size:'6765'},
	'75x75' : {Cm:["W75 x D75 cm"], In:["W29.5 x D29.5 in"], size:'7575'},
	'90x75' : {Cm:["W90 x D75 cm"], In:["W35.4 x D29.5 in"], size:'9075'},
	'100x75' : {Cm:["W100 x D75 cm"], In:["W39.4 x D29.5 in"], size:'10075'},
	'120x75' : {Cm:["W120 x D75 cm"], In:["W47.2 x D29.5 in"], size:'12075'},
	'140x75' : {Cm:["W140 x D75 cm"], In:["W55.1 x D29.5 in"], size:'14075'},
	'150x75' : {Cm:["W150 x D75 cm"], In:["W59 x D29.5 in"], size:'15075'}
}
const myColor = {
	"black" : [0.004, 0.004, 0.004],
	"grey" :  [0.6, 0.6, 0.6]
}
const textureListBench = ["TRESPA","PA_RAL_9005"]

//Fontions

function _hide(e) {
	_api.hide(e, function(err) {
			if (err != null)
			console.log("Erreur lors du hide : " + e + "\n" + err);
	})
}

function _camera(i, e, option={}, myFunc){
	_api.setCameraLookAt(i, e, option, function(err) {
			if (err != null)
			console.log("Erreur lors de la camera : " + e + "\n" + err);
			if(myFunc) myFunc();
	})
}

function _show(e) {
	_api.show(e, function(err) {
			if (err != null)
			console.log("Erreur lors du show : " + e + "\n" + err);
	})
}

function _translate(obj, tab, option={}, myFunc) {
	$.each(obj, function(i, e){		
		_api.translate(e, tab, option, function(err){
			if (err != null)
				console.log("Erreur lors du translate : " + e + "\n" + err);
			if(myFunc) myFunc();
		})
	});
}

function _rotate(obj, tab, option={}, myFunc) {
	$.each(obj, function(i, e){		
		_api.rotate(e, tab, option, function(err){
			if (err != null)
				console.log("Erreur lors du rotate : " + e + "\n" + err);
			if(myFunc) myFunc();
		})
	});
}

function showMultiple(obj){
	$.each(obj, function (i, e) { 
	if (isNaN(parseInt(e)))
		_show(myBench[e]);
	else
		_show(e)
	});
}
function hideMultiple(obj){
	$.each(obj, function (i, e) { 
	if (isNaN(parseInt(e)))
		_hide(myBench[e]);
	else
		_hide(e)
	});
}

configurator.init( uid, {
	success: function onSuccess( api ){
		_api = api;
		api.start();
		api.addEventListener('viewerready', function() {
			//API is ready to use
			console.log( 'Viewer is ready' );
			api.getNodeMap(function(err, nodes) {
				if (!err) {					
					$.each(nodes, function(i, e){						
						if (
						//Supprime nom undefined 
						(!e.name) || 
						//Supprime nom avec miniscule 2e lettre
						e.name.charAt(1) == e.name.charAt(1).toLowerCase() ||
						//Supprime nom avec _0 à _9 à la fin
						e.name.match("_([0-9])$"))
							return 						
						//Création d'un tableau d'association nom <> ID
						myBench[e.name]=i 
						// console.log(e.name +' : '+ e.instanceID);
						//Masquage de tous les élements au début
						_hide(i);		
					});
				}		
				showMultiple([myBench.ALIM, myBench.BCHPOS, myBench.PLATEAU_90x75, myBench.BCHLC_90x75, myBench.CO1UH3_1P, myBench.CO1UH3_2P,myBench.CO1UH3_22P, myBench.CO2UH3_1P, myBench.CO2UH3_2P]);
				_translate([myBench.PC1, myBench.SCR1, myBench.ARMERG], [0, 0.249, 0]);
				_rotate([myBench.ALIM], [Math.PI/2,0, 0, 1]); 
				_translate([myBench.ALIM], [-0.1, -0.2, 0]);
				_translate([myBench.BCHPOS], [0.37, -0.272, 0]);
				_translate([myBench.REMOT], [0.415,0.33,0]);
				_translate([myBench.KEY1, myBench.KEY1_SLIDING], [0, 0, 0]);
				_translate([myBench.CO1UH3_1P, myBench.CO1UH3_2P,myBench.CO1UH3_22P, myBench.CO1UH4_1P, myBench.CO1UH4_2P,myBench.CO1UH4_22P, myBench.CO1UH1_1P, myBench.CO1UH1_2P, myBench.CO1UH1_3P], [0, -0.23, 0]);
				_translate([myBench.CO2UH3_1P, myBench.CO2UH3_2P, myBench.CO2UH4_1P, myBench.CO2UH4_2P, myBench.CO2UH1_1P, myBench.CO2UH1_2P, myBench.CO2UH1_3P], [0, 0.23, 0]);
				$('#moveLUH1_id').hide();
				$('#moveLUH3_id').show();
				$('#moveLUH4_id').hide();
				$('#shelving_id').hide();
				$('#scr1_id').hide();
				$('#key1_id').hide();
				$('#flex_id').hide();
				$('#allIn').hide();
				$('#allUH1In').hide();
				$('#allUH3In').hide();
				$('#allUH4In').hide();
				$('#uh1in').hide();
				$('#uh3in').hide();
				$('#uh4in').hide();
				$('#can10l_id').hide();
				$('#exhfil_id').hide();
				$('#eleclevel_id').hide();
				$('#dimCm_WS_id').val(dimWS[currentSize].Cm);
				$('#dimIn_WS_id').hide();	
				$('#Model_BCH_id').val('BCHLC'+(dimWS[currentSize].size));
				$('#loadingScren').hide();
			});
			
			api.getMaterialList(function (err, materials) {
				myMaterials = materials;
			});
		});
	},
	error: function onError() {
		console.log( 'Viewer error' );
	},
	camera: 0,
	autostart: 1,
	preload: 1,
	ui_controls: 0,
	ui_infos: 0,
	ui_watermark: 0,
	ui_general_controls: 0,
	ui_watermark_link: 0,
	ui_stop: 0	
});

function hideOptionalDiv(){
	var tab = ['arm1_id','pc1_id','scr1_id','key1_id','shelving_id','flex_id','can10l_id','exhfil_id','eleclevel_id'];
	$.each(tab, function (i, v) {
		($('#'+v)).hide();
		($('#'+v)).children("input[type='checkbox']:first").prop("checked", false);
	});
}
function showOptionalDiv(tab){
	$.each(tab, function (i, v) {
		($('#'+v)).show();		
	});
}
function enableOptions(tab){
	var tab_b = ['pc1_b','arm1_b','scr1_b','key1_b','armerg_b','solv_b','can10l_b','eleclevel_b','exhfil_b','uh1_b','uh3_b','uh4_b','remot_b','keyLock_b','iec_b','shelving_b'];
	
	$.each(tab_b, function (i, v) {
		($('#'+v)).prop("checked", false);
	});
	$.each(tab, function (i, v) {
		//Recherche du bouton situé sous le div, sous le label, et passage a Checked
		($('#'+i)).children("label").children("input[type='checkbox']:first").prop("checked", true);
		showMultiple(v);
	});
}

function changeColor(color){
	
	$.each(myMaterials, function (i, e) {
		if  ($.inArray(e.name, textureListBench) !== -1){
			e.channels.AlbedoPBR.factor = 1;
			e.channels.AlbedoPBR.enable = true;
			e.channels.AlbedoPBR.color = myColor[color];
			_api.setMaterial(e);
		}
	});
}


// Dimensions Largeur Plan de travail : ------------------------------

function sizeChange(mySize){
	//Hide all
	$.each(myBench, function(i, e) {_hide(e)});
	
	let valPos = $('#slidingAll_b').prop('checked') ? 0.26 : 0;
	//Afficher les checkbox options necessaire
	hideOptionalDiv();   
	showOptionalDiv(sizeConfig[mySize].optionAvailabled);
	enableOptions(sizeConfig[mySize].defaultOptionEnabled);
	showMultiple([myBench['PLATEAU_'+mySize],myBench['BCHLC_'+mySize],myBench.BCHPOS, myBench.ALIM]);
	
	_rotate([myBench.ALIM], [Math.PI/2,0, 0, sizeConfig[mySize].rotateOption]); 
	_translate([myBench.ALIM], [sizeConfig[mySize].depthAlim, sizeConfig[mySize].widthAlim, (currentPosition/100)]);
	
	if (mySize == "67x65"){
	_translate([myBench.SOLV, myBench.CAN10L, myBench.EXHFIL, myBench.ELEC2LEVEL], [0, 0.275, 0]);
	_rotate([myBench.SOLV, myBench.CAN10L, myBench.EXHFIL, myBench.ELEC2LEVEL], [Math.PI/2,0, 0, 1]);
	}else{
	_translate([myBench.SOLV, myBench.CAN10L, myBench.EXHFIL, myBench.ELEC2LEVEL], [sizeConfig[mySize].depthSOLV, 0, 0]);
	_rotate([myBench.SOLV, myBench.CAN10L, myBench.EXHFIL, myBench.ELEC2LEVEL], [0,0, 0, 1]);
	}
	_translate([myBench.ELEC1LEVEL], [sizeConfig[mySize].depthELECLEVEL, sizeConfig[mySize].widthELECLEVEL, 0]);
	_translate([myBench['PLATEAU_'+mySize], myBench.SHELVING], [0,0,(currentPosition/100)]);
	_translate([myBench.KEY1_SLIDING], [valPos,0,(currentPosition/100)]);
	_translate([myBench.KEY1], [0,0,(currentPosition/100)]);
	_translate([myBench.IEC], [sizeConfig[mySize].depthOption, 0, (currentPosition/100)]);
	_translate([myBench.ARMERG], [sizeConfig[mySize].depthOption, sizeConfig[mySize].widthOption, (currentPosition/100)]);
	_translate([myBench.SCR1, myBench.PC1], [0, sizeConfig[mySize].widthOption, (currentPosition/100)]);	
	_translate([myBench.REMOT], [sizeConfig[mySize].depthREMOT, sizeConfig[mySize].widthREMOT, (currentPosition/100)]);
		if ($('#arm1_b').prop('checked')){
			_translate([myBench.BCHPOS], [sizeConfig[mySize].depthPOS+valPos, sizeConfig[mySize].widthPOS+0, (sizeConfig[mySize].heightPOS)+(currentPosition/100)]);
			_translate([myBench.CO1UH3_2P,myBench.CO1UH3_22P], [-0.12, sizeConfig[mySize].widthCol1, (currentPosition/100)]);
			_translate([myBench.CO2UH3_2P], [-0.12, sizeConfig[mySize].widthCol2, (currentPosition/100)]);
			_translate([myBench.CO3UH3_2P], [-0.12, sizeConfig[mySize].widthCol3, (currentPosition/100)]);	
			_translate([myBench.CO1UH1_1P,myBench.CO1UH3_1P,myBench.CO1UH4_1P], [-0.12, sizeConfig[mySize].widthCol1, 0]);
			_translate([myBench.CO2UH1_1P,myBench.CO2UH3_1P,myBench.CO2UH4_1P], [-0.12, sizeConfig[mySize].widthCol2, 0]);
			_translate([myBench.CO3UH1_1P,myBench.CO3UH3_1P,myBench.CO3UH4_1P], [-0.12, sizeConfig[mySize].widthCol3, 0]);
		}else{
			_translate([myBench.BCHPOS], [sizeConfig[mySize].depthPOSsK, sizeConfig[mySize].widthPOSsK, (currentPosition/100)]);
			_translate([myBench.CO1UH3_2P,myBench.CO1UH3_22P], [sizeConfig[mySize].depthCol1, sizeConfig[mySize].widthCol1, (currentPosition/100)]);
			_translate([myBench.CO2UH3_2P], [sizeConfig[mySize].depthCol2, sizeConfig[mySize].widthCol2, (currentPosition/100)]);
			_translate([myBench.CO3UH3_2P], [sizeConfig[mySize].depthCol3, sizeConfig[mySize].widthCol3, (currentPosition/100)]);	
			_translate([myBench.CO1UH1_1P,myBench.CO1UH3_1P,myBench.CO1UH4_1P], [sizeConfig[mySize].depthCol1, sizeConfig[mySize].widthCol1, 0]);
			_translate([myBench.CO2UH1_1P,myBench.CO2UH3_1P,myBench.CO2UH4_1P], [sizeConfig[mySize].depthCol2, sizeConfig[mySize].widthCol2, 0]);
			_translate([myBench.CO3UH1_1P,myBench.CO3UH3_1P,myBench.CO3UH4_1P], [sizeConfig[mySize].depthCol3, sizeConfig[mySize].widthCol3, 0]);
		}
	if (mySize == "90x75" || mySize == "100x75" || mySize == "120x75" || mySize == "140x75" || mySize == "150x75"){
		$('#slidingAll_b').prop('disabled', false);
	}else{		
		$('#slidingAll_b').prop('disabled', true);
	}	
	$('#uh1_b').prop('disabled', false);
	$('#uh3_b').prop('disabled', true);
	$('#uh4_b').prop('disabled', false);
	$('#shelving_b').prop('disabled', false);
	$('#moveLUH1_id').hide();
	$('#moveLUH3_id').show();
	$('#moveLUH4_id').hide();
	$('#dimIn_WS_id').val(dimWS[mySize].In);
	$('#dimCm_WS_id').val(dimWS[mySize].Cm);	
	$('#Model_BCH_id').val('BCHLC'+(dimWS[mySize].size));
	
	currentSize = mySize;
	mySize == "45x75" || mySize == "45x55" ? _rotate([myBench.CO1UH3_1P, myBench.CO1UH3_2P,myBench.CO1UH3_22P, myBench.CO1UH4_1P, myBench.CO1UH4_2P,myBench.CO1UH4_22P, myBench.CO1UH1_1P, myBench.CO1UH1_2P, myBench.CO1UH1_3P, myBench.CO2UH3_1P, myBench.CO2UH3_2P, myBench.CO2UH4_1P, myBench.CO2UH4_2P, myBench.CO2UH1_1P, myBench.CO2UH1_2P, myBench.CO2UH1_3P], [Math.PI/2,0, 0, 1]) : _rotate([myBench.CO1UH3_1P, myBench.CO1UH3_2P,myBench.CO1UH3_22P, myBench.CO1UH4_1P, myBench.CO1UH4_2P,myBench.CO1UH4_22P, myBench.CO1UH1_1P, myBench.CO1UH1_2P, myBench.CO1UH1_3P, myBench.CO2UH3_1P, myBench.CO2UH3_2P, myBench.CO2UH4_1P, myBench.CO2UH4_2P, myBench.CO2UH1_1P, myBench.CO2UH1_2P, myBench.CO2UH1_3P], [Math.PI/2,0, 0, 0]);
}

function moveUp(myPosition){
	let valPos = $('#slidingAll_b').prop('checked') ? 0.26 : 0;
	if ($('#uh1_b').prop('checked')){
		_translate([myBench.KEY1_SLIDING], [valPos,0,[(myPosition/100)-0.11]]);
		_translate([myBench.KEY1], [0,0,[(myPosition/100)-0.11]]);
		_translate([myBench['PLATEAU_'+currentSize],myBench.SHELVING], [0,0,[(myPosition/100)-0.11]]);
		_translate([myBench.ALIM], [sizeConfig[currentSize].depthAlim, sizeConfig[currentSize].widthAlim, (myPosition/100)-0.11]);
		_translate([myBench.IEC], [sizeConfig[currentSize].depthOption, 0, [(myPosition/100)-0.11]]);
		_translate([myBench.ARMERG], [sizeConfig[currentSize].depthOption, sizeConfig[currentSize].widthOption, [(myPosition/100)-0.11]]);
		_translate([myBench.SCR1, myBench.PC1], [0, sizeConfig[currentSize].widthOption, [(myPosition/100)-0.11]]);
		_translate([myBench.REMOT], [sizeConfig[currentSize].depthREMOT, sizeConfig[currentSize].widthREMOT, [(myPosition/100)-0.11]]);
		if ($('#arm1_b').prop('checked')){
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOS+valPos, sizeConfig[currentSize].widthPOS+0, (sizeConfig[currentSize].heightPOS)+(myPosition/100)-0.11]);
			_translate([myBench.CO1UH1_3P], [-0.12, sizeConfig[currentSize].widthCol1, [myPosition/100]]);
			_translate([myBench.CO2UH1_3P], [-0.12, sizeConfig[currentSize].widthCol2, [myPosition/100]]);
			_translate([myBench.CO3UH1_3P], [-0.12, sizeConfig[currentSize].widthCol3, [myPosition/100]]);
			_translate([myBench.CO1UH1_2P], [-0.12, sizeConfig[currentSize].widthCol1, [myPosition/200]]);
			_translate([myBench.CO2UH1_2P], [-0.12, sizeConfig[currentSize].widthCol2, [myPosition/200]]);
			_translate([myBench.CO3UH1_2P], [-0.12, sizeConfig[currentSize].widthCol3, [myPosition/200]]);
		}else{
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK+valPos, sizeConfig[currentSize].widthPOSsK, [(myPosition/100)-0.11]]);
			_translate([myBench.CO1UH1_3P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, [myPosition/100]]);
			_translate([myBench.CO2UH1_3P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, [myPosition/100]]);
			_translate([myBench.CO3UH1_3P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, [myPosition/100]]);
			_translate([myBench.CO1UH1_2P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, [myPosition/200]]);
			_translate([myBench.CO2UH1_2P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, [myPosition/200]]);
			_translate([myBench.CO3UH1_2P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, [myPosition/200]]);
		}
	}else if ($('#uh4_b').prop('checked')){
		_translate([myBench['PLATEAU_'+currentSize],myBench.SHELVING], [0,0,[(myPosition/100)+0.049]]);
		_translate([myBench.KEY1_SLIDING], [valPos,0,[(myPosition/100)+0.049]]);
		_translate([myBench.KEY1], [0,0,[(myPosition/100)+0.049]]);
		_translate([myBench.IEC], [sizeConfig[currentSize].depthOption, 0, [(myPosition/100)+0.049]]);
		_translate([myBench.ALIM], [sizeConfig[currentSize].depthAlim, sizeConfig[currentSize].widthAlim, (myPosition/100)+0.049]);
		_translate([myBench.ARMERG], [sizeConfig[currentSize].depthOption, sizeConfig[currentSize].widthOption, [(myPosition/100)+0.049]]);
		_translate([myBench.SCR1, myBench.PC1], [0, sizeConfig[currentSize].widthOption, [(myPosition/100)+0.049]]);	
		_translate([myBench.REMOT], [sizeConfig[currentSize].depthREMOT, sizeConfig[currentSize].widthREMOT, [(myPosition/100)+0.049]]);
		if ($('#arm1_b').prop('checked')){
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOS+valPos, sizeConfig[currentSize].widthPOS+0, (sizeConfig[currentSize].heightPOS)+(myPosition/100)+0.049]);
			_translate([myBench.CO1UH4_2P,myBench.CO1UH4_22P], [-0.12, sizeConfig[currentSize].widthCol1, (myPosition/100)]);
			_translate([myBench.CO2UH4_2P], [-0.12, sizeConfig[currentSize].widthCol2, (myPosition/100)]);
			_translate([myBench.CO3UH4_2P], [-0.12, sizeConfig[currentSize].widthCol3, (myPosition/100)]);
		}else{
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK+valPos, sizeConfig[currentSize].widthPOSsK, [(myPosition/100)+0.049]]);
			_translate([myBench.CO1UH4_2P,myBench.CO1UH4_22P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, (myPosition/100)]);
			_translate([myBench.CO2UH4_2P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, (myPosition/100)]);
			_translate([myBench.CO3UH4_2P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, (myPosition/100)]);
		}	
	}else{	
		_translate([myBench['PLATEAU_'+currentSize],myBench.SHELVING], [0,0,(myPosition/100)]);
		_translate([myBench.KEY1_SLIDING], [valPos,0,[(myPosition/100)]]);
		_translate([myBench.KEY1], [0,0,[(myPosition/100)]]);
		_translate([myBench.IEC], [sizeConfig[currentSize].depthOption, 0, (myPosition/100)]);
		_translate([myBench.ALIM], [sizeConfig[currentSize].depthAlim, sizeConfig[currentSize].widthAlim, (myPosition/100)]);
		_translate([myBench.ARMERG], [sizeConfig[currentSize].depthOption, sizeConfig[currentSize].widthOption, (myPosition/100)]);
		_translate([myBench.SCR1, myBench.PC1], [0, sizeConfig[currentSize].widthOption, (myPosition/100)]);	
		_translate([myBench.REMOT], [sizeConfig[currentSize].depthREMOT, sizeConfig[currentSize].widthREMOT, (myPosition/100)]);
		if ($('#arm1_b').prop('checked')){
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOS+valPos, sizeConfig[currentSize].widthPOS+0, (sizeConfig[currentSize].heightPOS)+(myPosition/100)]);
			_translate([myBench.CO1UH3_2P,myBench.CO1UH3_22P], [-0.12, sizeConfig[currentSize].widthCol1, (myPosition/100)]);
			_translate([myBench.CO2UH3_2P], [-0.12, sizeConfig[currentSize].widthCol2, (myPosition/100)]);
			_translate([myBench.CO3UH3_2P], [-0.12, sizeConfig[currentSize].widthCol3, (myPosition/100)]);	
		}else{
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK+valPos, sizeConfig[currentSize].widthPOSsK, (myPosition/100)]);
			_translate([myBench.CO1UH3_2P,myBench.CO1UH3_22P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, (myPosition/100)]);
			_translate([myBench.CO2UH3_2P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, (myPosition/100)]);
			_translate([myBench.CO3UH3_2P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, (myPosition/100)]);	
		}
	}		
		
	currentPosition = myPosition;
}

//Selector

$('#dim_id').on('input', function() {
		$('#dim_val').val($('#tickmarks option[value="'+this.value+'"]').attr('name'));
		$('#dimInch_val').val($('#tickmarks option[value="'+this.value+'"]').attr('inch'));
});

$('#dim_id').change(function() {
		sizeChange($('#tickmarks option[value="'+this.value+'"]').attr('name'));
		$('#dim_val').val($('#tickmarks option[value="'+this.value+'"]').attr('name'));
		$('#dimInch_val').val($('#tickmarks option[value="'+this.value+'"]').attr('inch'));
});

$('#moveUH1_id').on('input', function() {
		moveUp($('#tickmarks_moveUH1 option[value="'+this.value+'"]').attr('value'));
		$('#moveUH1_val').val($('#tickmarks_moveUH1 option[value="'+this.value+'"]').attr('name'));
		$('#moveUH1In_val').val($('#tickmarks_moveUH1 option[value="'+this.value+'"]').attr('inch'));
});

$('#moveUH3_id').on('input', function() {
		moveUp($('#tickmarks_moveUH3 option[value="'+this.value+'"]').attr('value'));
		$('#moveUH3_val').val($('#tickmarks_moveUH3 option[value="'+this.value+'"]').attr('name'));
		$('#moveUH3In_val').val($('#tickmarks_moveUH3 option[value="'+this.value+'"]').attr('inch'));
});

$('#moveUH4_id').on('input', function() {
		moveUp($('#tickmarks_moveUH4 option[value="'+this.value+'"]').attr('value'));
		$('#moveUH4_val').val($('#tickmarks_moveUH4 option[value="'+this.value+'"]').attr('name'));
		$('#moveUH4In_val').val($('#tickmarks_moveUH4 option[value="'+this.value+'"]').attr('inch'));
});

$('#dimUnite').click(function() {
		if ($(this).prop("innerText") == "cm") {
			$('#allCm').hide();
			$('#allUH1Cm').hide();
			$('#allUH3Cm').hide();
			$('#allUH4Cm').hide();
			$('#allIn').show();
			$('#allUH1In').show();
			$('#allUH3In').show();
			$('#allUH4In').show();
			$('#uh1in').show();
			$('#uh3in').show();
			$('#uh4in').show();
			$('#uh1cm').hide();
			$('#uh3cm').hide();
			$('#uh4cm').hide();
			($('#dimCm_WS_id')).hide();	
			($('#dimIn_WS_id')).show();	
			$('#dimIn_WS_id').val(dimWS[currentSize].In);
		}else{
			$('#allCm').show();
			$('#allUH1Cm').show();
			$('#allUH3Cm').show();
			$('#allUH4Cm').show();
			$('#allIn').hide();
			$('#allUH1In').hide();
			$('#allUH3In').hide();
			$('#allUH4In').hide();
			$('#uh1in').hide();
			$('#uh3in').hide();
			$('#uh4in').hide();
			$('#uh1cm').show();
			$('#uh3cm').show();
			$('#uh4cm').show();
			($('#dimCm_WS_id')).show();	
			($('#dimIn_WS_id')).hide();	
			$('#dimCm_WS_id').val(dimWS[currentSize].Cm);
		}
});

// Color
$('#grey_b').change(function() {
	if(this.checked){
		changeColor("grey");
	}else{
		changeColor("black");
	}
});

//Boutons


$('#pc1_b').change(function() {
	if(this.checked){
		_show(myBench.PC1);
		_camera([0.83, -0.91+0.23+sizeConfig[currentSize].widthCol1, 0.5+(currentPosition/100)], [-0.17, -0.11+0.23+sizeConfig[currentSize].widthCol1, 0.18+(currentPosition/100)], 2);
	}else{
		_hide(myBench.PC1);	
	}
});	

$('#remot_b').change(function() {
	if(this.checked){
		_show(myBench.REMOT);
		_camera([0.87, 0.574-0.33+sizeConfig[currentSize].widthREMOT, 0.6+(currentPosition/100)], [-0.011, 0.067-0.33+sizeConfig[currentSize].widthREMOT, 0.35+(currentPosition/100)], 2);
	}else{
	_hide(myBench.REMOT);
	}	
});	
$('#arm1_b').change(function() {
	let valPos = $('#slidingAll_b').prop('checked') ? 0.26 : 0;
	$('#slidingAll_b').prop('disabled', false);
	if(this.checked){
		_camera([1.07, -0.82-0.249+sizeConfig[currentSize].widthOption, 1.1+(currentPosition/100)], [-0.005, -0.075-0.249+sizeConfig[currentSize].widthOption, 0.56+(currentPosition/100)], 2);
		_translate([myBench.CO1UH1_1P,myBench.CO1UH3_1P,myBench.CO1UH4_1P], [-0.12, sizeConfig[currentSize].widthCol1, 0]);
		_translate([myBench.CO2UH1_1P,myBench.CO2UH3_1P,myBench.CO2UH4_1P], [-0.12, sizeConfig[currentSize].widthCol2, 0]);
		_translate([myBench.CO3UH1_1P,myBench.CO3UH3_1P,myBench.CO3UH4_1P], [-0.12, sizeConfig[currentSize].widthCol3, 0]);
		showMultiple([myBench.KEY1,myBench.KEY1_SLIDING,myBench.SCR1]);
		_hide(myBench.ARMERG);
		$('#armerg_b').prop('checked', false);
		$('#scr1_b').prop('checked', false);
		$('#key1_b').prop('checked', false);
		$('#scr1_id').hide();
		$('#key1_id').hide();			
		if ($('#uh1_b').prop('checked')){			
			hideMultiple([myBench.SOLV, myBench.CAN10L, myBench.EXHFIL, myBench.ELEC2LEVEL, myBench.ELEC1LEVEL]);
			$('#solv_b').prop('checked', false);		
			$('#can10l_b').prop('checked', false);		
			$('#exhfil_b').prop('checked', false);		
			$('#eleclevel_b').prop('checked', false);
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOS+valPos, sizeConfig[currentSize].widthPOS+0, (sizeConfig[currentSize].heightPOS)+(currentPosition/100)-0.11]);
			_translate([myBench.KEY1_SLIDING], [valPos,0,[(currentPosition/100)-0.11]]);
			_translate([myBench.KEY1], [0,0,[(currentPosition/100)-0.11]]);
			_translate([myBench.CO1UH1_3P], [-0.12, sizeConfig[currentSize].widthCol1, [currentPosition/100]]);
			_translate([myBench.CO2UH1_3P], [-0.12, sizeConfig[currentSize].widthCol2, [currentPosition/100]]);
			_translate([myBench.CO3UH1_3P], [-0.12, sizeConfig[currentSize].widthCol3, [currentPosition/100]]);
			_translate([myBench.CO1UH1_2P], [-0.12, sizeConfig[currentSize].widthCol1, [currentPosition/200]]);
			_translate([myBench.CO2UH1_2P], [-0.12, sizeConfig[currentSize].widthCol2, [currentPosition/200]]);
			_translate([myBench.CO3UH1_2P], [-0.12, sizeConfig[currentSize].widthCol3, [currentPosition/200]]);
		}else if ($('#uh4_b').prop('checked')){
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOS+valPos, sizeConfig[currentSize].widthPOS+0, (sizeConfig[currentSize].heightPOS)+(currentPosition/100)+0.049]);
			_translate([myBench.KEY1_SLIDING], [valPos,0,[(currentPosition/100)+0.049]]);
			_translate([myBench.KEY1], [0,0,[(currentPosition/100)+0.049]]);
			_translate([myBench.CO1UH4_2P,myBench.CO1UH4_22P], [-0.12, sizeConfig[currentSize].widthCol1, (currentPosition/100)]);
			_translate([myBench.CO2UH4_2P], [-0.12, sizeConfig[currentSize].widthCol2, (currentPosition/100)]);
			_translate([myBench.CO3UH4_2P], [-0.12, sizeConfig[currentSize].widthCol3, (currentPosition/100)]);
		}else {
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOS+valPos, sizeConfig[currentSize].widthPOS+0, (sizeConfig[currentSize].heightPOS)+(currentPosition/100)]);
			_translate([myBench.KEY1_SLIDING], [valPos,0,[(currentPosition/100)]]);
			_translate([myBench.KEY1], [0,0,[(currentPosition/100)]]);
			_translate([myBench.CO1UH3_2P,myBench.CO1UH3_22P], [-0.12, sizeConfig[currentSize].widthCol1, (currentPosition/100)]);
			_translate([myBench.CO2UH3_2P], [-0.12, sizeConfig[currentSize].widthCol2, (currentPosition/100)]);
			_translate([myBench.CO3UH3_2P], [-0.12, sizeConfig[currentSize].widthCol3, (currentPosition/100)]);	
		}
	}else{		
		$('#slidingAll_b').prop('checked', false);
		$('#slidingAll_b').prop('disabled', true);
		_translate([myBench.CO1UH1_1P,myBench.CO1UH3_1P,myBench.CO1UH4_1P], [0, sizeConfig[currentSize].widthCol1, 0]);
		_translate([myBench.CO2UH1_1P,myBench.CO2UH3_1P,myBench.CO2UH4_1P], [0, sizeConfig[currentSize].widthCol2, 0]);
		_translate([myBench.CO3UH1_1P,myBench.CO3UH3_1P,myBench.CO3UH4_1P], [0, sizeConfig[currentSize].widthCol3, 0]);
		hideMultiple([myBench.KEY1,myBench.KEY1_SLIDING,myBench.SCR1]);
		$('#scr1_id').show();
		$('#key1_id').show();	
		$('#scr1_b').prop('checked', false);
		$('#key1_b').prop('checked', false);	
		if ($('#uh1_b').prop('checked')){
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK, sizeConfig[currentSize].widthPOSsK, [(currentPosition/100)-0.11]]);	
			_translate([myBench.CO1UH1_3P], [0, sizeConfig[currentSize].widthCol1, [currentPosition/100]]);
			_translate([myBench.CO2UH1_3P], [0, sizeConfig[currentSize].widthCol2, [currentPosition/100]]);
			_translate([myBench.CO3UH1_3P], [0, sizeConfig[currentSize].widthCol3, [currentPosition/100]]);
			_translate([myBench.CO1UH1_2P], [0, sizeConfig[currentSize].widthCol1, [currentPosition/200]]);
			_translate([myBench.CO2UH1_2P], [0, sizeConfig[currentSize].widthCol2, [currentPosition/200]]);
			_translate([myBench.CO3UH1_2P], [0, sizeConfig[currentSize].widthCol3, [currentPosition/200]]);
		}else if ($('#uh4_b').prop('checked')){
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK, sizeConfig[currentSize].widthPOSsK, (currentPosition/100)+0.049]);
			_translate([myBench.CO1UH4_2P,myBench.CO1UH4_22P], [0, sizeConfig[currentSize].widthCol1, (currentPosition/100)]);
			_translate([myBench.CO2UH4_2P], [0, sizeConfig[currentSize].widthCol2, (currentPosition/100)]);
			_translate([myBench.CO3UH4_2P], [0, sizeConfig[currentSize].widthCol3, (currentPosition/100)]);
		}else {
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK, sizeConfig[currentSize].widthPOSsK, (currentPosition/100)]);
			_translate([myBench.CO1UH3_2P,myBench.CO1UH3_22P], [0, sizeConfig[currentSize].widthCol1, (currentPosition/100)]);
			_translate([myBench.CO2UH3_2P], [0, sizeConfig[currentSize].widthCol2, (currentPosition/100)]);
			_translate([myBench.CO3UH3_2P], [0, sizeConfig[currentSize].widthCol3, (currentPosition/100)]);	
		}
	}
});
$('#scr1_b').change(function() {
	if(this.checked){
		_camera([1.24, -1.54+sizeConfig[currentSize].widthOption, 1.13+(currentPosition/100)], [-0.3, -0.30+sizeConfig[currentSize].widthOption, 0.68+(currentPosition/100)], 2);
		_show(myBench.SCR1);
		_hide(myBench.ARMERG);
		$('#armerg_b').prop('checked', false);
		if ($('#key1_b').prop('checked')){
			$('#scr1_b').prop('checked', false);			
			$('#key1_b').prop('checked', false);			
			$('#arm1_b').prop('checked', true);		
			$('#scr1_id').hide();
			$('#key1_id').hide();		
		}
	}else{
		_hide(myBench.SCR1);	
	}
});	
$('#key1_b').change(function() {
	if(this.checked){
		_camera([1.07, -0.82-0.249+sizeConfig[currentSize].widthOption, 1.1+(currentPosition/100)], [-0.005, -0.075-0.249+sizeConfig[currentSize].widthOption, 0.56+(currentPosition/100)], 2);
		showMultiple([myBench.KEY1,myBench.KEY1_SLIDING]);	
		hideMultiple([myBench.ARMERG,myBench.SCR1]);
		$('#armerg_b').prop('checked', false);
		if ($('#scr1_b').prop('checked')){
			$('#scr1_b').prop('checked', false);			
			$('#key1_b').prop('checked', false);			
			$('#arm1_b').prop('checked', true);		
			$('#scr1_id').hide();
			$('#key1_id').hide();		
		}
	}else{
		hideMultiple([myBench.KEY1,myBench.KEY1_SLIDING]);		
	}
});	
$('#armerg_b').change(function() {
	if(this.checked){
		_camera([1.24, -1.54+sizeConfig[currentSize].widthOption, 1.13+(currentPosition/100)], [-0.3, -0.30+sizeConfig[currentSize].widthOption, 0.68+(currentPosition/100)], 2);
		$('#slidingAll_b').prop('checked', false);
		$('#slidingAll_b').prop('disabled', true);
		showMultiple([myBench.ARMERG,myBench.SCR1]);
		_translate([myBench.CO1UH1_1P,myBench.CO1UH3_1P,myBench.CO1UH4_1P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, 0]);
		_translate([myBench.CO2UH1_1P,myBench.CO2UH3_1P,myBench.CO2UH4_1P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, 0]);
		_translate([myBench.CO3UH1_1P,myBench.CO3UH3_1P,myBench.CO3UH4_1P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, 0]);
		hideMultiple([myBench.KEY1,myBench.KEY1_SLIDING]);
		$('#scr1_b').prop('checked', false);
		$('#key1_b').prop('checked', false);
		$('#arm1_b').prop('checked', false);
		if ($('#uh1_b').prop('checked')){
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK, sizeConfig[currentSize].widthPOSsK, [(currentPosition/100)-0.11]]);
			_translate([myBench.CO1UH1_3P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, [currentPosition/100]]);
			_translate([myBench.CO2UH1_3P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, [currentPosition/100]]);
			_translate([myBench.CO3UH1_3P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, [currentPosition/100]]);
			_translate([myBench.CO1UH1_2P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, [currentPosition/200]]);
			_translate([myBench.CO2UH1_2P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, [currentPosition/200]]);
			_translate([myBench.CO3UH1_2P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, [currentPosition/200]]);
		}else if ($('#uh4_b').prop('checked')){
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK, sizeConfig[currentSize].widthPOSsK, [(currentPosition/100)+0.049]]);
			_translate([myBench.CO1UH4_2P,myBench.CO1UH4_22P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, (currentPosition/100)]);
			_translate([myBench.CO2UH4_2P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, (currentPosition/100)]);
			_translate([myBench.CO3UH4_2P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, (currentPosition/100)]);
		}else{
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK, sizeConfig[currentSize].widthPOSsK, (currentPosition/100)]);
			_translate([myBench.CO1UH3_2P,myBench.CO1UH3_22P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, (currentPosition/100)]);
			_translate([myBench.CO2UH3_2P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, (currentPosition/100)]);
			_translate([myBench.CO3UH3_2P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, (currentPosition/100)]);	
		}		
	}else{
		hideMultiple([myBench.ARMERG,myBench.SCR1]);
	}
});	
$('#iec_b').change(function() {
	if(this.checked){
		_show(myBench.IEC);
		_camera([-0.46+sizeConfig[currentSize].depthOption, -0.37, 0.16+(currentPosition/100)], [-0.13+sizeConfig[currentSize].depthOption, 0.016, 0.59+(currentPosition/100)], 2);
	}else{
		_hide(myBench.IEC);	
	}
});	
$('#uh1_b').change(function() {
		_camera([0.74, 1.38, 0.25], [-0.24, 0.095, 0.24], 2);
		let valPos = $('#slidingAll_b').prop('checked') ? 0.26 : 0;
		hideMultiple([myBench.CO1UH3_1P, myBench.CO1UH3_2P,myBench.CO1UH3_22P, myBench.CO1UH4_1P, myBench.CO1UH4_2P,myBench.CO1UH4_22P, myBench.CO2UH3_1P, myBench.CO2UH3_2P, myBench.CO2UH4_1P, myBench.CO2UH4_2P, myBench.CO3UH3_1P, myBench.CO3UH3_2P, myBench.CO3UH4_1P, myBench.CO3UH4_2P]);
		if (currentSize == "45x55"){
			showMultiple([myBench.CO1UH1_1P, myBench.CO1UH1_2P, myBench.CO1UH1_3P]);
		}else if (currentSize == "140x75" || currentSize == "150x75"){
			showMultiple([myBench.CO1UH1_1P, myBench.CO1UH1_2P, myBench.CO1UH1_3P, myBench.CO2UH1_1P, myBench.CO2UH1_2P, myBench.CO2UH1_3P, myBench.CO3UH1_1P, myBench.CO3UH1_2P, myBench.CO3UH1_3P]);
		}else{
			showMultiple([myBench.CO1UH1_1P, myBench.CO1UH1_2P, myBench.CO1UH1_3P, myBench.CO2UH1_1P, myBench.CO2UH1_2P, myBench.CO2UH1_3P]);
		}
		$('#uh3_b').prop('checked', false);
		$('#uh4_b').prop('checked', false);
		$('#uh1_b').prop('disabled', true);
		$('#uh3_b').prop('disabled', false);
		$('#uh4_b').prop('disabled', false);
		$('#shelving_b').prop('checked', false);
		$('#shelving_b').prop('disabled', true);
		$('#moveLUH1_id').show();
		$('#moveLUH3_id').hide();
		$('#moveLUH4_id').hide();
		if (currentSize == "90x75" || currentSize == "45x55" || currentSize == "100x75" || currentSize == "120x75" || currentSize == "140x75" || currentSize == "150x75"){
			_hide(myBench.PC1);
			$('#pc1_id').hide();	
			$('#pc1_b').prop('checked', false);	
			hideMultiple([myBench.SOLV, myBench.CAN10L, myBench.EXHFIL, myBench.ELEC2LEVEL, myBench.ELEC1LEVEL]);
			$('#solv_b').prop('checked', false);		
			$('#can10l_b').prop('checked', false);		
			$('#exhfil_b').prop('checked', false);		
			$('#eleclevel_b').prop('checked', false);		
			$('#can10l_id').hide();
			$('#exhfil_id').hide();
			$('#eleclevel_id').hide();
		}		
		_translate([myBench['PLATEAU_'+currentSize],myBench.SHELVING], [0,0,(currentPosition/100)-0.11]);
		_translate([myBench.ALIM], [sizeConfig[currentSize].depthAlim, sizeConfig[currentSize].widthAlim, (currentPosition/100)-0.11]);
		_translate([myBench.KEY1_SLIDING], [valPos,0,[(currentPosition/100)-0.11]]);
		_translate([myBench.KEY1], [0,0,[(currentPosition/100)-0.11]]);
		_translate([myBench.IEC], [sizeConfig[currentSize].depthOption, 0, (currentPosition/100)-0.11]);
		_translate([myBench.ARMERG], [sizeConfig[currentSize].depthOption, sizeConfig[currentSize].widthOption, (currentPosition/100)-0.11]);
		_translate([myBench.SCR1, myBench.PC1], [0, sizeConfig[currentSize].widthOption, (currentPosition/100)-0.11]);	
		_translate([myBench.REMOT], [sizeConfig[currentSize].depthREMOT, sizeConfig[currentSize].widthREMOT, (currentPosition/100)-0.11]);
		if ($('#arm1_b').prop('checked')){
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOS+valPos, sizeConfig[currentSize].widthPOS+0, (sizeConfig[currentSize].heightPOS)+(currentPosition/100)-0.11]);
			_translate([myBench.CO1UH1_3P], [-0.12, sizeConfig[currentSize].widthCol1, [currentPosition/100]]);
			_translate([myBench.CO2UH1_3P], [-0.12, sizeConfig[currentSize].widthCol2, [currentPosition/100]]);
			_translate([myBench.CO3UH1_3P], [-0.12, sizeConfig[currentSize].widthCol3, [currentPosition/100]]);
			_translate([myBench.CO1UH1_2P], [-0.12, sizeConfig[currentSize].widthCol1, [currentPosition/200]]);
			_translate([myBench.CO2UH1_2P], [-0.12, sizeConfig[currentSize].widthCol2, [currentPosition/200]]);
			_translate([myBench.CO3UH1_2P], [-0.12, sizeConfig[currentSize].widthCol3, [currentPosition/200]]);
		}else{
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK, sizeConfig[currentSize].widthPOSsK, (currentPosition/100)-0.11]);
			_translate([myBench.CO1UH1_3P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, [currentPosition/100]]);
			_translate([myBench.CO2UH1_3P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, [currentPosition/100]]);
			_translate([myBench.CO3UH1_3P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, [currentPosition/100]]);
			_translate([myBench.CO1UH1_2P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, [currentPosition/200]]);
			_translate([myBench.CO2UH1_2P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, [currentPosition/200]]);
			_translate([myBench.CO3UH1_2P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, [currentPosition/200]]);
		}
});	
$('#uh3_b').change(function() {
		_camera([0.74, 1.38, 0.25], [-0.24, 0.095, 0.24], 2);
		let valPos = $('#slidingAll_b').prop('checked') ? 0.26 : 0;
		hideMultiple([myBench.CO1UH1_1P, myBench.CO1UH1_2P, myBench.CO1UH1_3P, myBench.CO1UH4_1P, myBench.CO1UH4_2P,myBench.CO1UH4_22P, myBench.CO2UH4_1P, myBench.CO2UH4_2P, myBench.CO2UH1_1P, myBench.CO2UH1_2P, myBench.CO2UH1_3P, myBench.CO3UH4_1P, myBench.CO3UH4_2P, myBench.CO3UH1_1P, myBench.CO3UH1_2P, myBench.CO3UH1_3P]);
		if (currentSize == "45x55"){
			$('#shelving_b').prop('disabled', false);
			if ($('#shelving_b').prop('checked')){
				showMultiple([myBench.CO1UH3_1P, myBench.CO1UH3_2P]);
				$('#uh1_b').prop('disabled', true);
			}else{
				showMultiple([myBench.CO1UH3_1P, myBench.CO1UH3_2P,myBench.CO1UH3_22P]);
				$('#uh1_b').prop('disabled', false);
			}
		}else if (currentSize == "140x75" || currentSize == "150x75"){
			showMultiple([myBench.CO1UH3_1P, myBench.CO1UH3_2P,myBench.CO1UH3_22P, myBench.CO2UH3_1P, myBench.CO2UH3_2P, myBench.CO3UH3_1P, myBench.CO3UH3_2P]);
		}else{
			showMultiple([myBench.CO1UH3_1P, myBench.CO1UH3_2P,myBench.CO1UH3_22P, myBench.CO2UH3_1P, myBench.CO2UH3_2P]);
		}
		$('#uh1_b').prop('checked', false);
		$('#uh4_b').prop('checked', false);
		$('#uh3_b').prop('disabled', true);
		$('#uh4_b').prop('disabled', false);
		$('#uh1_b').prop('disabled', false);
		$('#moveLUH1_id').hide();
		$('#moveLUH3_id').show();
		$('#moveLUH4_id').hide();
		_translate([myBench['PLATEAU_'+currentSize],myBench.SHELVING], [0,0,(currentPosition/100)]);
		_translate([myBench.KEY1_SLIDING], [valPos,0,(currentPosition/100)]);
		_translate([myBench.KEY1], [0,0,(currentPosition/100)]);
		_translate([myBench.ALIM], [sizeConfig[currentSize].depthAlim, sizeConfig[currentSize].widthAlim, (currentPosition/100)]);
		_translate([myBench.IEC, myBench.ARMERG], [sizeConfig[currentSize].depthOption, 0, (currentPosition/100)]);
		_translate([myBench.ARMERG], [sizeConfig[currentSize].depthOption, sizeConfig[currentSize].widthOption, (currentPosition/100)]);
		_translate([myBench.SCR1, myBench.PC1], [0, sizeConfig[currentSize].widthOption, (currentPosition/100)]);	
		_translate([myBench.REMOT], [sizeConfig[currentSize].depthREMOT, sizeConfig[currentSize].widthREMOT, (currentPosition/100)]);
		if ($('#arm1_b').prop('checked')){
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOS+valPos, sizeConfig[currentSize].widthPOS+0, (sizeConfig[currentSize].heightPOS)+(currentPosition/100)]);
			_translate([myBench.CO1UH3_2P,myBench.CO1UH3_22P], [-0.12, sizeConfig[currentSize].widthCol1, (currentPosition/100)]);
			_translate([myBench.CO2UH3_2P], [-0.12, sizeConfig[currentSize].widthCol2, (currentPosition/100)]);
			_translate([myBench.CO3UH3_2P], [-0.12, sizeConfig[currentSize].widthCol3, (currentPosition/100)]);	
		}else{
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK, sizeConfig[currentSize].widthPOSsK, (currentPosition/100)]);
			_translate([myBench.CO1UH3_2P,myBench.CO1UH3_22P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, (currentPosition/100)]);
			_translate([myBench.CO2UH3_2P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, (currentPosition/100)]);
			_translate([myBench.CO3UH3_2P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, (currentPosition/100)]);	
		}
});	
$('#uh4_b').change(function() {
		_camera([0.74, 1.38, 0.25], [-0.24, 0.095, 0.24], 2);
		let valPos = $('#slidingAll_b').prop('checked') ? 0.26 : 0;
		hideMultiple([myBench.CO1UH1_1P, myBench.CO1UH1_2P, myBench.CO1UH1_3P, myBench.CO1UH4_1P, myBench.CO1UH3_2P,myBench.CO1UH3_22P, myBench.CO2UH3_1P, myBench.CO2UH3_2P, myBench.CO2UH1_1P, myBench.CO2UH1_2P, myBench.CO2UH1_3P, myBench.CO3UH3_1P, myBench.CO3UH3_2P, myBench.CO3UH1_1P, myBench.CO3UH1_2P, myBench.CO3UH1_3P]);
		if (currentSize == "45x55"){
			$('#shelving_b').prop('disabled', false);
			if ($('#shelving_b').prop('checked')){
				showMultiple([myBench.CO1UH4_1P, myBench.CO1UH4_2P]);
				$('#uh1_b').prop('disabled', true);
			}else{
				showMultiple([myBench.CO1UH4_1P, myBench.CO1UH4_2P,myBench.CO1UH4_22P]);
				$('#uh1_b').prop('disabled', false);
			}
		}else if (currentSize == "140x75" || currentSize == "150x75"){
			showMultiple([myBench.CO1UH4_1P, myBench.CO1UH4_2P,myBench.CO1UH4_22P, myBench.CO2UH4_1P, myBench.CO2UH4_2P, myBench.CO3UH4_1P, myBench.CO3UH4_2P]);
		}else{
			showMultiple([myBench.CO1UH4_1P, myBench.CO1UH4_2P,myBench.CO1UH4_22P, myBench.CO2UH4_1P, myBench.CO2UH4_2P]);
		}
		$('#uh1_b').prop('checked', false);
		$('#uh3_b').prop('checked', false);
		$('#uh4_b').prop('disabled', true);
		$('#uh3_b').prop('disabled', false);
		$('#uh1_b').prop('disabled', false);
		$('#moveLUH1_id').hide();
		$('#moveLUH3_id').hide();
		$('#moveLUH4_id').show();
		_translate([myBench['PLATEAU_'+currentSize],myBench.SHELVING, myBench.KEY1], [0,0,(currentPosition/100)+0.049]);
		_translate([myBench.KEY1_SLIDING], [valPos,0,[(currentPosition/100)+0.049]]);
		_translate([myBench.ALIM], [sizeConfig[currentSize].depthAlim, sizeConfig[currentSize].widthAlim, (currentPosition/100)+0.049]);
		_translate([myBench.KEY1], [0,0,[(currentPosition/100)+0.049]]);
		_translate([myBench.IEC], [sizeConfig[currentSize].depthOption, 0, (currentPosition/100)+0.049]);
		_translate([myBench.ARMERG], [sizeConfig[currentSize].depthOption, sizeConfig[currentSize].widthOption, (currentPosition/100)+0.049]);
		_translate([myBench.SCR1, myBench.PC1], [0, sizeConfig[currentSize].widthOption, (currentPosition/100)+0.049]);	
		_translate([myBench.REMOT], [sizeConfig[currentSize].depthREMOT, sizeConfig[currentSize].widthREMOT, (currentPosition/100)+0.049]);
		if ($('#arm1_b').prop('checked')){
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOS+valPos, sizeConfig[currentSize].widthPOS+0, (sizeConfig[currentSize].heightPOS)+(currentPosition/100)+0.049]);
			_translate([myBench.CO1UH4_2P,myBench.CO1UH4_22P], [-0.12, sizeConfig[currentSize].widthCol1, (currentPosition/100)]);
			_translate([myBench.CO2UH4_2P], [-0.12, sizeConfig[currentSize].widthCol2, (currentPosition/100)]);
			_translate([myBench.CO3UH4_2P], [-0.12, sizeConfig[currentSize].widthCol3, (currentPosition/100)]);
		}else{
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK, sizeConfig[currentSize].widthPOSsK, (currentPosition/100)+0.049]);
			_translate([myBench.CO1UH4_2P,myBench.CO1UH4_22P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, (currentPosition/100)]);
			_translate([myBench.CO2UH4_2P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, (currentPosition/100)]);
			_translate([myBench.CO3UH4_2P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, (currentPosition/100)]);
		}
});	

$('#shelving_b').change(function() {
	if(this.checked){
		_show(myBench.SHELVING);
		hideMultiple([myBench.CO1UH3_22P,myBench.CO1UH4_22P, myBench.ARMERG]);
		$('#armerg_b').prop('checked', false);		
		$('#uh1_b').prop('disabled', true);
		_camera([2.3445210674638712, -1.4455336969835706, 1.59449030841362], [-0.19476365009814178, 0.40387029518456297, 0.8756128760104882], 2);
	}else{
		_hide(myBench.SHELVING);
		if ($('#uh3_b').prop('checked')){
		_show(myBench.CO1UH3_22P);
		}else if ($('#uh4_b').prop('checked')){
		_show(myBench.CO1UH4_22P);
		}	
		$('#uh1_b').prop('disabled', false);
	}
   
});	

$('#solv_b').change(function() {
	if(this.checked){
		_camera([0.44, 0.93, 0.44], [0.12, 0.046, 0.14], 2);
		_show(myBench.SOLV);
		$('#can10l_b').prop('checked', false);
		$('#can10l_id').show();
		if ($('#uh1_b').prop('checked')){
			hideMultiple([myBench.KEY1, myBench.KEY1_SLIDING]);
			_translate([myBench.BCHPOS], [sizeConfig[currentSize].depthPOSsK, sizeConfig[currentSize].widthPOSsK, (currentPosition/100)-0.11]);
			_translate([myBench.CO1UH1_1P,myBench.CO1UH3_1P,myBench.CO1UH4_1P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, 0]);
			_translate([myBench.CO2UH1_1P,myBench.CO2UH3_1P,myBench.CO2UH4_1P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, 0]);
			_translate([myBench.CO3UH1_1P,myBench.CO3UH3_1P,myBench.CO3UH4_1P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, 0]);
			_translate([myBench.CO1UH1_3P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, [currentPosition/100]]);
			_translate([myBench.CO2UH1_3P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, [currentPosition/100]]);
			_translate([myBench.CO3UH1_3P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, [currentPosition/100]]);
			_translate([myBench.CO1UH1_2P], [sizeConfig[currentSize].depthCol1, sizeConfig[currentSize].widthCol1, [currentPosition/200]]);
			_translate([myBench.CO2UH1_2P], [sizeConfig[currentSize].depthCol2, sizeConfig[currentSize].widthCol2, [currentPosition/200]]);
			_translate([myBench.CO3UH1_2P], [sizeConfig[currentSize].depthCol3, sizeConfig[currentSize].widthCol3, [currentPosition/200]]);

			$('#arm1_b').prop('checked', false);
		}
	} else {
		hideMultiple([myBench.SOLV, myBench.CAN10L, myBench.EXHFIL, myBench.ELEC2LEVEL, myBench.ELEC1LEVEL]);
		$('#can10l_id').hide();
		$('#exhfil_id').hide();
		$('#eleclevel_id').hide();
		$('#eleclevel_b').prop('checked', false);
		$('#exhfil_b').prop('checked', false);
		$('#can10l_b').prop('checked', false);
	}
   
});	
$('#can10l_b').change(function() {
	if(this.checked){
		_camera([0.44, 0.93, 0.44], [0.12, 0.046, 0.14], 2);
		_show(myBench.CAN10L);
		$('#exhfil_b').prop('checked', false);
		$('#exhfil_id').show();
		$('#eleclevel_b').prop('checked', false);
		$('#eleclevel_id').show();
	}else{
		hideMultiple([myBench.CAN10L, myBench.EXHFIL, myBench.ELEC1LEVEL, myBench.ELEC2LEVEL]);  
		$('#exhfil_id').hide();	
		$('#eleclevel_id').hide();	
		$('#eleclevel_b').prop('checked', false);
		$('#exhfil_b').prop('checked', false);
	}
});	
$('#exhfil_b').change(function() {
	if(this.checked){
		_camera([0.44, 0.93, 0.44], [0.12, 0.046, 0.14], 2);
		_show(myBench.EXHFIL);
	}else{
		_hide(myBench.EXHFIL);
	}
});
$('#eleclevel_b').change(function() {
	if(this.checked){
		_camera([0.44, 0.93, 0.44], [0.12, 0.046, 0.14], 2);
		showMultiple([myBench.ELEC1LEVEL, myBench.ELEC2LEVEL]);
	}else{
		hideMultiple([myBench.ELEC1LEVEL, myBench.ELEC2LEVEL]);
	}
});
$('#slidingAll_b').change(function() {
	let valPos = $('#slidingAll_b').prop('checked') ? 0.26 : 0;
	if ($('#uh1_b').prop('checked')){
	_translate([myBench.KEY1_SLIDING], [valPos,0,(currentPosition/100)-0.11],{duration: 1.0});
	_translate([myBench.BCHPOS], [(sizeConfig[currentSize].depthPOS)+valPos, sizeConfig[currentSize].widthPOS+0, (sizeConfig[currentSize].heightPOS)+(currentPosition/100)-0.11],{duration: 1.0});
	}else if ($('#uh4_b').prop('checked')){		
	_translate([myBench.KEY1_SLIDING], [valPos,0,(currentPosition/100)+0.049],{duration: 1.0});
	_translate([myBench.BCHPOS], [(sizeConfig[currentSize].depthPOS)+valPos, sizeConfig[currentSize].widthPOS+0, (sizeConfig[currentSize].heightPOS)+(currentPosition/100)+0.049],{duration: 1.0});
	}else{		
	_translate([myBench.KEY1_SLIDING], [valPos,0,(currentPosition/100)],{duration: 1.0});
	_translate([myBench.BCHPOS], [(sizeConfig[currentSize].depthPOS)+valPos, sizeConfig[currentSize].widthPOS+0, sizeConfig[currentSize].heightPOS+(currentPosition/100)],{duration: 1.0});
	}
});
function compressBase64(base64Data, maxWidth, quality, callback) {
    let img = new Image();
    img.onload = function() {
        let canvas = document.createElement('canvas');
        let scale = maxWidth / img.width;
        canvas.width = maxWidth;
        canvas.height = img.height * scale;
        
        let ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Exporte en JPEG compressé (ex: quality = 0.6)
        let compressedBase64 = canvas.toDataURL('image/jpeg', quality);
        callback(compressedBase64);
    };
    img.src = base64Data;
}
//SAVE
$('#save_b').click(function() {	
	$('#modal1').empty(); //vide la liste
	myConfigResult={'nameOption':[], 'desOption':[],'Contact':{}};
	_camera([2.6582556881878707, -2.381525864717656, 1.1942529072649997], [-0.12663708922735215, -0.0749888077102193, 0.40787874266564916], 0.1, function(err){
		$('#save_b').prop("disabled",true);
	});
	_api.setCameraLookAtEndAnimationCallback(function(err) { // Positionne la caméra pour capture d'écran
        if (!err) {
            _api.getScreenShot(800, 1050, 'image/jpeg', function(err, rawResult) {
                if (!err) {
                    compressBase64(rawResult, 500, 0.8, function(compressedResult) {
                        resultImg = compressedResult;
                        $('#modalImg').attr('src', resultImg);
                        $('#modal1').empty();	
						$('#modal1').append("<label class='optionsTitrResume'>Bench reference</label> <label class='optionsResume'>"+$('#Model_BCH_id').val()+"</label>"); //remplit la liste
						$('input:checked').each(function (){	
							if (this.id=='slidingAll_b' || this.id=='togBtn')
								return;	
							let nameOption;								
							let nameWithDescription;
							if (this.id=='uh1_b'  || this.id=='uh3_b' || this.id=='uh4_b') {
							if (this.id=='uh1_b'){
								nameOption = "UH1"
								nameWithDescription = " 46 to 76 cm height adjustment"
							}else if (this.id=='uh3_b'){
								nameOption = "UH3"
								nameWithDescription = " 56 to 86 cm height adjustment"
							}else{
								nameOption = "UH4"
								nameWithDescription = " 61 to 96 cm height adjustment"
							}
							}else{
								nameWithDescription = this.nextElementSibling.nextElementSibling.textContent
								nameOption = this.nextElementSibling.textContent
							}
							$('#modal1').append("<label class='optionsTitrResume'>"+nameOption+"</label> <label class='optionsResume'>"+nameWithDescription+"</label>"); //remplit la liste	
							myConfigResult.nameOption.push(nameOption);
                            myConfigResult.desOption.push('- ' + nameWithDescription);
						});	
					$('#modalSave').modal('show');
					$('#save_b').prop("disabled",false);
					});
				} else {
            $('#save_b').prop("disabled", false);
        }
	});
});
$('#continue_b').click(function() {	
	$('#modalSave').modal('hide');
	$('#modalConctact').modal('show');
});

function isValidEmail(email){
        return emailPattern.test(email);
    }
function checkContactForm(tabElemClass){
	var email = $('#inputEMail').val();//Récupere les formulaires inscrit
	tabElemClass.each(function (i, v){
		if ((v.required && v.value == '') || (v.value == 'Choose your country zone')) {
			$(this).addClass('is-invalid');
			return;
		}
		$(this).removeClass('is-invalid');			
		myConfigResult.Contact[v.name] = v.value ;
	});
	if ($('#inputSpam').val() != 'IONBENCH') {
		$('#inputSpam').addClass('is-invalid');
		return;
	}
	if (isValidEmail(email)) {
	} else {
		$('#inputEMail').addClass('is-invalid');
		return;
	}
	//a commenter pour bypasser les verification du formulaire
	return true;
}
function genererPDF(){
	const d = new Date();
	let heure = d.getHours(); 
	let minute = d.getMinutes(); 
	let secondes = d.getSeconds(); 
	let date = d.getDate(); 
	let mois = d.getMonth(); 
	let annee = d.getFullYear()-(2000);
	let idTime = annee+''+mois+''+date+''+heure+''+minute+''+secondes
	
	$('#modalConctact').modal('hide');
	$('#modalThank').modal('show');
	
	//generer : pdf 
	var doc = new window.jspdf.jsPDF();	
	doc.addImage(resultImg, "png", 10, 0, 90, 117, undefined, 'FAST');
	doc.setFillColor(255, 255, 255); // Couleur blanche
	doc.rect(10, 0, 90, 23, 'F'); 
	doc.rect(10, 92, 90, 25, 'F');
	doc.setFont("Helvetica", "BoldOblique");
	doc.text('Configuration summary n°'+idTime, 10, 20);
	doc.addImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABzCAYAAAAi0j/jAAA6dklEQVR42uxdz2tUVxS+nIYhCSZRjE5mJj9mJomp2qjVSkGkaCG1dCFauigySFAR6VLERSKFJO2mSSqFgosuumjBVWvEUKlpF9JVCXXnwkVW/QtKV6WU9HXKpNUx/fLNd+/0TjIHLu/Ne++eH/eee+55d865zyVg5VKBynnV75qeMRoPBgPXAR4sA1MHyID5wnWwHDpgfnAb2TP37dlroIA2JuQGeKrPq+kA/lEdjAfrEMaH6xhRZx08SptX48F6g22I1cIAGuDCPYAb4CUGGFkPDzYMphhHhEPjgzfAah8RsvH9HQc8xUdkvJWB7QNhglHAsIWrvm/QEmOjY8jwEbMyaFCMQxmomBbmBfOH8Qi8oD4xQUa1jtW/XXTamh7h35HI5KVvBZ4JZEAIoLC0+0ngot1y4EbDawCn4qrzxlhXJCcosqB8Ah5BJok2z4/zibPZ5utcBAyFVlwXoBN0fLpsLtyspxeVtwCDGOonQSeIYVfuR0Sboe9C9y2wNcBbAdc9ej0O1WONEfFOLXheoWcwfe1DcM8d9SyuD/WNXcAFeAFNfQJk9VQ17qEK1jsst+a947Ef8fpfTWANhner8BcUGnQxvhHAGl3PYmLYGgTnZuBlo2ANOhCAxybzab54CojHVBlEOlYvRbSIBkIT4gMqRg0ZkEj0yrwbNp0HF6knaZVjbJNVmXBkwY8eQf+begsYdNNnbt0jEYOBDT9bXUccrCYMcAN0gYyAhxCeowoSczotC2sMdZzhvU090j2ioEUwAIhgVQEfGpho8BI8OIb2Fmsrq7WtgDx8B3H/3uih++qaA6AJ5SLkhB3N1eN58YTXEXIrYGo9KaMhvGdsEXnJdVsX85n5IDCAEPGhEIwiCu4ujNJnBqSQK1b/OnqUsl5H59UJMUlSzh24RuEh7+M6ehgCnsD1+CxXy/gHNMlEU94YmdSYGEw4ErSkBGg+0ZYA1aPilZGnA2hSRyFWBxolXEc3kqCtAL9cPwE6clsJfPEBvjwBLHg1Th0P4y3xngZWorCpD3q+Yb3r8BHK+hHQEiazMFkSrFwav7oM3tfwdCOGU3M4o8EbEqBQ4JzghbDWxO4M0FtivALB43E+DSGgCTwGPb9OiLYHfeaXjs8cUKFPqP5WcmXVdmH4pWQV3s8pRQy3BoNphPdecCMziq8mmyv8KgNPN6aYJjKoEHf9dQIbNN3IOYFf58P7V14fGf5ji+XZDPFI/0BTbm8bBkaSXmLEUeo/va10WVU++b7V+8o28SBpQhOak0k8YB4R6dY7wDa3LrKUDQD+Y648R+CbgJd4FvMohNHUK1jaAumAKTiItpJBCYWK1foZ8YypeJqeYzSwISMUqc7GIKNFlJVCQEC5Q3k1oJ4JOWB06APiRQ1cA9cgHaHNDeA12oPC9y3ipHd6MdvTNwAswqh2Yl0obFuFTZTXZwe9Q/UBb57Thiyymd0ieoUVZv4gSdIm1BGWJXQ6geQ2322l4JE9U+G9N/g+O8pnn8B5kM98hX8G86vg1evoqVZK0q2SgB3Am9Dx6Dy7yNrKykXUIyGPCDGnb7WrBq6J+6Bj+uGjzR1bJ4IixNcIcgl7Lwk6JwSCAjpC3zPXhcBtJ8jt1Hg9am91xu1kUnzAPULx+Dw3oo6UOkRMCIQMYeT2+yFVrORCgCWoA9onIG09+BbLUid+nUjbsbSBzFxaC2F5hcj3sF93aQAPJhavya88ujfs6puKpEfuA36kugJOIKdgLIVdKgB+/TNfovtpbPKzmI7hQg84JZ1I6XSWttpf4oytf3ZLP1qEv2PiJUhbl0ql1IEDB14rFAofdnd3f57JZG7l8/nLJ0+e7Cf6inP3mYU0ZUsVJADTWEpHIHyo/YRXFYJOyB0EMA7fu1MCWvImcIBesM0RhVctxYjwr18I+I0kbXR0dF9nZ+fD7du3/5BOp68lhuvtxFiVduzY8Vl7e/tKNpu9fvbs2dTz+Ilwr/p1wSLZc74JcYNFEnrShOfA3r17D7e1ta309fWdv3jxYov7FywtLdmJEyd6u7q67u/cufPWzMxMi/MJBz/9Pt/1wf1rHdOLn7RNLc72ffTgzIWvH7W6JkgwOzvfMrr/0LVifvhmoTC04VIsDM1n0rmJgb7C9aNHXr1wcPTQ66dPnykuLn7T4prQiJ8d8w6HDh4p/ZcODRaKRRcIxsfHtyWwPDAw8O65c+e2JccriWd1pVAoXB4eHi4dP358t0sgudfZ0dHxcHBwsOQw4Ojo8a+WrX/u20svvH/3Vze5sOpu/FXulsu2qXs/Dt78bqhGV9KUCHrhTwJve6jD+1gWm5v7ODVUHHmSSfeu9uzOPl3S6/9OjFVSesulcp7t6fu9vzf/81BxzxeHXz56+o2xt9qRLExGgbhPvwkR2oSuCLFFIk1lfzSeX8zDyMj+2z3pXEV3qo6ZdPYYoF1zm+dyufPJq+Cd6elpGxsby6ZSqV8ymcx7PT09l3bt2jXf2tr6+NSpU90ugVcSSK4tX716tVXeITg/9+BNu7Hwm5u8s/p3WSgfK8arbereT+98+agdChc+mdTCPV9dfM3ac3PzqcTAPMmUFSmXlN5EmXJr5+VjunIsn1fKmrEql8ozu9cM2R/9vYXHL468dGFiYrJ1i33mK5ac2f9V7pE9+26XdaKiQxV9WiuZYyFor6ysWLJG9Sd71xvT5BHG8V2pBBxDZE1BKNgWePtH/tRKoSggNhuLBLRrcFmMBrcYkdkAIjNaixUqEzeV7INodLgPuC3GzI61VcEPhhmDi0rclJHFD4vhw5IZsw+LMcZkz+u4cC8vcLsebcqyN3nycndv7457r7/+7rnnueeSSqWyC2mbzZaWkJAw0djYuERIt7a2ykB/9aC8vLxYSDc0NMgA4H7csGEDz9x4gmfgFgIpdMfBaxGAVmrXlS1R8kVgrJPMsEjsg9ZjXmBYmknASkVgI2VPSPA8aVoxc35WpvbG+kqbNua/fzGdHkCruGd9llDG3LYAWDAHJueFaG5N/vilWsNx0MDIyAgHjOpebW2tHgHW4sWLn6jVajso2atB+e4B9jVcXV2diAAOmNdFG1xztEOmxt03fk1a5PI9A2BCjEoMXJAW5M0jwT4KQzQqE34Gw0SiIRq9CQF9dBtS3zDAkgKTYopJIcaFlaFfSuwZkGmghcoy0rMemVdZjAwnkzKd6R6Fzy6Ufob8LGJY0h86NE/SrOFo+/bt2wJg3ampqTEKaQGwYmNj/4S8DgCqAVCy+xwORyL+OVgSXgQlvG2O7xZ5qdN+/Zc07uDlFzEuMUAhAEN5yd6AjznMF0jkw3yR9V6EfNaQXVLAUuCANC2Nl2NlkucVOIBNTVRVhnpsTelaJcV2PnWIqvBHPSZ/ZgG0TeURwbQkxEBKNCcQwwpD2+Pj4xyA0lewO/getiR83NbWFu90OuVQ9g0o4beg53fu3CkDwLoHdlk5IR3Wh+SLu7/FyQ76noqWgi4MuOBvoWxpp/8EAZUpzwInMxdyPrtPVbgj4kgBC00qnB1hOggkCpEeSyoK6RISLQ1AX9a/bVt9RPwJCeXUPquk908CAAaGTwR4WnbN7jlCHiu0JBTPKySIYZFXNqEYv4L+ygFsarC3t1eGAGvv3r3xk0p2NeiwxkpKSlRCWq/XV4B5wwiUy2eqlyo6zNLOQF+MSwpYiF1xLt/z7OODVpr4a6SXH063A4IwGGbS9QcJmDUgwJLSdlyhDuW4IBBC5UhpjwALKxfrvJTpL4qLrWXkMWV3qKVgXwwuYgxh44mMi75e2nGhyKMYKylgKaV6T4pdQvq85ubmOACp4fT09A83b96cBOYMLrfbLRfKurq6OK1W+77JZKoqKytLAfC6A+UbZ51vNOb6/InrabFu31iMCwMrTJI6A8dYT2tAEgY2RUwzCXudwLAwwJpFuV5QYNqfn2faMZOAbqolW8ufhvuYsDMoVb5L61SvyL40n/8Tu1kJPcthdSsh1MngLiXNZ/BTZAoFhwOWdF5gu4QhRs0m5RcVFeUIu4GgUG8FnVX89OcLCwsLANRGwF2ngzlqDl7OnxxKf6PDf5E76Hs2yapeytu/e7zUG9i14/J9+XxE1IiEIWB42ybrJYi7hGj5h+4gwIhe2jc5ckhjWVdXF1eQb6rIzFDfwgEKsS5Ur9DO8jTVU4ejTsHw3pjfE0N9zBFqKJaODHMgXGNFb9aA5hW6I0kFwGIbX/KzwKJUgomDAFwATCdAd9UEJgz7YQk4AGA1Dgxsa1VVlSyE7ye5gx/4RpVJh/3Flt5h/fm7E3MC1QILGEFbH/tpm1LAkoIViMCa3t2IAIvcVmlpeSLYX93EAUuJ7tj2ttlcVBklYz/nsi5K3XS4KHE1mnNphhgWmldoFxnfJYzEu/T7/ZzFYjECODmTk5P3AXDtA8t2++7duxOjLcxXJI735RboREOGozhgiY37EGABw6Lpy2qzpQiY2XOYrFO7QtNMHrJUGmfM/1e0+DjO/4UAS2QoioPWvwKsBTVWEQ3z9c75H1JyTw5VxHu+dyo/CfYs8wb7lx0J9CeDKI9e7QEDViffM1S59uxwyujEH1wkWZb1zHDyis+uVSd1+t1gc/blMm+gX9EVPJd42L9fe3yo2tJ7Q3F34glH28bMOizcnOEfwLIDw6KgzKDUPCoHndYD+Dxm4iDWYWRr+K75DPN14MCBuBKL1ajjDVt1vLFDx688p8s19gli1Oefgt3JVrNptd1aUqq+cOFrWSTDfHV3fyqvKF+fp9Xk7jLo8z9/1S9eEINXzxu3QJ+0Z86clUUqzJfg71lWtk5lNhVt1Gpy2gy6vFN8jqGPz9X36XWGc3qdsQPyt1pWl5jr6+uXhPqdkuqwkIgt3QOBIFdZaVOtXJlfB2PiBulD786gzzsGc2W7tXiNyeVyx0dzmC9OkI+vPpTtCf6s3hN4MKO0BH9SkOqYLW/f4EO55vhgDYCRDxT7T5BxqthsQmz39RqYWbzuGRhI677m2NQ/IqM+aROu5iv3uRb8f5KK8pUD56XRxBRvwBvrHvgd7xf0RbQBIXP7noJf5bd8z/WKJv8o1h6dDgvtCioxGo8YFq0eAxTrV1ORK88MO0VGQ/5p1nP5GxoaufK16/icbN3RjOVZj6DeF0ihO9su5fJU1bOsTM0dPtfQ8pbtbWVTUwsXiivPoUOHk9vbParZxOPpkG2qtXOF+auqVmRqboGf5XNR3zA3Jyj7C/p0M1ubu72x8aO5AIL7m71rgc6qutKLf9KYyWQopjT8eT9IQghJyIsYILxCeEVeAiIqRQapMpRGShFdEARERB4WH7UIFDFllFK0moRXgEgwBEWKiJFSFwsd61hrqeO4WCwWi5XV2TfJNvvku/ee/+QS1Bn/tfa6/733vO+5391nn/3oqN5SQ0ODb9ptt4fTWM1NjE9uiImMvxRpZ14lyHr2sdHxHxJgbCoaOKRg4oTJRtGRWA+LSZFlEcVGxxWRMvFo6nsNPZeLdiZf/J/GqInko+cIwFaNGDEqjuZth+RrHnZuA0O/fhtfT242dl7SSuUq0bUKU2W7+/a9E0TeHsb/8/LqMy0vfyWAFAAXA4RIf8Oy6saYdTVTfrLnXSMPBV2WVIZSu69yv0Rfmil0+e7arKcPZ9+wvPosXReAKdujmilxW7uu3F2TuqE2++2//l0ztghYaOvFHNbkVFOl2/i4pFqpIc//GcDoi76ho1+yY8eO+QYVDU2j3clt9LW+omrWq33gc9kOppiouM+J61l5883jupt+kRMTem5nFQ+k6CtJiT2TCRSfsUCUXz5hpylIWAjQkQDiHHnPmDZr1uwgkxfP7f/IkaO7UlsejImOvyD6L+WKYDPKYyXoKs2TPXl5BQOOHj0q69bbEqpWEaw4SuMfe4bLV8eHjtBG+dziv6Sy1w0vHhHuSc6m74O5lX6/jUeSFfBAqjDxJd1zw0H/v67c8wqZ/DTZcVLIybSnSoW7IVvGpn9dsfvlQZvr/YHqw1D+UMp71alPxPF9csOyqk8ZHFWDbya8xv995VUXY9bWzDv1X/+j3X5GxVHxAokloYki4b33zgklwfv5dhOeJyOb6izS64zheXn5smD6ys6Pjoz9wl5xFQBXHm3TU1vP5eTklZqYhyQl9Gxe7jhQ88vN5XObhDkTtk8BCCt/yg4C0nADvStoZ+O7Z315eTcNJQuDMw42obINeFTzMDd4OTU1bd2iRQ+EBiR05/JYPECk1K+aegmQcnheIn1cbOLp3Jz8XA9mPKZxQfWAlb/xcDKDijwKsKkIRLfl9Q8+80Wv2T+UuKJPLBDgFx7NfqB8vgbAIECLlmVVn8SuOzg4EB0Vyh9GZTYpZWI74NwhPeThNpLvsGd+UvVuMLRFo4fFSzcJWDKv7qFmZ+UN5uWZk24XyZsmmQaGmDhxkj8hLkkAAapP8D2NBj6kiaJNAuK2yu+772fBOn0fBiysFxVukQQ4adofF5twqm/f3BhjXTD6kdqIBeyLCWDwOTCno9GZcxvPnokptYWFA/1ubUNNdwfQdBsrzgPlMJcW/8WAwoEjAzR7M7fTVcFKr53MgAXUpvVeEcgShYTWk0iP6xJzSbC8siWDNEsqLdC6mLLh4Hgd2lP6MKImAGHDuvE+Ktd2W7nncTeuATTdI4SSn5BhBWqfR+WFWDKJ1ryq0J3lEZGxVwYOHJRs8gUs6FeYYMme4AXSE37Z0WyIQesfJOPZsGPHTsflmAQsJ9Mkv+aaaIsWJGgZd4qAobuJnO/HP/73oMSE5E2syGtKfk27mEhueDo3t1+UZpcQ+m30jJDAmoJA6wLNj9zOiO4d4E4gclgupOWwotbsL/Wx14eAgKASuaklAQEHCeWrLiWtPzAY26NyWJS+yQgoqX4kTT46WkvWqMf2zcIxYsCSQndhM8iA5Y9lxVGfjoYPHxFDS5ntcunHMitpmxgfl3iKXNRyPi2NpaVRIoGVs0KqniuAvC7XyKHhg2Vl86EdCFhcN/eTz7lt4D8M2wz5JQdG5/Rc6PlU3377nS6csjRJ+XkQyfYetx0rQ6DHtqFsi5bTx4cOHR4BY4VCd7Al5CNwpHLMYNwswmdNnm/Plo6+OVzDjXqIywgJjQGLAaXCrRxyrZxKu2wXugiuKjDQspUZubSj7fi9ZVUfDdh8JMqJ/WQOi/Ma0xINZwbL1crPs54+lKC0B2VYsCxh6puZs4Jonj1lz6OX90FSG9hFQuzPECyQMjOy5gYKVpZKAO1q7RBtcgYnlJF8aRFNcuQ0Ihz+t8pp8nL7jXSblxZgaYGQ28MvGRiOY1pW/5A2mpa1AS3v5gRinpSZkT0jEpaB2uUxktonHHsBRPSR2knL9SA7wBJyMqgPl/UAWOo9FcyhrJSevZ6+TmG+MFPggMUyLKTxFW+FkF7VYQfZE3ovXVZ9jjw/PE40/ubtb2bcW/lO8uiKN7K+v3LvxK4r92z43kNVH7uBnhTch63YXXnLf7wVZNu2cuaw9ODHgn3yrNrww9V7HyQZ3Hi6PjZ6bc0cqmMXL3N1wPv9R/a8oDF+hmWL335Sy90lyZXZAQlcT4hPqp8wYVJIoF+23r37zEZBMdZlqQYQF7aHdIrmFuQXFjz4wOLu/QsHhuTlFgQ/8MCDEf3yCgt7pfReQGmORLUotSLYqZzD+TGjxnS3AwbmsNQlNJPykovyEj5KSe69jmhij4joktTk3uMtXTSq532Ue+HLSx+DT8aNnRDh9nEeNHBwMi2PPrfhpECQbqlZ0LLxCOk6LaSPzuCyefcl3//zRUnjbh6fnZ7WZ2KvlPQNxLWcQ7ASICzUHzIy+s60l2FJwbr70s/64JEckXTC0idZY0T/J6Ymp60kuWUjldPkh48hzgHi9rJMYh0aRL6CRB44LHvZVdRjNbO7ACeCu2wERJ/+cPW+e27f9Tb4IJdU8vyxbqS0uTBoqaWzhaoFEnCsXcjYtTWTsOMqh4WCc/V/MOlg9Vi9744d73xsC36ZT72W9S8rdh/kfE5kLYmznzmcxv1zEbojgXDWzWEffp3pyC/teZI1JAVq0Dx48FB/dFTsJ4o3VKSmhITknYOKhmTs21ejDV21atXqoJzsvCJ6GU86c2ys3Jq6xm2XkNukkY81kQrHmqm33hZu17ZbJ08No/sLadfzkgrwSAQADzr1raHhDR+pWuxs883v3K8E0sPKyc4vIu46yG3ZO2/uT0MzM7NnxEQnfKxbbpOs7aMxY3hJBruEGopuomXsVuLSouxw4M7bp4f26tV7TjSpMwjApCO2p2fP1I3mAYvxCKT5gdDd3kUy7xLir2hLfSgthT5CT6XqkopUCGpTnzwUYyKUi1t/IM3yJd9WNpMKOCHLd5+ev/tMMJRd3rJLSATtkvnJwPt8zjN1WtfCU3/7h2DS3doG8i5RZhci0pRfp9fDYnZcck9wTcpnpKIpphXC0Yz0rCdpx7FroM/eetEllyHr5qUbpZlDPuONI/UQgHSLjUl8hblE2R9ub3Rk/OdFRUPiIDMDFowTyLGupKb2nrn52S2uOj9LlzzkI9vKUurPRQH8bcRcGnE8ax5ba+sfnz4Eg7/aEYxQn4lUUSGOZfVtt90RajJWw4aNiCP9sBM6QXxaK6CC4ijMKTU/gdXi++9/QPsMB/QvKiYOEnXJxLKTlFE/mzB+Isyxzv8hYMFSjsgRsCIfq5neltZ+2z/s4d0Hh2+tD++Ip8cBm+qjLNCCtrWrk9oxRQdYRNA+39Kqi+lPvJYfqO+lW178Qxgpwr5h7VZiWyzhu6WQWt34s72Nwc4yLLGrJ4+gdIn2gQwqmAeWWmf6ZuUU6zZfRowYSdxV3AVUCm1bhpD5yGIvnilLS8d2JU7rhAAs4ExSUtJWOu0Son4Zjx9zRL3L33vvvUDb5iOF0TmSI5XPgQGHzGUKbbTuSaaW/DKPjwRO2SayPniosbExIMeBoMDd76YoApZ64mDe75lkT33SMw/eNWNmCCqOynmjto3Cy+3cv3dfUKA7denpGTOjaBzc1EayMvoWQ986x8hZz2Ghx1EErN//8VMfvbz1Ij2AQvBDVR9lPHk4woudWPqTh1KJi7sg2gN6W7Rcq37i9XNKWaiHhWoJtPRc/c4nXxgNau8NtYUETFcl5yeVYn10jxRcFW5S7BKC5nNkhOSc+J4wtVDuwRedr6HyIS1/yEB66t69e32OY9s7czbXYVeuxV2ROUcFlbmF7rVQRDPxOV+zPTLRUqzBps9yGfshOX4LsQMswWnKsWFu6H3iGkJNXo7bp90ZQjK24yrXR6TuYC5on2/cuAlxkTQe8BzE0Qq9dv/CRUFeTOWeeOKpIEvmaW2EtBwfp6Mgur5+/XofApZ9f6KJWyopGZlgggmkYuOjsW0QcxC84mZm9F18nYyesUCpOKoCkFQcVfPlbaxLIpu/y5QGlltsBtNj9f5p3lCYPaLume+m00XysS/znjkSLjNSuhah+xIQ2nMkoKvDttbHmLg75iMtcRuBqxRAmvLEoRJH4+cIBqEY/o/+rFCjHDTZificQQC4MwKbL/v3L8q2G9ff/XaXj3YGqxVvlbIcfgm4LnFfqZPbrJyD5rXaLwStpn55BUVOS0Lps172NYUE/Pr5g+cZfTLnic0N0IYnY2kps2WuY5bgwtryEDEwDC8e6TcO3IFtNTd+Vp6/2kYS+lcYmsqwMH8ulyUAS6o4bLPP2vnO1FDTHdUNoNPxa2vuIFBy3IELXVF9evrvTobotOyRsO2TX3yrKwnGPxV1AJGBNYOE6y4h95GcFZ6VFZl43aTdzK1ubSHO8w7XJaG0x5MgIwn0e/hcpoGy4B7ZG9YvXLgouH0fhg4pDo2Nib8gZUNoKwg6UHxEkOU0DE58RFs1LlfJl9wzbbGdWoOoE4yGhw0bnt+RgBRpaen5rPDJ5crlOe2kHQRuLzFluxI+S26A+KMtrmyNEyB0RsgwVGsQfRHn2dl5s/Tl4bs3auSYQrFhAh9S2uGswT54dxmt97uOgMVg5cphhZNwucsSBjcmJSzYQoPoyFrH+N1W7t0gQBSUUCMe3TefC5GAJeVpcilJgFobWN3IecWuO7AS5HxqhKF7ZB4ErFYS4EXczir6P9/fTNHzrf/y3DoS+DxEAvBn6LiHNKAvCC1r3D0UMpmszOzx7SfItGl3ptH9JgYXxdYO9XPAuFrsasK5Wganl2lk3mg2Q6m047C4fSKqEB+v0L0YPeeO/ydNmpJqCc/92FcG18Pt85BvscaWNDgWlgoHCavTvXpfNU8jAUs8K7Ep0Cc9Y6zJGPFv2JDiZAlY/Bz5Wu9efWo1YGTUH01mXBJqwnxVtH+hybi5ks1vYLlF/5PWHcrXIK1ROC7y/FDqZrJDNn3qVisvCRGAOZp1Lac3IAasFS4cFgHWnns4rWuYLz76o9lbQ0CRaqzt9VGjxnRLT8+cYcUiVF863FkiMKjesmWrUnZycupIdtms01RH0JLtx5iKCE5f5YdNB26jpQf0/HPPB2sUR6XA+0qPHlExer/keO2WWyzAirkqgVUFbQIskee5554Lo52zz5zMXIhTPbdy5aoQUz/3HoJwAIelAimTtWucOV7PzWHdxUOHJ/t7gKhBAtZhD/7xHPqLGfSKo8hpoWkO/UjwfETKcSTgWULpXx3/sNu1DPNVvK0h1U1pkwTzO2R+agtounMbjQGLfgBYUCYAVoBhvoR7Ge3kRhrQf1AScVvnYHdRdRVycfz4iYqCZkpKr+k6HSlq23WhSCIShH9GukBhWsDiowAsIy4ZAQuJAEvmKftpmZ/G+CKOLwf8SK79Job58vdgwDIP88WAJcAQAAvaa+Aby1OYL3vA4iPKsF774HMfuWY50cJhYXpLoF37wd9Cr2WYr7CHqyOo7CtchwAJXuJVO8uwXgHyymHBODExYAUY5guNn80jCZEx8Qx86dTlYd++OYqMr1dK2kxqDyzZhGeFJtppvHp9KO6qtUFAzuPkxokFWLwDBmYiFmD5/VExRrIhuSQkwGopl0nRDzt8+vRpH6enj0kcgf5ludMpN0XIs+mub2qYLwYsU9mYACwuCwDLoJ/YD/MwX+bGz0x1H/zVR+Yq9V0gXdsO3PZTf+56LcN8FW2uV9uIO4Vi0mhtCRmwOhTmy2RJqNd0F0EoOhhObNbMuyPoBfzSzbA2Kyt3viw7LdUCuShH20FSflww6ZbJyfRyJ99Cx/ZE11uJz+X9KZCO0xC1nsvrU5iCwL0MuP9tOWfAMgjzhRxWBLpZsYgUOE9aDgw5/Y/vvicqJkr1Hir/07M9+E0N84UcFpan4bBkmQhY5jFFvYf5UvWwpJ6TRfaa7rS1v8fGywE7t2vK+GVt1rXUyUj8xYGRWJfcmdu91UVxFDYHmMMy+AFgifKAwzIJ88Uclpdw4rTNfF6UC7t45Et8nZI+LrGUJx+nlUs0MgR+6OsO88UcFno3hSWhkWLr5Mm3plqcHfddpWa9sNMNRxuCOP2vt/w6zPIJhV5E2WQm4QzpTwV/E8N8MWCZ+mKXgCXnEhMDlnnfvIf5QqE7aqwDYJHS5QYQ0Iv8PR7bP+9aBowIJyVPMNMR5+Q4UDFZkEJ3BFbmsMzboQIWeHag/wxYnRTmy+FH5Z9xeLF5CbVJNZuZlhGpmv0Irfpm/Z2arznMFwMW7H7SNQAsk/GiJXqE5S9MKqRKsgDr2NGjQZze0qQnGdb7AFgWtSjpXh48aGjqNy7MFywJ8acDLFQsloClf5adoAEPgMXg42qaQ0qhs504LCLLROX47S8dD74WM3z+7sYQsvn7sMUfO6pRWNdj1u0fK/vVxmGh+gFRBzksCViiDWodDFidGuZLntTVHfGRic3Hbe6BUSm1Z8+UDTLPkMHDwmjp84WchBKwLJu7EcNHRV0rlOqdlp5NS7gS8j1VEtmOrOuxsfGFVhAHG8DiPok2wpJQ8wPbzlbAEsJkHjfksPiDQEbP0gWzKtdhEyb4fX1hvoi8AFYxAZYoTz4DBqyvK8wXABYdVULAynzqcCrJsa44a7q/2hS95kCpvhP6bdyIR/fP7MJO/2wc7AWR+5fCZ+sigMNSjZ8lGDNgGf0QsIBgSeg9zJf+nIyHcy1/TgxUdlvvWVk55TJfRcV2H+3MHVTTKW0i5cDea/743lnDSN54f9zY8eFWZBjB0UlqNYdJ3eqi6c5gRQRLQu3cQg6rBbCUfos6WjgsFbBIsD6XhfKyHQxYpF7yyZjRY8M1c9vg5znMF5FHwGLuXI6TAKzrGOZL79NdlcsgYD3/9p997E3BSR2CdhIbp+18O8xAsxfSFW9t8FvcFSp/MjX7Va9de/RPyqTgXUIim34FDFg+F8AC20Q+txRHOyfMF/4osIPlLnmf2CmSJI2EJ4EtYXpmGbdFEk98i8siJ3v5XpZ37757xkfRZBYryymsr4kcFZbaAZaSTs13hVQzEkw1yCWHZR8eyx6wKHpMMgHWVdEG8CJBvrfWFReP8HnRdH/zzbfIjc0xogY3CiTMF6g1mIwVxZeMozKa+6vMLRC6X/8wX2j8jK6DbcN8kTb7HE5vr6BZaRkmbxu0+fXgjjQ+55d1oeQccI8EKwxYYdks7p3OeRCwuE+dwGGJvgrAIvndvnnXI8wX7XZ1j4tLfCGSLevR7IXpyvhxE8CFCxnFxliRcZzCdflbDIzPkA6Xv6Mih6zMnBKrfj94tJQAkXh22dLlIQ4yLIj0wrK5AQOK0jvSLglYDKByycOAJecsxUEMao0DyXnAAqDFi2rB9I5GKydniN1Io34nWTIcoU0RhRLomkW0eVKxcMH9we5hvkBx1NiWlwKw+qmvV4gwRBhzWNc7zBdyWPBiu4b5Gri5viupE4gApI46UtvufvXtUBPfzzf/piGcbPJe6aKAIMrMblhedX7KiycULg70sER60HTXmAjBNQAsBK349QcWBxbmi70iBBbmi+MFkueAJJqo89sURtE4Wl6niX7yntn3BkOfWnS4ngEt9XZ2hMTBHc/L65ekWbrDkUyCSiz3Ne3sIgGwiAOb377fAFgRuKPZv//AdAMjepBhtZWHHFYDC91FGdl980qtYKMQwkvkJZ2yS+TaZ7olqDcJiTVhwi1daY68LA3aJTfKbezTO3NBYGG+ALCMghHTXGXAgrBkzGF9K8N8dX9074Iu6LQPPI6GLKs+Hb2mZvTyQ38KcgOFcb95MyR2Tc0k8hF/Hjkj1X7Qqtf/2P6Z5mG+ELBMwmFRwI3FUK4CWDWLAw3zxZORvElW0v8dQBEtR+KEdvVMTH2DlCs/VWwIbUNgMUWzK5BZTv2iYKkJHH9QtA38kZMM6gIJzmdPmXxrqA6oKKhodwKh1TZhyMDzBMl+zt31o5ldOxLmq2jAoHTdSyIJAAttCe0Ayyc8XASRx9EatK2LAaJntWPAgEGpakBUPJaV3RdMoetLiKtqxLLQpTTprXXThvnyrjjqswCrJYCus2nOtzLM14jn68NuIDCC5aA9NVk+tMhV8uzBWxrS9pz9S4hVTvX7n4X021iXceMje+fR/VNdKB0AlConYs7tSGnFsWDDMF8AWKYW8zeu2jtPbRsClkGYLwYtrfmKougpQAUcAgqiSd44deq0MKc+HTv2po/cqSyyDZ6AQRKaLIAhr5fl/cin+7ZtFRbQNMtU1q5dG5GdnTuUgOpx0ln6CDg/eYyQhtk50wzCfAFgmaoEIGBJgl1CeFcsdz3ENV6k9mvjMVqh4Sl4xAsU97CUPLb6Gxpaynzppd+HFQ0cnJXZp+88Uh+pp/Qc/h/KE9REwS+mGYT5AsAycaApOCwALBa6f2vDfPXacKjAV64N1MAkObHL9P+ideR0AFKgR1XZajtY/XnOr+rSOhTmC701+EzoxlW7tYAVYJgvcR7tQjFSfiDZfpmfAUGa11ymZcxQXX/uuuvfQugLf1ABQwiWgS5eWmVTX0a20FW/LWiii10mCoBQsXXrNvMwX8BhYV63a+2F7jJIBgrd1fJJU9+X3jtjAXjKwGWZoirSmp7H6oo6PuCuWQ1I0sqxzZw5K8gszBcDFo4DEi4JqTyxMYFC929tmK+Tn170xa7dP9vytqkPUuqd/qm86koSBW3lNpiG+WLA4rTmgLVnnsGSUBPmKwZJf1+fj0xPMvpklW3e/OuA+jR61Jg44p7eh3p1beH+4LlrxBwSLp8aNGhIeAfCfGmWhPoXhNUa0E4OdgltX7ji4pJg4oy2uwcT0UdaxnFV8slNicbioSUQAVoX5osBy9Cez4cclr1pTieE+RIJDTgsFKLrQ9XP+P1JX/y6A/O6LH31KnBV8F8HapieQJODqF6OWL1vZv7TddAeXZgvyeFRSK4TnNYTYC3BpapehoUvN77gYmLr5FX4/zIJvMtKSko0E0q9npbWJ4uWOx8agahqb8ZH+/h7bWB1ZvTI0iTdOEtbQuVowmHhPSl0twVUXBJiefPLFoSSj/dXEKz4qAF3IPtnS7LD92lJmSDbAoAlxyYgDktvqG2wJNS6RDLwFuFWkLQlrAPAQp/uetbvrpfe8cWsrZlBipxfsicHjMSDwCU17N3iG5JL5otx6w4Ib55AqOmO9bA2+mkDo1TlaAEWl4V9kYBFP5RhOVA0ynq0hB5GrRh8udn5Jb/bsStgAauk/LyCVIpreAplKuo5tl3LOfKO46kRI0YlB+KZgABBcFjof0vKsEyepYsMS3BYbwTpPva33npbGAWM2PLV8jBCD0wuMjnoI22wnMzum5Nk2waUYSE46jksLBMBC9reAlgZh/VLPn09HQAs3CVEQsByEpz94dP/9qU/+VpuCAnPVdBjEHIGLGiDyEvlnUhcfyD3uRMfB2QRj7aEavkEOqc1ZcD/wJeEqNaQDIBlSoqAvj1gkTA88VzvtMwFs2bN7qrhpOA6xioc0o2UIDdanjQ1kYSdwITztP2noKIU4HTb4EHFEEEJ2gKA5S5013CRcM8EsHT6Sz+aPiOIlF5nWw7+eGxgHNwJlHwtTxLkdHEbASKEhddougNp/GHBmKHQHctkwHLCFA8BVQNzT1qwsS6VVQXs6dUKU0WwoduOhZFi6fygpVUfN5eBNn2S45JKp7JeihtYTQFY9y+c+OIbYSbKZ7TTGEplXHXqU/gjexmwjH/kHnqey3gxYEljWwKsXq3Rhy05FlEPQRFMeJ2vRTK1BT24GB+fdIKiGz+em5NfsmD+z0OvpU1XWdl8300FhSXWLhYrpjKpXAJ4EsUgrHFJJ/Jy8sdb0VhM2kKmQzt4HOBI7SDnhemm3i3Y+Dm62ZbQ9hkQYMUDh6X7UYDTOOK2Nlk7gzgGiv0hHQGwpM7cGQqhNX7z5s1BgdkS9mkeIyciwBrbAT1Nn9/fKnRXx565Rwuwaj2YHnmbpCXPv9ktYf3BhQnrD9hS4vqa0o5WXvRsfdcfPrp/Lrl/OWXZHjJIualRWML7kOVVp36wak/Z2O3H+Stj1L+k9TXBxJEtcOpT318entHRQc54ui7bbbwGbHq9UKZ/9tlnfUVFg2fm5hbMz83t1yEiE5x5FJl3OhkJj54yZWrW6NGlXR9++JGgzrbdoq98EOkTFZOW9y7LyZ4DhwDcBKW9QHleJoXTiRRtOLgjc5Y02UucxiMvr6CMFGi7mYExP49Nofn5N5U5lX3TTf2nWeYxpu/Tfff9zDdwwKBkepnX0dL8o6gesWzfiSHa5G4ujSvJ9WpoKT919t33hJpopg8bOrzUbd4MH14S1xFMKCgoDCOt/TIY91YaOrR4SqcaPWsEb51uaf38qQ+CKMZgBgnM55Ky6RbSkK8NJq+lZG94irioE997qLKWOLJNdG9Oyi8OZTx34j9b2vbN//m8pTE3Dvdet3k5jY1nfGNLx/ktTikludcqS+BM0WXq6cU8aRHtStaSILYipWevRTf1Kywmp3fhJuPgoR+d/mz1deP1FcseDu2XXzCYNg4WkR3nC7QErbXGyQrfT4L0euJcK60I0QRSU2jXMeZazZlvybg6N+badhzlOl7S1Z2/4Ks7/7eg1z+44Gv8y9+15Zm6lzXIbw4S5qDhMz03r9s8jZd63nrzuI+2/30N9Ud9x+obfAZugQ3nmrmDONO5Yla+eTk0RgpB2QZ99j6+3p+TcR59f/DEQE8C85g3lMl7mC/vbfZ5qxv/63fesG0mUYTMgAbveQQ4n9dYl54BxTuQ+Ez/e32pvYBe56XxPo7mqzbzthoAAKbRp8P0JlvLmrTQYT3p0+nGw4A85MEx64z6zHZozOv15rPcvF36Oas3Gjc5Grw3cAykz6bl6v6b9BvuG85THbC7ka7Nmgr1BXYMzPDc+8vj/aXRcUFeyVyfq/PB0vuHRQ8aBuXCdS8gan6unwPm818PdiagYDKPDcr00G8kA3m4AVAZhvki52RZpNC38zv6jr6j70hHtGGwM7NP9pprGuZL/5MuRoaMpO1WqeeC1ANI3JNHvIbkVL5znZjG4L9j+4A85pFpNOea8cJrmnq0R6e6zPqo75emTrhnlh/z6cvF8dPkhfumfdbMczhq0mmva/oI9yGdwZhHW2QZrp/ysNvqTUBHri5GyogbqvOw9tcwDYZiUq+jR0Qsi+uHfJAf2gLeFsV17ANfx2ucX5Sj1AXttR+rGOgjXCOCNtqOI+RzKRP6rStLOyYwJ1z7L/JDfdB3lzQxUC+Op8vYY5s0z9d2DuER65BtgXqQZF5oK4wHke654VjhOLuMP5H+3eZ00HeyhDjVCSHedAIyBqwhI/HBy8ZL5UDbDohr2HHprwknnuLaV/zn6/BSUXkiL1/n/OK+LAdfaHR9IsuUDwvjslEdmofPbYCJyuVju/m/Un6kmHgOaaQtoQuocTtdxgrabDthpSkJlCvycRpsAwKcSuBB1RkYItU+QXthPGAOtlEknEN+aAN+2EXd0H5slzp+Sp+ZoEzIZwuMkA7fNWgPH+G5w9xmwPLGWeF9/U0GLLa4Fy+b6hhMOoxjAtspe3ciwnSD03B+UQaaLnA6cP0q2ikiAiNJg1Tsw1d9Vl4+UT/fU/oFdnNwjQGPr+GR83BdMJ7iOnhEkPXIsWUQgzphDMSR61LHxe7ZRGM7+Yj9ByNoeN44t+Q5zkPML/uJ7RAvJ4w75I+2KU/Ui2XzPIb2KC+25HCwbtlPHEt0CAh1OZQngReeHV8jMmhPdLs2AIflZZVnrmDJgOVo0IoTgoECCB+uSn4oT1Mnluc+UeXkUScfpPfblqUFJewLl4V58CV0HDeHDwCAN/RBXtO7o8EycPLi2OOzl+AM/XJqD7RbPYqPmputIt2X6RFQcfztQBzmBHwo+AMKaUQ7ZV+gj/hBkpxppMrl4Ngo4yuuu80ZHBcXD7KYBp831AMc1vXWjPcVkdBd4STA6b+yzgWn/ZxHcCwuXx2Zhsj2GpZDBByW4NZUVp7bJqkH9AnTyDItwjJkPzAffumgb34+h/HgMYS2wVjJrzaWK9LxWGE9Mj+2HZbHmBafuc0HQ7ZDbR+2idMobRZ1OtUj28nXII/9uOPYM1CIa+jfC+az2jabMVblYCItp1FWJ9BvsQSXdcFz0Mx3dYxEndBnWbeoT6ZLEUJ3j8qn5lrLFC4qgVxkLOgsyhLU9zv6jv4f0v+Vd4AcQy7IyspeQIbpM7xaM8B9BCxzsxuDNNpyTfJh/eZ1a0xqPAd/1JdjbjKjy2veB317r7+Bsvc834K6vxurjo2LOWCZg4++Mz1X7V34g6VVl35QXtlM4eIIBPfhPx6XElH5/uXVZwf/qq67FzD6OtN4ByzvhtpeXjjTZYFeI1xfh4nNpnk5+L+jtpcJq/bdQ+/AxfDy6kvuVAXHQO7fSO7DiS5FLNt9vuCpw1Hf0LFyu4aN8KCmD5WYGA5HLt+9hR7WPwhcOkTh2jRU9tJmutz38UPJ0B7Ni2H+39ycQ1eOKZeouQb3PfQJyDydd3MwL+UjXX/zrMgVu5++sbz6Hzcu7SSi+X9jedX/tnc9r20cURiGkEMJISSp5dqKcZxEkn9EDSbIspM0vbU4lBZaTCk+mN4b2lNLsZJKqSTLklNaSHIoJugQTKGmtSytZLk5tin1IU1LSw+9h/wJIQQy2mTIJCPp8fz8olllBz529+3OePbx5ml2PO998rj2IJyrjwH9ZAiBI/kSgXZICANGB1V/WPxj71DamT6acWa4EMrWPojkatHf/r/XWqn0QFoBKR8b88UXl2lew8/g2wLqkBZloffkzhVFDXzW5e8u/7rncGMMZGszLMjUZo7IMTCSr4+v/XcXeF/gHXZoFzuBhAJQvipIh4aKWFcFGaRLDdRkCAKH5PgZDj2YWBbYAREcG2A3uAwN2PU4PBU6fmDi4t3oa5cYuwL0jlhCwOmU7vBgHYBeDDIkfBQ7PBBGcxvvyV+XW0fS1S0ODKVrW0MZeZ5xbny8srUH4TRIU//tRqoTUqkQ+gs7GnqeMPi9OYB3vLCusW1CeH1pc1quY906LO2VBZna1qB77qy+X/x9L9bu+D+lYWcrKLlxgOdQ6yC9X1VuyEVxdy2KCwcSDazfH138ZQzxqYOm+UI4P6SDoKfcgY6YT1bM+h9mto5c9MXL8DN4eM0QX8dcw0qVl+U6006tV5kyuT62T8olHgxmqicRP4jmEf+O/DRf+K0N8LSulXFMfFcfjCxU58ML1SQHItlqMrRQS0YL9Y8uVu8A3p3ya4zPswUMZPSAhp4n0HzhHaVR8I6fkEwS0j9+XQ1+R7zTV2Pg25sDkdzGlw075cAxOQ5CEmP5zblPfrwNvCesM8iuOkLzRVhgI26rsIIcwsYiPNK2IBI3CJtII1rds5BXgaMOrD9YLmw00m2X44ub469eKC3L/VLX98/r+Pn6gYZMyYFzBSVXdSWKjfNgqvLF5+W/dj2vA5t106QIy/vXrgiL2F9sqeOW0EJ95OCF8vfyc67IgvlScV9ivRi85CTP//Tnbi/rquM0X70Xyz88XmsqsUGuX0mUHoayG9Gnf9mKGZHnab62M7N+mWm+mskCyUrx8V4pE/uVPKFfa+cJJWuDxJrEunscSDsnLdar/TRf49/cfKM/WV4JJiurHOhPORKV1YGvnXSq9u9un+aLgeYLkPk0X+3bOXF5M96Xclb6pJ2yIVlePXTJyX9Wuv2KT/Pl03z5NF8+zZdP89VtNF9XrlwTE7HJT0eHo9mOYuS4i3PT75zwab58mq8XSfN19eo1EY9PnUfYKyvefuvcuE/z1cKA8rnCrtDR8D9ufh0Tz+Z8CnCizz1OxU/P+jRfPs3Xi6T5KhQui9Cx4TtNbd+AORbgOnA7ev14bHKua2i+gIbRu+Pzi0uuw9KSkWkJwEyZme3UVbKZCFBCk0mY9RT061OTp2eBgQeAELJDmE1Rf2Rwgw7v6AhhNdo5PQRsm9spBKFdUC+FwpLrsDSbdWHap5FUss1zZiI9Mwlf8+yi8djUHPBOaFlHaL7wi5xwKTxxWG42RcPbB1uRPphynexAb6sZQ0hTueawvFkEVs6VK6ndPY/+95U1cFrNsHQbl9DJXLRrE/pzprz1WFF1JPQxpRwWwzYfZpovfkNSM6zI3zoriQ5DHmh1rq4BtHxGOawzszxOgt6eRW3avAmY0F/aPWiWBTkshM22fQ4YS2D9CemwmO2Kn+aLa1NYPr8kwuHhaCAQjPUGDsUCEr1NoO4bckOmPWfIzXYCPeq6P/aaxNkzbx70wCZOwbC7nDVZn8Ubl0nvRe27cliRyGj0qT0HW9hyUIc5BtQzPfrx2XN11P+OkqvrU1Nnezj0yE/zxW/Uopt26HdZn4UHQl7QGzL5Z6X8Nt1FuuKj+fJAGIjgNiRCznPuHeniJQ2fEerEopmtbY7KNl0puRVOgTrQxU4PLo/NarqpCNp9/igLuNA/E6lOhlO/nH0z7neK5gvfaViGC0+h77wmhI2QjIvXwPj7oO5TslFi829hnBBcF+4ftKUF8wxGRzy6MtuyTFc+zZdP8+XTfFlOXeXTfO3AD/YjqLNxR0WwfG0AAAAASUVORK5CYII=", 
	'png', 138, 10, 60, 24, undefined, 'FAST');//https://www.base64-image.de/
	//adding Bench item detail to the PDF	
	doc.setFont("Helvetica", "Bold");
	doc.text('ionBench Model : ', 10, 100);
	doc.setFont("Helvetica", "Oblique");
	doc.text(($('#Model_BCH_id').val()), 60, 100);
	doc.setFont("Helvetica", "BoldOblique");
	doc.text('Option list :', 10, 115);
	doc.setFont("Helvetica", "Bold");
	doc.setFontSize(11);
	doc.text(myConfigResult.nameOption, 10, 125);
	doc.setFont("Helvetica", "Oblique");
	doc.text(myConfigResult.desOption, 40, 125);
	doc.setFont("Helvetica", "normal");
	doc.setFontSize(10);
	doc.text('Contact Europe :'+'\n'+'Phone : +33 (0) 3 86 65 94 03'+'\n'+'Email : contact@ionbench.com', 20,250);
	doc.text('Contact US :'+'\n'+'Phone : +1 984 317 9236'+'\n'+'Email : contact_us@ionbench.com', 125,250);
	doc.setFontSize(11);
	doc.text('First Name : '+myConfigResult.Contact.FirstName,135,45);
	doc.text('Last Name : '+myConfigResult.Contact.LastName,135,50);
	doc.text('Email : '+myConfigResult.Contact.Email,135,55);
	doc.text('Phone Number : '+myConfigResult.Contact.PhoneNumber,135,60);
	doc.text('Company : '+myConfigResult.Contact.Company,135,65);
	
	let titlePDF = 'ionBench Configuration '+($('#Model_BCH_id').val())+'.pdf';
	//Saving, opening and downloading PDF
	doc.save(titlePDF);
	
	//Envoi email body
	let htmlBody = 'Model: '+($('#Model_BCH_id').val())+' Options: ';
	htmlBody += myConfigResult.nameOption.join(' + ');
	//Config Zoho 
	var request = new XMLHttpRequest();
    var webhookURL = "https://flow.zoho.eu/20112317789/flow/webhook/incoming?zapikey=1001.2484ab9ae886191a0f8f003d88f715b1.548fa36d2f123850045eb1a7d4c90883&isdebug=false";
    var data = {
		"firstname":myConfigResult.Contact.FirstName,
		"name":myConfigResult.Contact.LastName,
		"email":myConfigResult.Contact.Email,
		"phonenumber":myConfigResult.Contact.PhoneNumber,
		"company":myConfigResult.Contact.Company,
		"countryzone":myConfigResult.Contact.CountryZone,
		"message":myConfigResult.Contact.Message,
		"system":myConfigResult.Contact.Instrument,
		"vacuumpump":myConfigResult.Contact.VacuumPump,
		"subject":"ICP-OES Bench Configuration "+idTime,
		"options":htmlBody,
		"photo":resultImg
    };
	var payloadObj = {
    "name":"configurator",
    "data": data
	};
	var payloadString = "payload=" + encodeURIComponent(JSON.stringify(payloadObj));
    request.open("POST", webhookURL, true);
    request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    request.send(payloadString);
}
$('#continue2_b').click(function() {
	if (checkContactForm($('.contactForm1'))){
		$.each(myConfigResult.Contact, function (i, v) { 
			if (v == ""){
				myConfigResult.Contact[i] = "-";
				myConfigResult.Contact.PhoneNumber = "0";
			return;
			}
		});
		genererPDF();
	}
});
