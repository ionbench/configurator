/****************************************************************************************************************************************************************************
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
*																				Do Not Copy 																				*
****************************************************************************************************************************************************************************/

var _api;//Abrevation commande api. pour Sketchfab
var myMaterials; //Liste des couleurs en fonction des textures
var myTextures; //Liste des textures pour l'UV
var currentStyle = 'TRESPA'; //Definit le plan de travail en Mélaminé par défaut
var currentWidth = 190; //Définit la largeur du pdt par défaut
var currentFondWidth = 160; //Définit la largeur de la structure par défaut (pour calcul emplacement options surtout)
var currentElec = 'EU'; //Définit le type de multiprise par défaut
var currentThisStruct = '160_ne78'; //Définit le caisson et la structure par défaut
var currentNe = 'NE78'; //Définit le caisson acoustique par défaut
var resultImg = ''; //Rend vierge la capture d'écran pour les pdf
var myConfigResult; //Liste les champs pour l'envoie par email
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const iframe = document.getElementById('api-frame'); //Recherche l'iframe de Sketchfab
const configurator = new Sketchfab(iframe); //Charge la page pour les boutons
const uid = '07eb343d52a94af28f56087f1b0cbe3a'; //Lien id du Sketchfab
const myBench = {}; //Recherche les composants par nom du 3D

const allStruct = { //Catégorise les structures avec les parties 3D à charger
	"100_ne78":{
		fondID:["FOND_100_NE78","CAISSON_NE78","PORTED_NE78","PORTEG_NE78","CAISSON_NE58_PASSE","CAISSON_NE27_PASSE"],
		defaultOptionEnabled:{},
		optionAvailabled:['scr1_id','hrm_id','opeSafe_id','vpsp_id','odp_id','odk_id','slidepump_id','latsolv_id','armerg_id','pc1_id','cabletray_id'],
		elec: {"width" :0.4,"height":-0.32},
		cablec: {"width" :-0.25,"height":-0.11},
		cablel: {"width" :-0.25,"height":-0.11},
		cabler: {"width" :0,"height":0},
		solv:0,
		pompeD:-0.3,
		pompeG:-0.3,
		trespa:"N"
	},
	"120_ne78":{
		fondID:["FOND_120_NE78","CAISSON_NE78","PORTED_NE78","PORTEG_NE78","CAISSON_NE58_PASSE" ,"CAISSON_NE27_PASSE"],
		optionAvailabled:['scr1_id','opeSafe_id','slidews_id','hrm_id','vpsp_id','odp_id','odk_id','slidepump_id','latsolv_id','armerg_id','pc1_id','cabletray_id'],
		elec: {"width" :0.2,"height":-0.26},
		cablec: {"width" :-0.25,"height":-0.11},
		cablel: {"width" :-0.25,"height":-0.11},
		cabler: {"width" :0,"height":0},
		solv:0,
		pompeD:-0.2,
		pompeG:-0.2,
		trespa:"N"
	},
	"136_ne78":{
		fondID:["FOND_136_NE78","CAISSON_NE78","PORTED_NE78","PORTEG_NE78","CAISSON_NE58_PASSE" ,"CAISSON_NE27_PASSE"],
		optionAvailabled:['scr1_id','opeSafe_id','solv_id','mnfld_id','can10l_id','eleclevel_id','exhfil_id','hrm_id','vpsp_id','odp_id','odk_id','slidepump_id','latsolv_id','armerg_id','pc1_id','cabletray_id'],
		elec: {"width" :0.21,"height":-0.28},
		cablec: {"width" :-0.24,"height":-0.11},
		cablel: {"width" :-0.24,"height":-0.11},
		cabler: {"width" :0,"height":0},
		solv:-0.4,
		pompeD:-0.12,
		pompeG:-0.12,
		trespa:"CC"
	},
	"160_ne78":{
		fondID:["FOND_160_NE78","CAISSON_NE78","PORTED_NE78","PORTEG_NE78","CAISSON_NE58_PASSE" ,"CAISSON_NE27_PASSE"],		
		optionAvailabled:['dr3_id','slidews_id','opeSafe_id','arm1_id','hrm_id','vpsp_id','odp_id','odk_id','slidepump_id','latsolv_id','encleft_id','pc1_id','arm1_id','cabletray_id'],
		elec: {"width" :0,"height":0},
		cablec: {"width" :0,"height":0},
		cablel: {"width" :0,"height":0},
		cabler: {"width" :0,"height":0},
		solv:0,
		pompeD:0,
		pompeG:0,
		trespa:"C"
	}
}
const style = {
	100: ["100_ne78"],//Choisi la structure disponible en fonction de la largeur du plan de travail
	110: ["100_ne78"],
	120: ["100_ne78"],
	130: ["120_ne78"],
	140: ["136_ne78"],
	150: ["136_ne78"],
	160: ["136_ne78"],
	170: ["160_ne78"],
	180: ["160_ne78"],
	190: ["160_ne78"],
	200: ["160_ne78"]
}
const dimWS = {
	100 : {Cm:["W100 x D88"], In:["W39.4 x D34.6"]},
	110 : {Cm:["W110 x D88"], In:["W43.3 x D34.6"]},
	120 : {Cm:["W120 x D88"], In:["W42.2 x D34.6"]},
	130 : {Cm:["W130 x D88"], In:["W51.2 x D34.6"]},
	140 : {Cm:["W140 x D88"], In:["W55.1 x D34.6"]},
	150 : {Cm:["W150 x D88"], In:["W59 x D34.6"]},
	160 : {Cm:["W160 x D88"], In:["W63 x D34.6"]},
	170 : {Cm:["W170 x D88"], In:["W66.9 x D34.6"]},
	180 : {Cm:["W180 x D88"], In:["W70.9 x D34.6"]},
	190 : {Cm:["W190 x D88"], In:["W74.8 x D34.6"]},
	200 : {Cm:["W200 x D88"], In:["W78.7 x D34.6"]}
}
const myColor = {
	"black" : [0.004, 0.004, 0.004],//Défini la couleur noir
	"grey" :  [0.6, 0.6, 0.6]//Défini la couleur gris clair
}
const myColorO = {
	"black" : ["over_black.png"],//Remplace la texture de la plaque alarme
	"grey" :  ["over.png"]
}
const myColorUV = {
	"miroir" : [-1,1],//Inverse les textures à inverser en fonction de l'emplacement miroir droit ou gauche
	"normal" : [1,1]
}
const textureListBench = ["Melamine_Noir","PA_RAL_9005","Peinture_lisse_RAL9005","Roue_noire","TRESPA"]//Applique la couleur sur les textures
const textureOver = ["OVERHEATING_ALARM"]//Applique le changement de texture sur la plaque alarme
const textureListUV = ["IONBENCH"]//Applique le changement d'UV sur la texture écran

//Fontions

function _hide(e) {//Fonction pour cacher les séléctions de 3D
	_api.hide(e, function(err) {
			if (err != null)
			console.log("Erreur lors du hide : " + e + "\n" + err);
	})
}

function _camera(i, e, option={}, myFunc){//Fonction pour déplacer la caméra avec des coordonnées
	_api.setCameraLookAt(i, e, option, function(err) {
			if (err != null)
			console.log("Erreur lors de la camera : " + e + "\n" + err);
			if(myFunc) myFunc();
	})
}

function _show(e) {//Fonction pour montrer les séléctions de 3D
	_api.show(e, function(err) {
			if (err != null)
			console.log("Erreur lors du show : " + e + "\n" + err);
	})
}

function _translate(obj, tab, option={}, myFunc) {//Fonction pour déplacer les séléctions de 3D
	$.each(obj, function(i, e){		
		_api.translate(e, tab, option, function(err){
			if (err != null)
				console.log("Erreur lors du translate : " + e + "\n" + err);
			if(myFunc) myFunc();
		})
	});
}

