var { soap } = require('strong-soap');
var path = require('path');

//var url = path.join(__dirname, "wsdl", "SI_ISO_MGB_BAPI_PARTNER_CREATE_outboundService_dev.wsdl");
var url = path.join(__dirname, "wsdl", "SI_Ping_OutboundService.wsdl");
//url = 'http://www.dneonline.com/calculator.asmx?wsdl'
var username = "T_SI_MONPING"
var password = "a09KIqg?9ofO"

var auth = "Basic " + Buffer.from(username + ":" + password).toString("base64");

//var username = "T_SI_IWF_T"
//var password = "N}+XyAE]A]>WcfnlR3D-gRyCHRbdyk5]+w\\f4hhm"


exports.test = function () {
    url_ = 'https://sapinterfaces-qas2.baywa.com/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_Ping_over_External_AAE&receiverParty=&receiverService=&interface=SI_Ping_Outbound&interfaceNamespace=urn:Ping';
    var request = require('request');
    var xml =         `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:Ping">
    <soapenv:Header/>
    <soapenv:Body>
        <urn:MT_Ping>
            <!--Optional:-->
            <Ping>?</Ping>
        </urn:MT_Ping>
    </soapenv:Body>
</soapenv:Envelope>`


    var options = {
        url: 'http://localhost:8088/mockSI_Ping_OutboundBinding?wsdl',
        method: 'POST',
        body: xml,
        headers: {
            'Content-Type': 'text/xml;charset=utf-8',
            'Accept-Encoding': 'gzip,deflate',
            'Content-Length': xml.length,
            'SOAPAction': "http://sap.com/xi/WebService/soap1.1",
            'Authorization': auth,
        }
    };

    let callback = (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log('Raw result', body);
            var xml2js = require('xml2js');
            var parser = new xml2js.Parser({ explicitArray: false, trim: true });
            parser.parseString(body, (err, result) => {
                console.log('JSON result', result);
            });
        };
        console.log('E', response.statusCode, response.statusMessage);
    };
    request(options, callback);


    


    /*
    var args = "";
    //var args = {"intA": 3, "intB": 5}
    const soap = require('soap');
    
    soap.createClient(url, function (err, soapClient) {
        if (err) {
            console.log("error", err);
        }
        //soapClient.setSecurity(new soap.BasicAuthSecurity(username, password));
        soapClient.addHttpHeader('Authorization', auth);
        //console.log(soapClient)
        soapClient.SI_Ping_Outbound(args, function (err, result, raw, headers) {
            if (err) {
                console.log("Security_Authenticate error", err);
            }
            console.log(result)
        })
    })
    */
    // Creates the client which is returned in the callback.
    /*soap.createClient(url, (err, client) => {
        if (err) throw err;
        //console.log(client)
        client.setEndpoint("https://sapinterfaces-qas2.baywa.com/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_Ping_over_External_AAE&receiverParty=&receiverService=&interface=SI_Ping_Outbound&interfaceNamespace=urn%3APing");
        client.setSecurity(new soap.BasicAuthSecurity(username, password));
        client.SI_Ping_Outbound(args, (err, result) => {
            console.log(`Result: ${"\n" + JSON.stringify(result)}`)
        })
    })*/

    /*
        soap.createClient(url, function(err, client) {
            //client.setSecurity(new soap.BasicAuthSecurity(username, password));
            //client.addHttpHeader('Authorization', auth);
            //client.SI_Ping_Outbound(args, function(err, result) {
            client.Add(args, function(err, result) {
                if (err) throw err;
                console.log(err);
                console.log(result);
                });
            });
        
    /*
        soap.createClient(url, function(err, client) {
            client.describe()
            //soap.createClient(url, { wsdl_headers: { Authorization: auth } },  function(err, client) {
            //client.setSecurity(new soap.BasicAuthSecurity(username, password));
            //if (err) throw err;
            //client.addHttpHeader('Authorization', auth);
            client.SI_Ping_Outbound("", function(err, result) {
            ///client.SI_ISO_MGB_BAPI_PARTNER_CREATE_outbound(args, function(err, result) {
                if (err) throw err;
                console.log("in")
                console.log(err);
                console.log(result);
            });
        });*/

}


exports.sendMask = function (mask) {
    console.log(mask)
}
