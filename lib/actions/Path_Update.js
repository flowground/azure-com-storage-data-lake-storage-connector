/**
 * Auto-generated action file for "Azure Data Lake Storage" API.
 *
 * Generated at: 2019-05-07T14:39:16.268Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-storage-data-lake-storage-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Path_Update'
 * Endpoint Path: '/{filesystem}/{path}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "action",
    "position",
    "retainUncommittedData",
    "close",
    "Content-Length",
    "x-ms-lease-id",
    "x-ms-cache-control",
    "x-ms-content-type",
    "x-ms-content-disposition",
    "x-ms-content-encoding",
    "x-ms-content-language",
    "x-ms-properties",
    "x-ms-owner",
    "x-ms-group",
    "x-ms-permissions",
    "x-ms-acl",
    "If-Match",
    "If-None-Match",
    "If-Modified-Since",
    "If-Unmodified-Since"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "action": "action",
    "position": "position",
    "retainUncommittedData": "retainUncommittedData",
    "close": "close",
    "Content_Length": "Content-Length",
    "x_ms_lease_id": "x-ms-lease-id",
    "x_ms_cache_control": "x-ms-cache-control",
    "x_ms_content_type": "x-ms-content-type",
    "x_ms_content_disposition": "x-ms-content-disposition",
    "x_ms_content_encoding": "x-ms-content-encoding",
    "x_ms_content_language": "x-ms-content-language",
    "x_ms_properties": "x-ms-properties",
    "x_ms_owner": "x-ms-owner",
    "x_ms_group": "x-ms-group",
    "x_ms_permissions": "x-ms-permissions",
    "x_ms_acl": "x-ms-acl",
    "If_Match": "If-Match",
    "If_None_Match": "If-None-Match",
    "If_Modified_Since": "If-Modified-Since",
    "If_Unmodified_Since": "If-Unmodified-Since",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'Path_Update',
        pathName: '/{filesystem}/{path}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}