function _scale(obj, tab, option={}, myFunc) {//Fonction pour redimmensionner les séléctions de 3D (principalement pour faire un miroir)
	$.each(obj, function(i, e){		
		_api.setMatrix(e, tab, function(err){
			if (err != null)
				console.log("Erreur lors du scale : " + e + "\n" + err);
			if(myFunc) myFunc();
		})
	});
}

function _rotate(obj, tab, option={}, myFunc) {//Fonction pour tourner les séléctions de 3D
	$.each(obj, function(i, e){		
		_api.rotate(e, tab, option, function(err){
			if (err != null)
				console.log("Erreur lors du rotate : " + e + "\n" + err);
			if(myFunc) myFunc();
		})
	});
}
function showMultiple(obj){//Fonction pour afficher plusieurs séléctions de 3D
	$.each(obj, function (i, e) { 
	if (isNaN(parseInt(e)))
		_show(myBench[e]);
	else
		_show(e)
	});
}
function hideMultiple(obj){//Fonction pour cacher plusieurs séléctions de 3D
	$.each(obj, function (i, e) { 
	if (isNaN(parseInt(e)))
		_hide(myBench[e]);
	else
		_hide(e)
	});
}

configurator.init( uid, {//Lance la 3D depuis Sketchfab
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
				showMultiple([myBench.CAISSON_NE78, myBench.CAISSON_NE58_PASSE, myBench.CAISSON_NE27_PASSE, myBench.PORTED_NE78, myBench.PORTEG_NE78, myBench.FOND_160_NE78, myBench.STRUCTURE_160, myBench.TRESPA_190_C]);
				//Montre les 3D par défaut
				_scale([myBench.PORTEG_NE78], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.412085, -0.156796, 0, 1]);
				_scale([myBench.PORTED_NE78], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.412085, 0.757933, 0, 1]);
				_translate([myBench.PC1], [0, 0.068, 0]);//Positionne le support PC
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, 0, 0]);//Positionne les pompes à vide
				_camera([ 3.032247601569891, -2.3712445357760843, 1.0327683091198085], [-0.0020298945761387443, -0.018063977001946542, 0.07912712003138742],0.1);
			});
			$('#latcan10l_id').hide();
			$('#latexhfil_id').hide();
			$('#elec_id').hide();
			$('#can10l_id').hide();
			$('#mnfld_id').hide();
			$('#solv_id').hide();
			$('#eleclevel_b').hide();
			$('#exhfil_b').hide();
			$('#lateleclevel_id').hide();
			$('#dr3Set_id').hide();
			$('#allIn').hide();
			$('#dimCm_WS_id').val(dimWS[currentWidth].Cm);
			$('#dimIn_WS_id').hide();	
			($('#Model_BCH_id').val('BCH'+currentWidth+($('#ne_id').val())));
			$('#loadingScren').hide();//Forcer le hide de plusieurs case a cocher
			api.getMaterialList(function (err, materials) {
				myMaterials = materials;
			});
			api.getTextureList(function (err, textures) {
				myTextures = textures;
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

function hideOptionalDiv(){//Cache les cases à cacher
	var tab = ['elec_id','dr3_id','slidews_id','arm1_id','opeSafe_id','scr1_id','mnfld_id','key1_id','solv_id','can10l_id','eleclevel_id','exhfil_id','hrm_id','vpsp_id','odp_id','odk_id','slidepump_id','latsolv_id','latcan10l_id','latexhfil_id','lateleclevel_id','encleft_id'];
	$.each(tab, function (i, v) {
		($('#'+v)).hide();
		($('#'+v)).children("input[type='checkbox']:first").prop("checked", false);
	});
}
function showOptionalDiv(tab){
	$.each(tab, function (i, v) {
		($('#'+v)).show();		
	});//Montre plusieurs cases à cocher
}

function changeColor(color){//Changment couleur
	
	$.each(myMaterials, function (i, e) {
		if  ($.inArray(e.name, textureListBench) !== -1){
			e.channels.AlbedoPBR.color = myColor[color];
			_api.setMaterial(e);
		}
	});
}
function changeOver(color){//Change texture
	
	$.each(myTextures, function (i, e) {
		if  ($.inArray(e.name, myColorO[color]) !== -1){
			idTexture=e.uid;
			$.each(myMaterials, function (i, e) {
				if  ($.inArray(e.name, textureOver) !== -1){
					e.channels.AlbedoPBR.texture.uid = idTexture;
					_api.setMaterial(e);
				}
			});
		}
	});
}

function reverseUV(colorUV){//Modifie l'UV
	
	$.each(myMaterials, function (i, e) {
		if  ($.inArray(e.name, textureListUV) !== -1){
			e.channels.EmitColor.UVTransforms.scale = myColorUV[colorUV];
			_api.setMaterial(e);
		}
	});
}

function elecChange(myElec){//Cache et montre le bon ELEC choisi
	
	$.each(myBench, function (i, e) {
		if (i.startsWith("ELEC"))
			_hide(e);
	});
	_show(myBench['ELEC_'+myElec]);
	currentElec = myElec
}

// Dimensions Largeur Plan de travail : ------------------------------

function dimChange(myWidth, ne=null){//Modifie les propriété du Bench en fonction de la largeur de plan de travail
	//Cache tout
	$.each(myBench, function(i, e) {_hide(e)});
	
	//Choisir structure et remplacer caisson
	let thisStruct = ne ? allStruct[ne] : allStruct[style[myWidth][0]]; 

	//Afficher les checkbox options necessaire
	hideOptionalDiv();   
	showOptionalDiv(thisStruct.optionAvailabled);
	 
	_show(myBench['TRESPA_'+myWidth+'_'+thisStruct.trespa]);

	//Calcul valeur largeur structure
	let fondWidth = thisStruct.fondID[0].split("_")[1];
	_show(myBench['STRUCTURE_'+fondWidth]);//Affiche la largeur de structure et le caisson en fonction du tableau des largeurs de plan de travail et de structure disponible
	showMultiple(thisStruct.fondID);
	//Calcul position ecran
	let widthScreen = (190-myWidth)/200;
	($('#dimIn_WS_id').val(dimWS[myWidth].In));
	($('#dimCm_WS_id').val(dimWS[myWidth].Cm));
	//Calcul valeur deplacement en fonction largeur struct
	let widthOption = (160-fondWidth)/200;	
	
	//Translation et rotation options
	reverseUV("normal");//Par défaut l'UV dans le sens normal
	//Définition des position des éléments en fonction de la largeur
	_scale([myBench['FOND_'+currentFondWidth+'_'+($('#ne_id').val())]], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
	_scale([myBench.PC1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.068+widthOption, 0, 1]);
	_scale([myBench.SCR1, myBench.ARMERG], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, widthScreen, 0, 1]);
	_scale([myBench.DR3, myBench.KEY1, myBench.KEY1_SLIDING, myBench.SLIDEWS, myBench.SLIDINGWS], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, widthOption, 0, 1]);
	_scale([myBench.CAN10L, myBench.SOLV, myBench.SOLV_MNFLD, myBench.EXHFIL, myBench.ELEC2LEVEL], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, thisStruct.solv, 0, 1]);
	_scale([myBench.CAISSON_NE58_PASSE, myBench.CAISSON_NE27_PASSE, myBench.BOUCHON_DESSUS, myBench.BOUCHON_COTE, myBench.BOUCHE_DESSUS, myBench.BOUCHE_COTE, myBench.HRM_NE78, myBench.LATD_TRESPA, myBench.SLIDEPUMP_NE78, myBench.SLIDINGPUMP_NE78, myBench.VPSP_NE78, myBench.CAISSON_NE78, myBench.LATSOLV, myBench.SOLV_MNFLD, myBench.DR3SET], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -widthOption, 0, 1]);
	_scale([myBench.PORTEG_NE78], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.412085, -0.156796-widthOption, 0, 1]);
	_scale([myBench.PORTED_NE78], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.412085, 0.757933-widthOption, 0, 1]);
	_scale([myBench.ELEC_EU, myBench.ELEC_US, myBench.ELEC_UK, myBench.ELEC_DE, myBench.ELEC_CH], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, thisStruct.elec.width, thisStruct.elec.height, 1]);
	_scale([myBench.CABLETRAY_C], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, thisStruct.cablec.width, thisStruct.cablec.height, 1]);
	_scale([myBench.CABLETRAY_R], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, thisStruct.cabler.width, thisStruct.cabler.height, 1]);
	_scale([myBench.CABLETRAY_L], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, thisStruct.cablel.width, thisStruct.cablel.height, 1]);
	_scale([myBench.POMPE_D, myBench.ODP, myBench.ODK], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, thisStruct.pompeD, 0, 1]);
	_scale([myBench.POMPE_G], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, thisStruct.pompeG, 0, 1]);
	_rotate([myBench.PORTED_NE78, myBench.PORTEG_NE78], [Math.PI/2,0, 0, 0]);
	$('#opendoor_b').prop('checked', false);
	$('#pump_b').prop('checked', false);
	$('#elec_b').prop('checked', false);
	var tab_b = ['dr3_b','dr3Set_b','slidews_b','latd_b','pc1_b','mnfld_b','opeSafe_b','arm1_b','scr1_b','key1_b','armerg_b','cabletray_b','solv_b','can10l_b','eleclevel_b','exhfil_b','hrm_b','vpsp_b','odp_b','odk_b','slidepump_b','latsolv_b','latcan10l_b','latexhfil_b','lateleclevel_b','encleft_b'];
	
	$.each(tab_b, function (i, v) {
		($('#'+v)).prop("checked", false);
	});
	$('#slidingAll_b').prop('checked', false);
    $("#opendoor_b").prop('disabled', false);
    $("#latdR_b").prop('disabled', true);
    $("#latdL_b").prop('disabled', true);
	$('#bouchSide_b').prop("disabled",true);
	$('#bouchUp_b').prop("disabled",true);
	if (myWidth != currentWidth)	{
		changeDimSelector(style[myWidth]);	
	}
	//Liste deroulante NE ne change pas
	let neDim = ($('#ne_id').val());	
	($('#Model_BCH_id').val('BCH'+myWidth+neDim));
	currentWidth = myWidth;
	currentFondWidth = fondWidth;	
	currentThisStruct = ne ? ne : style[myWidth][0];
	currentNe = neDim;
}

