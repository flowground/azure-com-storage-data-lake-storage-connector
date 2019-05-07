/**
 * Auto-generated action file for "Azure Data Lake Storage" API.
 *
 * Generated at: 2019-05-07T14:39:16.269Z
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
 * Operation: 'Path_Create'
 * Endpoint Path: '/{filesystem}/{path}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "resource",
    "continuation",
    "mode",
    "Cache-Control",
    "Content-Encoding",
    "Content-Language",
    "Content-Disposition",
    "x-ms-cache-control",
    "x-ms-content-type",
    "x-ms-content-encoding",
    "x-ms-content-language",
    "x-ms-content-disposition",
    "x-ms-rename-source",
    "x-ms-lease-id",
    "x-ms-source-lease-id",
    "x-ms-properties",
    "x-ms-permissions",
    "x-ms-umask",
    "If-Match",
    "If-None-Match",
    "If-Modified-Since",
    "If-Unmodified-Since",
    "x-ms-source-if-match",
    "x-ms-source-if-none-match",
    "x-ms-source-if-modified-since",
    "x-ms-source-if-unmodified-since"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "resource": "resource",
    "continuation": "continuation",
    "mode": "mode",
    "Cache_Control": "Cache-Control",
    "Content_Encoding": "Content-Encoding",
    "Content_Language": "Content-Language",
    "Content_Disposition": "Content-Disposition",
    "x_ms_cache_control": "x-ms-cache-control",
    "x_ms_content_type": "x-ms-content-type",
    "x_ms_content_encoding": "x-ms-content-encoding",
    "x_ms_content_language": "x-ms-content-language",
    "x_ms_content_disposition": "x-ms-content-disposition",
    "x_ms_rename_source": "x-ms-rename-source",
    "x_ms_lease_id": "x-ms-lease-id",
    "x_ms_source_lease_id": "x-ms-source-lease-id",
    "x_ms_properties": "x-ms-properties",
    "x_ms_permissions": "x-ms-permissions",
    "x_ms_umask": "x-ms-umask",
    "If_Match": "If-Match",
    "If_None_Match": "If-None-Match",
    "If_Modified_Since": "If-Modified-Since",
    "If_Unmodified_Since": "If-Unmodified-Since",
    "x_ms_source_if_match": "x-ms-source-if-match",
    "x_ms_source_if_none_match": "x-ms-source-if-none-match",
    "x_ms_source_if_modified_since": "x-ms-source-if-modified-since",
    "x_ms_source_if_unmodified_since": "x-ms-source-if-unmodified-since"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

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
        operationId: 'Path_Create',
        pathName: '/{filesystem}/{path}',
        method: 'put',
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