// Code generated by protoc-gen-volcengine-sdk
// source: listPullToPushTask
// DO NOT EDIT!
<?php
require('../../vendor/autoload.php');

$client = Volc\Service\Live\Live::getInstance();
$client->setAccessKey('your ak');
$client->setSecretKey('your sk');

$request = new Volc\Service\Live\Models\Request\ListPullToPushTaskRequest();
$request->setPage(0);
$request->setSize(0);
$request->setTitle("your Title");


$response = new Volc\Service\Live\Models\Response\ListPullToPushTaskResponse();
try {
    $response = $client->listPullToPushTask($request);
} catch (Exception $e) {
    echo $e, "\n";
} catch (Throwable $e) {
    echo $e, "\n";
}
if ($response != null && $response->getResponseMetadata() != null && $response->getResponseMetadata()->getError() != null) {
    echo $response->getResponseMetadata()->getError()->serializeToJsonString(), "\n";
} else {
    echo $response->serializeToJsonString(), "\n";
}