function neChange(myNoiseEnc){//Modifie le bench en fonction du caisson acoustique choisi
	let myNoise = currentFondWidth+"_"+myNoiseEnc.toLowerCase();
	dimChange(currentWidth, myNoise);
}

function changeDimSelector(arrayOfNe){//Curseur des largeurs de plan de travail
	
	if (arrayOfNe.length == 1){
		$.each(arrayOfNe, function(key, value){
			let optionNe = value.split("_")[1].toUpperCase();
			$('#ne_id').prop("disabled",true);
			$('#ne_id').val(optionNe);
			$('#Model_BCH_id').val('BCH'+currentWidth+optionNe);
		});
	}else{
		$('#ne_id').empty();
		$('#pump_b').prop("disabled",false);
		$('#opendoor_b').prop("disabled",false);
		$('#slidingAll_b').prop("disabled",false);
		$('#ne_id').prop("disabled",false);
		$.each(arrayOfNe, function(key, value){
		let option = value.split("_")[1].toUpperCase();
		if (option == "NE00") 
			return;
		$('#ne_id').append($("<option></option>").text(option))
		$('#ne_id').append($("<option hidden></option>").text('NE00'));
	});
	}
		
}

// EVENEMENT



$('#elec_b').change(function() {//Menu déroulant des ELEC
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		$('#elec_id').show();
		_show(myBench['ELEC_'+currentElec]);
		if ($('#encleft_b').prop('checked')){		
			_camera([-1.138, 1.334-widthOption, 0.4], [0.09, -0.197-widthOption, 0.045], 2);
		}else{
			_camera([-1.138, -1.334+widthOption, 0.4], [0.27, -0.197+widthOption, 0.045], 2);
		}
	}else{
		$('#elec_id').hide();
		$.each(myBench, function (i, e) {
			if (i.startsWith("ELEC"))
				_hide(e);
		});
	}
});


//Selector

$('#dim_id').on('input', function() {//Curseur des largeurs de plan de travail
	$('#dim_val').val($('#tickmarks option[value="'+this.value+'"]').attr('name'));
	$('#dimInch_val').val($('#tickmarks option[value="'+this.value+'"]').attr('inch'));
});

$('#dim_id').change(function() {//Curseur des largeurs de plan de travail
	dimChange($('#tickmarks option[value="'+this.value+'"]').attr('name'));
	$('#dim_val').val($('#tickmarks option[value="'+this.value+'"]').attr('name'));
	$('#dimInch_val').val($('#tickmarks option[value="'+this.value+'"]').attr('inch'));
});

$('#ne_id').change(function() {//Menu déroulant des caissons acoustique
		neChange(this.value);
});

$('#elec_id').change(function() {//Choix menu déroulant des elec
	let widthOption = (160-currentFondWidth)/200;
		elecChange(this.value);
		if ($('#encleft_b').prop('checked')){		
			_camera([-1.138, 1.334-widthOption, 0.4], [0.09, -0.197-widthOption, 0.045], 2);
		}else{
			_camera([-1.138, -1.334+widthOption, 0.4], [0.27, -0.197+widthOption, 0.045], 2);
		}
});

$('#dimUnite').click(function() {//Modification unité
		if ($(this).prop("innerText") == "cm") {
			$('#allCm').hide();
			$('#allIn').show();
			($('#dimCm_WS_id')).hide();	
			($('#dimIn_WS_id')).show();	
			$('#dimIn_WS_id').val(dimWS[currentWidth].In);
		}else{
			$('#allCm').show();
			$('#allIn').hide();
			($('#dimCm_WS_id')).show();	
			($('#dimIn_WS_id')).hide();	
			$('#dimCm_WS_id').val(dimWS[currentWidth].Cm);
		}
});

// LATD gauche ou droit
$('#latdL_b').click(function() {
	let widthOption = (160-currentFondWidth)/200;
		$(this).prop("disabled",true);
		$('#latdR_b').prop("disabled",false);
		_camera([1.44, -2.05+widthOption, 0.595], [-0.056, -0.778+widthOption, 0.065], 2);	
		_scale([myBench.LATD_TRESPA], [-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, widthOption, 0, 1]);	
		if ($('#encleft_b').prop('checked')){		
			_scale([myBench.PC1], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, -0.068-widthOption, 0, 1]);
		}else{	
			_scale([myBench.PC1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.068+widthOption, -0.116, 1]);
		}
});
$('#latdR_b').click(function() {
	let widthOption = (160-currentFondWidth)/200;
		$(this).prop("disabled",true);
		$('#latdL_b').prop("disabled",false);
		_camera([1.22, 2.31-widthOption, 0.579], [-0.273, 1.04-widthOption, 0.048], 2);	
		_scale([myBench.LATD_TRESPA], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -widthOption, 0, 1]);
		if ($('#encleft_b').prop('checked')){		
			_scale([myBench.PC1], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, -0.068-widthOption, -0.116, 1]);	
		}else{
			_scale([myBench.PC1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.068+widthOption, 0, 1]);
		}
});

