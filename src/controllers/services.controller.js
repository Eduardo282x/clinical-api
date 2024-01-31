import { getConnection }  from '../database/database'

const tableName = 'services'
const getServices = async (req, res) =>{
    const queryGet =`SELECT * FROM ${tableName}`
    try {
        const connection = getConnection()
        connection.query(queryGet, (err,result) => {
            if(result){
                res.json(result)
            } else {
                res.json({message: err, success: false})
            }
        })
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const insertServices = async (req, res) =>{

    const addServices = ` ('A01','17-OH PROGESTERONA','15','0'), ('001','AC. FOLICO O FOLATO','20','0'), ('002','ÁCIDO éRICO EN ORINA','3','0'), ('003','ÁCIDO éRICO EN SANGRE','3 ','1'), ('004','ALFA FETO PROTEÖNA','8 ','0'), ('005','AMILASA EN ORINA','6 ','0'), ('006','AMILASA EN SANGRE','6 ','0'), ('007','ANDROSTENODIONA','15 ','0'), ('008','ANTI D.N.A. (MICRO ELISA)','15 ','0'), ('009','ANTICUERPOS ANTICITRULINADOS','15 ','0'), ('010','ANTICUERPOS ANTIFOSFOLIPIDOS IGG/IGM','20 ','0'), ('011','ANTICUERPOS ANTINUCLEARES (ANA)','15 ','0'), ('012','ANTIESTREPTOLISINA (ASO)','4 ','0'), ('013','ANTÖGENO CARCÖGENO EMBRIONARIO (C.E.A)','8 ','0'), ('014','ANTÖGENO PROSTµTICO LIBRE','8 ','0'), ('015','ANTÖGENO PROSTµTICO TOTAL','8 ','0'), ('016','ANTIPEROXIDASA ANTI-TPO','15 ','0'), ('017','ANTITIROGLOBULINA ANTI-TG','12 ','0'), ('018','BETA - 2 MICROGLOBULINA','10 ','0'), ('019','BETA H.C.G CUANTITATIVA','8 ','0'), ('020','BETA H.C.G CUALITATIVA','4 ','0'), ('021','BILIRRUBINA TOTAL Y FRACCIONADA','6 ','0'), ('022','BK DE ESPUTO','15 ','0'), ('023','BK DE LÖQUIDO PLEURAL','15 ','0'), ('024','C.A. 72.4,','15','0'), ('025','CA 125 (OVARIOS)','8 ','0'), ('026','CA 15.3 (MAMAS)','8 ','0'), ('027','CA 19.9 (COLON)','8 ','0'), ('028','CALCIO','3 ','0'), ('029','CALCIO EN ORINA','3 ','0'), ('030','CARBEMEZEPINA (CBZ)','25 ','0'), ('031','CHAGAS (TEST - PACK)','10 ','0'), ('032','CITOMEGALOVIRUS IGG','8 ','0'), ('033','CITOMEGALOVIRUS IGM','8 ','0'), ('034','CITOQUÖMICA DE L.C.R','27 ','0'), ('035','CITOQUÖMICA DE LIQUIDO PLEURAL','27 ','0'), ('036','COCAÖNA','4 ','0'), ('037','COLESTEROL','3 ','1'), ('038','COLORACIàN DE GRAM','15 ','0'), ('039','COMPLEMENTO C3','7 ','0'), ('040','COMPLEMENTO C4','7 ','0'), ('041','COPROCULTIVO','20 ','0'), ('042','CORTISOL AM','8 ','0'), ('043','CORTISOL PM','8 ','0'), ('044','COVID (NASO FARÖNGEA)','10 ','0'), ('045','COVID-19 IGG / IGM','10 ','0'), ('046','CPK MB','5 ','0'), ('047','CREATININA EN ORINA','3 ','0'), ('048','CREATININA EN SANGRE','3 ','1'), ('049','CULTIVOS VARIOS','20 ','0'), ('050','CULTURETE','20 ','0'), ('051','DENGUE IGG / IGM','6 ','0'), ('052','DEPURACIàN DE CREATININA 24 HORAS','4 ','0'), ('053','DESHIDROGENASA LÁCTICA','6 ','0'), ('054','DET MYCOBACTERIUM TUBERCULOSIS (IGRA)','110 ','0'), ('055','DHEA-S','15 ','0'), ('056','DÖMERO D','15 ','0'), ('057','ELECTROLITOS (NA, K, CL, CA T, CA I)','15 ','0'), ('058','EPSTEIN BARR IGG','8 ','0'), ('059','EPSTEIN BARR IGM','8 ','0'), ('060','ESPERMOCULTIVO','20 ','0'), ('061','ESTRADIOL','8 ','1'), ('062','EXUDADO FARÖNGEO + ANTIBIOGRAMA','20 ','0'), ('063','EXUDADO NASAL + ANTIBIOGRAMA','20 ','0'), ('064','F.S.H','8 ','1'), ('065','FACTOR REUMATOIDEO','4','0'), ('066','FENOBARBITAL','25','0'), ('067','FERRITINA SERICA','8','0'), ('068','FIBRINOGENO','4','0'), ('069','FOSFATASA ALCALINA','4','0'), ('070','FàSFORO','4','0'), ('071','FàSFORO EN ORINA','4','0'), ('072','GAMMA TEST','4','0'), ('073','GLICEMIA EN AYUNAS','3','1'), ('074','GLICEMIA POST PANDRIAL','3','0'), ('075','H.I.V (4TA GENERACIÓN)','6','0'), ('076','HDL COLESTEROL','3','0'), ('077','HECES DIRECTA','3','1'), ('078','HELICOBACTER PILORY IGG','8','0'), ('079','HELICOBACTER PILORY IGM','8','0'), ('080','HELICOBACTER PYLORI EN HECES','8','0'), ('081','HEMATOLOGÍA + PLAQUETAS','3','1'), ('082','HEMOCULTIVO + ANTIBIOGRAMA','20','0'), ('083','HEMOGLOBINA GLICOSILADA A1C','11','0'), ('084','HEPATITIS A IGM','5','0'), ('085','HEPATITIS B (CORE)','3','0'), ('086','HEPATITIS B (HBS AG)','3','0'), ('087','HEPATITIS C','3','0'), ('088','HERPES SIMPLE IGG (1+2)','10','0'), ('089','HERPES SIMPLE IGM (1+2)','10','0'), ('090','HIERRO SÉRICO','4','0'), ('091','HORMONA ANTINULERIANA','20','0'), ('092','INMUNOGLOBULINA IGA','7','0'), ('093','INMUNOGLOBULINA IGE','8','0'), ('094','INMUNOGLOBULINA IGG','7','0'), ('095','INMUNOGLOBULINA IGM','7','0'), ('096','INSULINA BASAL','8','1'), ('097','INSULINA POSTPANDRIAL','8','0'), ('098','L.H','8','1'), ('099','LIPASA','8','0'), ('100','MAGNESIO','4','0'), ('101','MAGNESIO EN ORINA','4','0'), ('102','MARCADORES CARDIACOS CUALITATIVOS','10','0'), ('103','MARIHUANA','4','0'), ('104','MICROALBUMINURIA','10','0'), ('105','MULTITEST RESPIRATORIO','35','0'), ('106','ORINA COMPLETA','3','1'), ('107','P.C.R. ULTRASENSIBLE','6','0'), ('108','PARATHORMONA (PTH)','20','0'), ('109','PEPTIDO C','15','0'), ('110','PPTIDO NATRIURTICO','25','0'), ('111','PERFIL AUTOINMUNE','30','0'), ('112','PERFIL CELÖACO','45','0'), ('113','PERFIL LIPÖDICO (COL,TRI,HDL,LDL,VLDL)','15','0'), ('114','PH Y AZéCARES REDUCTORES','3','0'), ('115','PH Y GASES ARTERIALES','31','0'), ('116','POTASIO','3','0'), ('117','PROCALCITONINA','11','0'), ('118','PROGESTERONA','8','0'), ('119','PROLACTINA','8','1'), ('120','PROTEÖNA C REACTIVA','5','0'), ('121','PROTEINURIA EN ORINA','4','0'), ('122','PROTEOGRAMA','6','0'), ('123','REACCIàN WIDAL (ANTIGENO FEBRIL)','4','0'), ('124','RECUENTO DE EOSINàFILOS EN MOCO NASAL','3','0'), ('125','RELACIàN µCIDO éRICO / CREATININA','6','0'), ('126','RELACIàN CALCIO / CREATININA','6','0'), ('127','RETICULOCITOS','3','0'), ('128','ROTAVIRUS','4','0'), ('129','RUBEOLA IGG (MICRO ELISA)','10','0'), ('130','RUBEOLA IGM (MICRO ELISA)','10','0'), ('131','SANGRE OCULTA EN HECES','3','0'), ('132','T.I.B.C % DE SATURACIàN','4','0'), ('133','T.S.H','8 ','1'), ('134','T3 LIBRE','8','1'), ('135','T3 TOTAL','8','0'), ('136','T4 LIBRE','8','1'), ('137','T4 TOTAL','8','0'), ('138','TEST DE ADENOVIRUS / ROTAVIRUS','5','0'), ('139','TEST DE GIARDIA, CRYPTO, ENTAMOEBA','18','0'), ('140','TEST DE TOLERANCIA GLUCOSADA','21','0'), ('141','TESTOSTERONA LIBRE','8','1'), ('142','TESTOSTERONA TOTAL','8','1'), ('143','TIEMPO DE COAGULACIÓN','4','0'), ('144','TIEMPO DE PROTOMBINA','4','0'), ('145','TIEMPO DE SANGRÖA','4','0'), ('146','TIEMPO PARCIAL DE TROMBOPLASTINA','4','0'), ('147','TOXOPLASMA IGG','8','0'), ('148','TOXOPLASMA IGM','8','0'), ('149','TOXOTEST HIA','5','0'), ('150','TRANSAMINASA OXALACÉTICA','4','0'), ('151','TRIGLICERIDOS','3','0'), ('152','TRANSAMINASA PIRéVICA','4','0'), ('153','TRIGLICRIDOS','3','0'), ('154','TRIGOGLOBULINA (TG)','15','0'), ('155','TROPONINA I CUALITATIVA','8','0'), ('156','TROPONINA I CUANTITATIVA','10','0'), ('157','TROPONINA T CUANTITATIVA','10','0'), ('158','ÚREA','3','1'), ('159','UROCULTIVO + ANTIBIOGRAMA','20','0'), ('160','V.D.R.L','4','0'), ('161','VELOCIDAD DE SEDIMENTACIàN GLOBULAR','3','0'), ('162','VITAMINA B12','25','0'), ('163','VITAMINA D','12','0'), ('E01','ANTICUERPOS ATÖPICOS','39','0'), ('E02','CONCENTRADO GLOBULAR 300CC','193','0'), ('E03','CONCENTRADO PLAQUETARIO','105','0'), ('E04','COOMBS DIRECTO(BANCO DE SANGRE)','25','0'), ('E05','COOMBS INDIRECTO','35','0'), ('E06','CRIOPRECIPITADO','105','0'), ('E07','EQUIPO DE TRANSFUSIÓN DE TRASEGAR','26','0'), ('E08','PLASMA FRESCO','105','0'), ('E09','TIPEAJE PRE NATAL','30','0'), ('E10','TIPIAJE Y FACTOR RH','20','0'), ('E11','SANGRE PREPARADA Y NO ADMINISTRADA','40', '0')`

    const queryAdd =`INSERT INTO ${tableName} (CodService, Description, Cost, Avalible) VALUES`
    try {
        const connection = getConnection()
        connection.query(`${queryAdd}${addServices} `, (err,result) => {
            if(result){
                res.json(result)
            } else {
                res.json({message: err, success: false})
            }
        });
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const getServicesAvalible = async (req, res) =>{
    const queryGetAvalible =`SELECT IdService, CodService, Description, Cost FROM ${tableName} WHERE Avalible = 1`;
    try {
        const connection = getConnection()
        connection.query(queryGetAvalible, (err, result) => {
            if(result){
                res.json(result)
            } else {
                res.json({message: err, success: false})
            }
        })
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    getServices,
    getServicesAvalible,
    insertServices
}