// BOUCHE UP or SIDE
$('#bouchUp_b').click(function() {
	let widthOption = (160-currentFondWidth)/200;
		$(this).prop("disabled",true);
		$('#bouchSide_b').prop("disabled",false);
		showMultiple([myBench.BOUCHE_DESSUS, myBench.BOUCHON_COTE]);
		hideMultiple([myBench.BOUCHON_DESSUS, myBench.BOUCHE_COTE]);		
		if ($('#encleft_b').prop('checked')){		
			_camera([-1.28, -1.42+widthOption, 0.58], [0.33, -0.11+widthOption, -0.02], 2);	
		}else{
			_camera([-1.462, 1.188-widthOption, 0.58], [-0.15, -0.12-widthOption, -0.003], 2);	
		}
});
$('#bouchSide_b').click(function() {
	let widthOption = (160-currentFondWidth)/200;
		$(this).prop("disabled",true);
		$('#bouchUp_b').prop("disabled",false);
		hideMultiple([myBench.BOUCHE_DESSUS, myBench.BOUCHON_COTE]);
		showMultiple([myBench.BOUCHON_DESSUS, myBench.BOUCHE_COTE]);		
		if ($('#encleft_b').prop('checked')){		
			_camera([-1.28, -1.42+widthOption, 0.58], [0.33, -0.11+widthOption, -0.02], 2);	
		}else{
			_camera([-1.462, 1.188-widthOption, 0.58], [-0.15, -0.12-widthOption, -0.003], 2);	
		}
});

//Checkbox options
$('#encleft_b').change(function(err, ne=null) {
	let thisStruct = ne ? allStruct[ne] : allStruct[currentThisStruct]; 
	let fondWidth = thisStruct.fondID[0].split("_")[1];
	let widthOption = (160-fondWidth)/200;
	let widthScreen = (190-currentWidth)/200;
	if(this.checked){
		_camera([2.08, 1.61, 0.7], [0.013, 0.384, 0.068], 2);
		_scale([myBench.PC1], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, -0.068-widthOption, 0, 1]);
		_scale([myBench.SCR1, myBench.ARMERG], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, -widthScreen, 0, 1]);
		_scale([myBench.DR3, myBench.KEY1, myBench.KEY1_SLIDING, myBench.SLIDEWS, myBench.SLIDINGWS], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.94-widthOption, 0, 1]);
		if ($('#latsolv_b').prop('checked')){	
		_scale([myBench.CAN10L, myBench.EXHFIL, myBench.ELEC2LEVEL], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0.02, -widthOption-0.99, 0.148, 1]);			
		}else{
		_scale([myBench.CAN10L, myBench.EXHFIL, myBench.SOLV, myBench.SOLV_MNFLD, myBench.ELEC2LEVEL], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, -thisStruct.solv+0.019, 0, 1]);
		}
		_scale([myBench.BOUCHON_DESSUS, myBench.BOUCHON_COTE,myBench.BOUCHE_DESSUS, myBench.BOUCHE_COTE], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, widthOption+0.13, 0, 1]);
		_scale([myBench.POMPE_D, myBench.ODP, myBench.ODK], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].pompeD, 0, 1]);
		_scale([myBench.POMPE_G], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].pompeG, 0, 1]);
		_scale([myBench.CAISSON_NE78, myBench.HRM_NE78, myBench.CAISSON_NE58_PASSE, myBench.CAISSON_NE27_PASSE, myBench.SLIDEPUMP_NE78, myBench.SLIDINGPUMP_NE78, myBench.VPSP_NE78, myBench.LATSOLV], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, widthOption, 0, 1]);
		_scale([myBench.LATD_TRESPA], [-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, widthOption, 0, 1]);
		_scale([myBench['FOND_'+currentFondWidth+'_'+($('#ne_id').val())]], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
		_scale([myBench.PORTEG_NE78], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.412085, -0.601-0.156796-widthOption, 0, 1]);
		_scale([myBench.PORTED_NE78], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.412085, -0.601+0.757933-widthOption, 0, 1]);
		_scale([myBench.ELEC_EU, myBench.ELEC_US, myBench.ELEC_UK, myBench.ELEC_DE, myBench.ELEC_CH], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.85-thisStruct.elec.width, thisStruct.elec.height, 1]);
		
						
		_scale([myBench.CABLETRAY_C], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].cablec.width, allStruct[currentThisStruct].cablec.height, 1]);
		_scale([myBench.CABLETRAY_R], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].cabler.width, allStruct[currentThisStruct].cabler.height, 1]);
		_scale([myBench.CABLETRAY_L], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].cablel.width, allStruct[currentThisStruct].cablel.height, 1]);
		
		$('#opendoor_b').prop('checked', false);
		$('#slidingAll_b').prop('checked', false);
		reverseUV("miroir");
	}else{
		_camera([2.08, 1.61, 0.7], [0.013, 0.384, 0.068], 2);
		_scale([myBench.PC1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.068+widthOption, 0, 1]);
		_scale([myBench.SCR1, myBench.ARMERG], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, widthScreen, 0, 1]);
		_scale([myBench.DR3, myBench.KEY1, myBench.KEY1_SLIDING, myBench.SLIDEWS, myBench.SLIDINGWS], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, widthOption, 0, 1]);
		if ($('#latsolv_b').prop('checked')){	
		_scale([myBench.CAN10L, myBench.EXHFIL, myBench.ELEC2LEVEL], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.02, widthOption+0.99, 0.148, 1]);			
		}else{
		_scale([myBench.SOLV, myBench.SOLV_MNFLD, myBench.CAN10L, myBench.EXHFIL, myBench.ELEC2LEVEL], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, thisStruct.solv, 0, 1]);
		}
		_scale([myBench.POMPE_D, myBench.ODP, myBench.ODK], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].pompeD, 0, 1]);
		_scale([myBench.POMPE_G], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].pompeG, 0, 1]);
		
		_scale([myBench.BOUCHON_DESSUS, myBench.BOUCHON_COTE,myBench.BOUCHE_DESSUS, myBench.BOUCHE_COTE], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -widthOption-0.13, 0, 1]);
		_scale([myBench.CAISSON_NE58_PASSE, myBench.CAISSON_NE27_PASSE, myBench.CAISSON_NE78, myBench.HRM_NE78, myBench.LATD_TRESPA, myBench.SLIDEPUMP_NE78, myBench.SLIDINGPUMP_NE78, myBench.VPSP_NE78, myBench.LATSOLV], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -widthOption, 0, 1]);
		_scale([myBench['FOND_'+currentFondWidth+'_'+($('#ne_id').val())]], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
		
		_scale([myBench.PORTEG_NE78], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.412085, -0.156796+widthOption, 0, 1]);
		_scale([myBench.PORTED_NE78], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.412085, 0.757933+widthOption, 0, 1]);
		_scale([myBench.ELEC_EU, myBench.ELEC_US, myBench.ELEC_UK, myBench.ELEC_DE, myBench.ELEC_CH], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, thisStruct.elec.width, thisStruct.elec.height, 1]);
		
							
		_scale([myBench.CABLETRAY_C], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].cablec.width, allStruct[currentThisStruct].cablec.height, 1]);
		_scale([myBench.CABLETRAY_R], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].cabler.width, allStruct[currentThisStruct].cabler.height, 1]);
		_scale([myBench.CABLETRAY_L], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].cablel.width, allStruct[currentThisStruct].cablel.height, 1]);
		
		$('#opendoor_b').prop('checked', false);
		$('#slidingAll_b').prop('checked', false);
		reverseUV("normal");
	}
});

$('#grey_b').change(function() {
	if(this.checked){
		changeColor("grey");
		changeOver("grey");
	}else{
		changeColor("black");
		changeOver("black");
	}
});

$('#dr3_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		_show(myBench.DR3);
		if ($('#encleft_b').prop('checked')){	
			_camera([1.33, 1.51-widthOption, 0.365], [-0.34, 0.27-widthOption, -0.134], 2);
		}else{
			_camera([1.33, -1.29+widthOption, 0.365], [0.11, -0.104+widthOption, -0.134], 2);
		}	
	}else{
		_hide(myBench.DR3);	
	}
});
$('#slidews_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		showMultiple([myBench.SLIDEWS,myBench.SLIDINGWS]);
		hideMultiple([myBench.KEY1,myBench.KEY1_SLIDING]);
		$('#key1_b').prop('checked', false);
		$('#arm1_b').prop('checked', false);
		$('#scr1_id').show();
		$('#key1_id').show();
		if ((($('#arm1_b').prop('checked') == false) && ($('#scr1_b').prop('checked'))) || ($('#scr1_b').prop('checked') == true)){	
			$('#scr1_b').prop('checked', true);
		}else{
			$('#scr1_b').prop('checked', false);
		}			
		if ($('#encleft_b').prop('checked')){		
			_camera([1.37, 1.299-widthOption, 0.593], [-0.011, 0.61-widthOption, 0.188], 2);
		}else{
			_camera([1.37, -1.04+widthOption, 0.693], [0.04, -0.083+widthOption, 0.045], 2);
		}
	}else{
		hideMultiple([myBench.SLIDEWS,myBench.SLIDINGWS]);
	}
});
$('#latd_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		_show(myBench['LATD_'+currentStyle]);
		if ($('#encleft_b').prop('checked')){		
			_scale([myBench['LATD_'+currentStyle]], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, widthOption, 0, 1]);
			$('#latdL_b').prop("disabled",true);				
			$('#latdR_b').prop("disabled",false);			
			_camera([1.44, -2.05+widthOption, 0.595], [-0.056, -0.778+widthOption, 0.065], 2);	
		}else{
			_scale([myBench['LATD_'+currentStyle]], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -widthOption, 0, 1]);	
			$('#latdR_b').prop("disabled",true);
			$('#latdL_b').prop("disabled",false);	
			_camera([1.22, 2.31-widthOption, 0.579], [-0.273, 1.04-widthOption, 0.048], 2);	
		}
	}else{
		_hide(myBench['LATD_'+currentStyle]);
		$('#latdL_b').prop("disabled",true);	
		$('#latdR_b').prop("disabled",true);
		if ($('#encleft_b').prop('checked')){		
			_scale([myBench.PC1], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, -0.068-widthOption, 0, 1]);				
		}else{
			_scale([myBench.PC1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.068+widthOption, 0, 1]);
		}
		_scale([myBench.LATD_TRESPA], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -widthOption, 0, 1]);
	}
});
$('#pc1_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		_show(myBench.PC1);
		if ($('#encleft_b').prop('checked')){		
			_camera([0.907, 1.65-widthOption, 0.462], [-0.624, 0.563-widthOption, -0.126], 2);	
		}else{	
			_camera([1.204, -1.436+widthOption, 0.426], [-0.19, -0.45+widthOption, -0.022], 2);	
		}
	}else{
		_hide(myBench.PC1);	
	}
});	
$('#arm1_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		if ($('#encleft_b').prop('checked')){		
			_camera([1.555, 1.53-widthOption, 0.868], [-0.182, 0.571-widthOption, 0.322], 2);
		}else{		
			_camera([1.64, -1.313+widthOption, 0.868], [-0.065, -0.111+widthOption, 0.322], 2);	
		}
		hideMultiple([myBench.SLIDEWS,myBench.SLIDINGWS,myBench.ARMERG]);
		showMultiple([myBench.KEY1,myBench.KEY1_SLIDING,myBench.SCR1]);
		$('#slidews_b').prop('checked', false);
		$('#armerg_b').prop('checked', false);
		$('#scr1_id').hide();
		$('#key1_id').hide();	
		$('#scr1_b').prop('checked', true);
		$('#key1_b').prop('checked', false);	
	}else{
		hideMultiple([myBench.KEY1,myBench.KEY1_SLIDING,myBench.SCR1]);
		$('#scr1_id').show();
		$('#key1_id').show();	
		$('#scr1_b').prop('checked', false);
		$('#key1_b').prop('checked', false);	
	}
});
$('#scr1_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		if ($('#encleft_b').prop('checked')){		
			_camera([1.41, 0.935-widthOption, 0.983], [-0.267, 0.813-widthOption, 0.44], 2);	
		}else{	
			_camera([1.37, -0.956+widthOption, 0.983], [-0.093, -0.508+widthOption, 0.546], 2);	
		}
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
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		if ($('#encleft_b').prop('checked')){		
			_camera([1.37, 1.299-widthOption, 0.593], [-0.011, 0.61-widthOption, 0.188], 2);
		}else{
			_camera([1.37, -1.04+widthOption, 0.693], [0.04, -0.083+widthOption, 0.045], 2);
		}
		showMultiple([myBench.KEY1,myBench.KEY1_SLIDING]);	
		hideMultiple([myBench.SLIDEWS,myBench.SLIDINGWS,myBench.ARMERG,myBench.SCR1]);
		$('#armerg_b').prop('checked', false);
		$('#slidews_b').prop('checked', false);
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
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		if ($('#encleft_b').prop('checked')){		
			_camera([1.41, 0.935-widthOption, 0.983], [-0.267, 0.813-widthOption, 0.44], 2);	
		}else{			
			_camera([1.37, -0.956+widthOption, 0.983], [-0.093, -0.508+widthOption, 0.546], 2);	
		}
		showMultiple([myBench.ARMERG,myBench.SCR1]);
		hideMultiple([myBench.KEY1,myBench.KEY1_SLIDING]);
		$('#scr1_b').prop('checked', false);
		$('#key1_b').prop('checked', false);
		$('#arm1_b').prop('checked', false);
	}else{
		hideMultiple([myBench.ARMERG,myBench.SCR1]);
	}
});	
$('#cabletray_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		if ($('#encleft_b').prop('checked')){		
			_camera([-1.392, -0.998+widthOption, 0.273], [-0.07, -0.324+widthOption, -0.159], 2);	
		}else{		
			_camera([-1.424, 0.857-widthOption, 0.273], [-0.155, -0.21-widthOption, -0.158], 2);
		}
		if (currentFondWidth < 160)
			showMultiple([myBench.CABLETRAY_L,myBench.CABLETRAY_C]);
		else
			showMultiple([myBench.CABLETRAY_L,myBench.CABLETRAY_C,myBench.CABLETRAY_R]);
	}else{
		if (currentFondWidth < 160)
			hideMultiple([myBench.CABLETRAY_L,myBench.CABLETRAY_C]);
		else
			hideMultiple([myBench.CABLETRAY_L,myBench.CABLETRAY_C,myBench.CABLETRAY_R]);
	}
});	
$('#mnfld_b').change(function(err, ne=null) {
	let thisStruct = ne ? allStruct[ne] : allStruct[currentThisStruct]; 
	if(this.checked){		
		_camera([1.91, 0, 0.63], [-0.011, -0.011, -0.152], 2);
		_show(myBench.SOLV_MNFLD);
		if ($('#encleft_b').prop('checked')) {
			_scale([myBench.SOLV_MNFLD], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, -thisStruct.solv+0.019, 0, 1]);	
		}else{
			_scale([myBench.SOLV_MNFLD], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, thisStruct.solv, 0, 1]);
		}
	}else{
		_hide(myBench.SOLV_MNFLD);	
	}
});	
$('#solv_b').change(function(err, ne=null) {
	if(this.checked){
		let widthOption = (160-currentFondWidth)/200;
		let thisStruct = ne ? allStruct[ne] : allStruct[currentThisStruct]; 
		_show(myBench.SOLV);
		$('#can10l_b').prop('checked', false);
		$('#can10l_id').show();	
		_camera([1.91, 0, 0.63], [-0.011, -0.011, -0.152], 2);
		if ($('#encleft_b').prop('checked')) {
			_scale([myBench.CAN10L, myBench.EXHFIL, myBench.SOLV, myBench.ELEC2LEVEL], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, -thisStruct.solv+0.019, 0, 1]);	
		}else{
			_scale([myBench.CAN10L, myBench.EXHFIL, myBench.SOLV, myBench.ELEC2LEVEL], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, thisStruct.solv, 0, 1]);
		}
		hideMultiple([myBench.LATSOLV,myBench.CAN10L,myBench.EXHFIL,myBench.ELEC2LEVEL,myBench.ELEC1LEVEL]);		
		$('#latsolv_b').prop('checked', false);
		$('#latcan10l_b').prop('checked', false);
		$('#latcan10l_id').hide();
		$('#latexhfil_b').prop('checked', false);
		$('#latexhfil_id').hide();
		$('#lateleclevel_b').prop('checked', false);
		$('#lateleclevel_id').hide();
	} else {
		hideMultiple([myBench.SOLV,myBench.CAN10L,myBench.EXHFIL,myBench.ELEC1LEVEL,myBench.ELEC2LEVEL]);	
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
		_camera([1.91, 0, 0.63], [-0.011, -0.011, -0.152], 2);
		_show(myBench.CAN10L);
		$('#exhfil_b').prop('checked', false);
		$('#exhfil_id').show();
		$('#eleclevel_b').prop('checked', false);
		$('#eleclevel_id').show();
	}else{
		hideMultiple([myBench.CAN10L,myBench.EXHFIL,myBench.ELEC1LEVEL,myBench.ELEC2LEVEL]);	  
		$('#exhfil_id').hide();	
		$('#eleclevel_id').hide();	
		$('#eleclevel_b').prop('checked', false);
		$('#exhfil_b').prop('checked', false);
	}
});	
$('#exhfil_b').change(function() {
	if(this.checked){
		_camera([1.91, 0, 0.63], [-0.011, -0.011, -0.152], 2);
		_show(myBench.EXHFIL);
	}else{
		_hide(myBench.EXHFIL);
	}
});
$('#eleclevel_b').change(function() {
	if(this.checked){
		_camera([1.91, 0, 0.63], [-0.011, -0.011, -0.152], 2);
		_show(myBench.ELEC2LEVEL);
		// showMultiple([myBench.ELEC1LEVEL,myBench.ELEC2LEVEL]);
	}else{
		_hide(myBench.ELEC2LEVEL);
		// hideMultiple([myBench.ELEC1LEVEL,myBench.ELEC2LEVEL]);
	}
});

$('#latsolv_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		let widthOption = (160-currentFondWidth)/200;
		_show(myBench.LATSOLV);
		hideMultiple([myBench.SOLV,myBench.CAN10L,myBench.EXHFIL, myBench.ELEC1LEVEL, myBench.ELEC2LEVEL]);	
		if ($('#encleft_b').prop('checked')) {
			_camera([1.24, -1.58+widthOption, 0.39], [-0.489, -0.1+widthOption, -0.4], 2);
			_scale([myBench.CAN10L, myBench.EXHFIL, myBench.ELEC2LEVEL], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.02, widthOption-0.89, 0.148, 1]);	
		}else{
			_camera([1.116, 1.84-widthOption, 0.39], [-0.474, 0.678-widthOption, -0.262], 2);
			_scale([myBench.CAN10L, myBench.EXHFIL, myBench.ELEC2LEVEL], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0.02, -widthOption+0.89, 0.148, 1]);
		}
		$('#solv_b').prop('checked', false);
		$('#can10l_b').prop('checked', false);
		$('#can10l_id').hide();
		$('#exhfil_b').prop('checked', false);
		$('#exhfil_id').hide();
		$('#eleclevel_b').prop('checked', false);
		$('#eleclevel_id').hide();
		$('#latcan10l_b').prop('checked', false);
		$('#latcan10l_id').show();
		$('#latexhfil_id').hide();
		$('#lateleclevel_id').hide();
	} else {
		hideMultiple([myBench.LATSOLV,myBench.CAN10L,myBench.EXHFIL, myBench.ELEC1LEVEL, myBench.ELEC2LEVEL]);	
		$('#latcan10l_id').hide();
		$('#latexhfil_id').hide();
		$('#lateleclevel_id').hide();
		$('#lateleclevel_b').prop('checked', false);
		$('#latexhfil_b').prop('checked', false);
		$('#latcan10l_b').prop('checked', false);
	}
   
});	
$('#latcan10l_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		_show(myBench.CAN10L);
		$('#latexhfil_b').prop('checked', false);
		$('#latexhfil_id').show();
		$('#lateleclevel_b').prop('checked', false);
		$('#lateleclevel_id').show();
		if ($('#encleft_b').prop('checked')) {
			_camera([1.24, -1.58+widthOption, 0.39], [-0.489, -0.1+widthOption, -0.4], 2);
		}else{
			_camera([1.116, 1.84-widthOption, 0.39], [-0.474, 0.678-widthOption, -0.262], 2);
		}
	}else{
		_hide(myBench.CAN10L);
		_hide(myBench.EXHFIL);  
		$('#latexhfil_id').hide();	
		$('#lateleclevel_id').hide();	
		$('#lateleclevel_b').prop('checked', false);
		$('#latexhfil_b').prop('checked', false);
	}
});	
$('#latexhfil_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		_show(myBench.EXHFIL);
		if ($('#encleft_b').prop('checked')) {
			_camera([1.24, -1.58+widthOption, 0.39], [-0.489, -0.1+widthOption, -0.4], 2);
		}else{
			_camera([1.116, 1.84-widthOption, 0.39], [-0.474, 0.678-widthOption, -0.262], 2);
		}
	}else{
		_hide(myBench.EXHFIL);
	}
});	
$('#lateleclevel_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		_show(myBench.ELEC2LEVEL);
		// showMultiple([myBench.ELEC1LEVEL,myBench.ELEC2LEVEL]);
		if ($('#encleft_b').prop('checked')) {
			_camera([1.24, -1.58+widthOption, 0.39], [-0.489, -0.1+widthOption, -0.4], 2);
		}else{
			_camera([1.116, 1.84-widthOption, 0.39], [-0.474, 0.678-widthOption, -0.262], 2);
		}
	}else{
		_hide(myBench.ELEC2LEVEL);
		// hideMultiple([myBench.ELEC1LEVEL,myBench.ELEC2LEVEL]);
	}
});

//HRM



$('#hrm_b').change(function() {	
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		showMultiple([myBench['HRM_'+currentNe], myBench.BOUCHE_DESSUS, myBench.BOUCHON_COTE]);	
		$('#bouchSide_b').prop("disabled",false);
		if ($('#encleft_b').prop('checked')){
			_camera([-1.28, -1.42+widthOption, 0.58], [0.33, -0.11+widthOption, -0.02], 2);	
			_scale([myBench.BOUCHON_DESSUS, myBench.BOUCHON_COTE,myBench.BOUCHE_DESSUS, myBench.BOUCHE_COTE], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, widthOption+0.13, 0, 1]);
		}else{		
			_camera([-1.462, 1.188-widthOption, 0.58], [-0.15, -0.12-widthOption, -0.003], 2);
			_scale([myBench.BOUCHON_DESSUS, myBench.BOUCHON_COTE,myBench.BOUCHE_DESSUS, myBench.BOUCHE_COTE], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -widthOption-0.13, 0, 1]);
		}
	}else{
		hideMultiple([myBench['HRM_'+currentNe], myBench.BOUCHE_DESSUS, myBench.BOUCHE_COTE, myBench.BOUCHON_COTE, myBench.BOUCHON_DESSUS]);
		$('#bouchSide_b').prop("disabled",true);
		$('#bouchUp_b').prop("disabled",true);
	}
});

//VPSP

$('#vpsp_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		$('#slidepump_b').prop('checked', false);
		_show(myBench['VPSP_'+currentNe]);
		_hide(myBench['SLIDEPUMP_'+currentNe]);
		_hide(myBench['SLIDINGPUMP_'+currentNe]);
		$('#opendoor_b').prop('checked', true);
		_rotate([myBench.PORTEG_NE78], [Math.PI/2,0, 0, 1], {duration: 1.0});
		_rotate([myBench.PORTED_NE78], [Math.PI/2,0, 0, -1], {duration: 1.0});
		if ($('#encleft_b').prop('checked')){
			_scale([myBench.POMPE_D, myBench.ODP, myBench.ODK], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].pompeD, 0.002, 1]);
			_scale([myBench.POMPE_G], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].pompeG, 0.002, 1]);
			_camera([1.767, -0.22+widthOption, 0.275], [0.437, -0.15+widthOption, -0.0005], 2);	
		}else{		
			_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0.002]);
			_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0.002]);
			_camera([1.842, 0.297-widthOption, 0.305], [0.234, 0.465-widthOption, -0.065], 2);
			
		}				
	}else{
		_hide(myBench['VPSP_'+currentNe]);
		if ($('#encleft_b').prop('checked')){	
			_scale([myBench.POMPE_D, myBench.ODP, myBench.ODK], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].pompeD, 0, 1]);
			_scale([myBench.POMPE_G], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].pompeG, 0, 1]);
		}else{		
			_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0]);
			_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0]);
		}	
	}
});

$('#odk_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		if ($('#encleft_b').prop('checked')){
			showMultiple([myBench.POMPE_D,myBench.POMPE_G]);	
			_camera([1.767, -0.22+widthOption, 0.275], [0.437, -0.15+widthOption, -0.0005], 2);
		}else{
				showMultiple([myBench.POMPE_D,myBench.POMPE_G]);	
				_camera([1.842, 0.297-widthOption, 0.305], [0.234, 0.465-widthOption, -0.065], 2);
		}
		_show(myBench.ODK);
		$('#pump_b').prop('checked', true);
		$('#opendoor_b').prop('checked', true);
		_rotate([myBench.PORTEG_NE78], [Math.PI/2,0, 0, 1], {duration: 1.0});
		_rotate([myBench.PORTED_NE78], [Math.PI/2,0, 0, -1], {duration: 1.0});	
	}else{
		hideMultiple([myBench.ODK, myBench.ODP]);
		$('#odp_b').prop('checked', false);
	}
});	

$('#odp_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		if ($('#encleft_b').prop('checked')){
			showMultiple([myBench.POMPE_D,myBench.POMPE_G]);	
			_camera([1.767, -0.22+widthOption, 0.275], [0.437, -0.15+widthOption, -0.0005], 2);
		}else{
			showMultiple([myBench.POMPE_D,myBench.POMPE_G]);	
			_camera([1.842, 0.297-widthOption, 0.305], [0.234, 0.465-widthOption, -0.065], 2);
		}
		showMultiple([myBench.ODP, myBench.ODK]);
		$('#odk_b').prop('checked', true);
		$('#pump_b').prop('checked', true);
		$('#opendoor_b').prop('checked', true);
		_rotate([myBench.PORTEG_NE78], [Math.PI/2,0, 0, 1], {duration: 1.0});
		_rotate([myBench.PORTED_NE78], [Math.PI/2,0, 0, -1], {duration: 1.0});	
	}else{
		_hide(myBench.ODP);
	}
});	

//Sliding_Pump

$('#slidepump_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;
	if(this.checked){
		$('#opendoor_b').prop('checked', true);
		_rotate([myBench.PORTEG_NE78], [Math.PI/2,0, 0, 1], {duration: 1.0});
		_rotate([myBench.PORTED_NE78], [Math.PI/2,0, 0, -1], {duration: 1.0});
		if ($('#slidingAll_b').prop('checked')){
			if ($('#encleft_b').prop('checked')){	
				_scale([myBench.POMPE_D, myBench.ODP, myBench.ODK], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0.5, allStruct[currentThisStruct].pompeD, 0.012, 1]);
				_scale([myBench.POMPE_G], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0.5, allStruct[currentThisStruct].pompeG, 0.012, 1]);
				_camera([1.767, -0.22+widthOption, 0.275], [0.437, -0.15+widthOption, -0.0005], 2);
				
			}else{		
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0.5, allStruct[currentThisStruct].pompeD, 0.012]);
				_translate([myBench.POMPE_G], [0.5, allStruct[currentThisStruct].pompeG, 0.012]);
				_camera([1.842, 0.297-widthOption, 0.305], [0.234, 0.465-widthOption, -0.065], 2);
				
			}
		}else{
			if ($('#encleft_b').prop('checked')){
				_scale([myBench.POMPE_D, myBench.ODP, myBench.ODK], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].pompeD, 0.012, 1]);
				_scale([myBench.POMPE_G], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].pompeG, 0.012, 1]);
				_camera([1.767, -0.22+widthOption, 0.275], [0.437, -0.15+widthOption, -0.0005], 2);
			}else{		
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0.012]);
				_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0.012]);	
				_camera([1.842, 0.297-widthOption, 0.305], [0.234, 0.465-widthOption, -0.065], 2);
			}
		}
		$('#vpsp_b').prop('checked', false);
		showMultiple([myBench['SLIDEPUMP_'+currentNe],myBench['SLIDINGPUMP_'+currentNe]]);
		_hide(myBench['VPSP_'+currentNe]);
	}else{
		hideMultiple([myBench['SLIDEPUMP_'+currentNe],myBench['SLIDINGPUMP_'+currentNe]]);
		if ($('#encleft_b').prop('checked')){
				_scale([myBench.POMPE_D, myBench.ODP, myBench.ODK], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].pompeD, 0, 1]);
				_scale([myBench.POMPE_G], [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, allStruct[currentThisStruct].pompeG, 0, 1]);
			}else{			
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0]);
				_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0]);
			}
	}
});


//Sliding OPEN ----------------------


function enableOptionAfterAnimateDoor() {//Reactive le bouton après l'animation
	$('#opendoor_b').prop('disabled', false);
}

$('#opendoor_b').change(function() {//Ouvre la porte
	$(this).prop('disabled', true); //Désactivation du bouton pendant l'animation
	if(this.checked){		
		_rotate([myBench.PORTEG_NE78], [Math.PI/2,0, 0, 1], {duration: 1.0}, enableOptionAfterAnimateDoor);
		_rotate([myBench.PORTED_NE78], [Math.PI/2,0, 0, -1], {duration: 1.0});
	}else{
		_rotate([myBench.PORTED_NE78, myBench.PORTEG_NE78], [Math.PI/2,0, 0, 0], {duration: 1.0}, enableOptionAfterAnimateDoor);
	}
});

function enableOptionAfterAnimate() {
	$('#slidingAll_b').prop('disabled', false);//Reactive le bouton après l'animation
}

$('#slidingAll_b').change(function() {
	let widthOption = (160-currentFondWidth)/200;		
	$(this).prop('disabled', true); //Désactivation du bouton pendant l'animation
	if(this.checked){
		if ($('#encleft_b').prop('checked')){
			_translate([myBench.SLIDINGWS], [0.5, 0.94-widthOption, 0],{duration: 2.0});
			_translate([myBench.KEY1_SLIDING], [0.26, 0.94-widthOption, 0],{duration: 2.0});
			if ($('#slidepump_b').prop('checked')){
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0.5, allStruct[currentThisStruct].pompeD, 0.012], {duration: 2.0});
				_translate([myBench.POMPE_G], [0.5, allStruct[currentThisStruct].pompeG, 0.012], {duration: 2.0});
			}else if ($('#vpsp_b').prop('checked')){
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0.002]);
				_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0.002]);
			}else{
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0]);
				_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0]);	
			}
			_translate([myBench.SLIDINGPUMP_NE78], [0.5, -widthOption, 0],{duration: 2.0}, enableOptionAfterAnimate);
		}else{
			if ($('#slidepump_b').prop('checked')){
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0.5, allStruct[currentThisStruct].pompeD, 0.012], {duration: 2.0});
				_translate([myBench.POMPE_G], [0.5, allStruct[currentThisStruct].pompeG, 0.012], {duration: 2.0});
			}else if ($('#vpsp_b').prop('checked')){
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0.002]);
				_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0.002]);
			}else{
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0]);
				_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0]);	
			}
			_translate([myBench.SLIDINGPUMP_NE78], [0.5, -widthOption, 0],{duration: 2.0}, enableOptionAfterAnimate);
			_translate([myBench.SLIDINGWS], [0.5, widthOption, 0],{duration: 2.0});
			_translate([myBench.KEY1_SLIDING], [0.26, widthOption, 0],{duration: 2.0});			
		}
		$("#opendoor_b").prop('disabled', true);
		$('#opendoor_b').prop('checked', true);
		_rotate([myBench.PORTEG_NE78], [Math.PI/2,0, 0, 1], {duration: 1.0});
		_rotate([myBench.PORTED_NE78], [Math.PI/2,0, 0, -1], {duration: 1.0}, enableOptionAfterAnimate);
	}else{
		if ($('#encleft_b').prop('checked')){
			_translate([myBench.SLIDINGWS, myBench.KEY1_SLIDING], [00, 0.94-widthOption, 0],{duration: 2.0});
			if ($('#slidepump_b').prop('checked')){
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0.012], {duration: 1.0});
				_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0.012], {duration: 1.0});
			}else if ($('#vpsp_b').prop('checked')){
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0.002]);
				_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0.002]);
			}else{
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0]);
				_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0]);	
			}
			_translate([myBench.SLIDINGPUMP_NE78], [0, -widthOption, 0],{duration: 1.0}, enableOptionAfterAnimate);
		}else{
			if ($('#slidepump_b').prop('checked')){
				_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0.012], {duration: 1.0});
				_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0.012], {duration: 1.0});
			}
			_translate([myBench.SLIDINGPUMP_NE78], [0, -widthOption, 0],{duration: 1.0});
			_translate([myBench.SLIDINGWS, myBench.KEY1_SLIDING], [0, widthOption, 0],{duration: 1.0});
		}
        $("#opendoor_b").prop('disabled', false);
		$('#opendoor_b').prop('checked', false);	
		_rotate([myBench.PORTED_NE78, myBench.PORTEG_NE78], [Math.PI/2,0, 0, 0], {duration: 2.0}, enableOptionAfterAnimate);
	}
});
$('#pump_b').change(function() {
	if(this.checked){
		showMultiple([myBench.POMPE_D,myBench.POMPE_G]);	
	}else{
		hideMultiple([myBench.POMPE_D,myBench.POMPE_G, myBench.ODP, myBench.ODK]);
		$('#odk_b').prop('checked', false);	
		$('#odp_b').prop('checked', false);	
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
$('#save_b').click(function() {//Sauvegarde des données par email
	if ($('#arm1_b').prop('checked'))
	$('#scr1_b').prop('checked', false);
	$('#modal1').empty(); //vide la liste
	myConfigResult={'nameOption':[], 'desOption':[],'Contact':{}};
	let widthOption = (160-currentFondWidth)/200;
	if ($('#encleft_b').prop('checked')){//Remet toutes les positions à 0 en fonction ENCLEFT ou non
		_translate([myBench.SLIDINGWS, myBench.KEY1_SLIDING], [00, 0.94-widthOption, 0],{duration: 0.1});
		if ($('#slidepump_b').prop('checked')){
			_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0.012], {duration: 0.1});
			_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0.012], {duration: 0.1});
		}else if ($('#vpsp_b').prop('checked')){
			_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0.002]);
			_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0.002]);
		}else{
			_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0]);
			_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0]);	
		}
		_translate([myBench.SLIDINGPUMP_NE78], [0, -widthOption, 0],{duration: 0.1}, enableOptionAfterAnimate);
	}else{
		if ($('#slidepump_b').prop('checked')){
			_translate([myBench.POMPE_D, myBench.ODP, myBench.ODK], [0, allStruct[currentThisStruct].pompeD, 0.012], {duration: 0.1});
			_translate([myBench.POMPE_G], [0, allStruct[currentThisStruct].pompeG, 0.012], {duration: 0.1});
		}
		_translate([myBench.SLIDINGPUMP_NE78], [0, -widthOption, 0],{duration: 0.1});
		_translate([myBench.SLIDINGWS, myBench.KEY1_SLIDING], [0, widthOption, 0],{duration: 0.1});
	}	
	_rotate([myBench.PORTED_NE78, myBench.PORTEG_NE78], [Math.PI/2,0, 0, 0], {duration: 0.1});
	_camera([ 3.032247601569891, -2.3712445357760843, 1.0327683091198085], [-0.0020298945761387443, -0.018063977001946542, 0.07912712003138742], 0.1, function(err){
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
                        $('#modal1').append("<label class='optionsTitrResume'>Bench reference</label> <label class='optionsResume'>BCH"+$('#dim_val').val()+$('#ne_id').val()+"</label>"); //remplit la liste
                        
                        $('input:checked').each(function () {	
                            if (this.id == 'opendoor_b' || this.id == 'pump_b' || this.id == 'slidingAll_b' || this.id == 'togBtn')
                                return;				
                            
                            let nameOption;								
                            let nameWithDescription;
                            if (this.id == 'elec_b') {
                                nameWithDescription = ' Power strip ' + $('#elec_id').val() + '.';
                                nameOption = 'ELEC' + $('#elec_id').val();
                            } else {
                                nameWithDescription = this.nextElementSibling.nextElementSibling.textContent;
                                nameOption = this.nextElementSibling.textContent; 			
                            }
                            $('#modal1').append("<label class='optionsTitrResume'>" + nameOption + "</label> <label class='optionsResume'>" + nameWithDescription + "</label>");
                                            
                            myConfigResult.nameOption.push(nameOption);
                            myConfigResult.desOption.push('- ' + nameWithDescription);
							});	
					$('#modalSave').modal('show');
                    $('#save_b').prop("disabled", false);
				});
                } else {
                    $('#save_b').prop("disabled", false);
                }
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
	// Check if the email is valid
	if (isValidEmail(email)) {
	} else {
		$('#inputEMail').addClass('is-invalid');
		return;
	}
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
	doc.addImage("data:image/png;base64,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", 
	'png', 138, 10, 60, 24, undefined, 'FAST');//https://www.base64-image.de/
	//Ajoute les détails des options dans le PDF	
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
	doc.text(myConfigResult.desOption, 52, 125);
	doc.setFont("Helvetica", "normal");
	doc.setFontSize(10);
	doc.text('Contact Europe :'+'\n'+'Phone : +33 (0) 3 86 65 94 03'+'\n'+'Email : contact@ionbench.com', 20,250);
	doc.text('Contact US :'+'\n'+'Phone : +1 984 317 9236'+'\n'+'Email : contact_us@ionbench.com', 125,250);
	doc.setFontSize(11);
	doc.text('First Name : '+myConfigResult.Contact.FirstName,118,45);
	doc.text('Last Name : '+myConfigResult.Contact.LastName,118,50);
	doc.text('Email : '+myConfigResult.Contact.Email,118,55);
	doc.text('Phone Number : '+myConfigResult.Contact.PhoneNumber,118,60);
	doc.text('Company : '+myConfigResult.Contact.Company,118,65);
	
	let titlePDF = 'ionBench Configuration '+($('#Model_BCH_id').val())+'.pdf';
	//Enregistre et ouvre le PDF
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
	if (checkContactForm($('.contactForm1'))){//Envoie le mail et remplace les valeurs vides pour Zappier -> CRM
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
