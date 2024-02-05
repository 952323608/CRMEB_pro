<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live/business/stream_manage.proto

namespace Volc\Service\Live\Models\Business;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Live.Models.Business.StreamStateInfo</code>
 */
class StreamStateInfo extends \Google\Protobuf\Internal\Message
{
    /**
     * 直播流状态。
     *<li>online：在线流；
     *<li>offline：历史流；
     *<li>forbidden：禁推流。
     *
     * Generated from protobuf field <code>string stream_state = 1;</code>
     */
    protected $stream_state = '';
    /**
     * 直播流类型。
     *<li>push：直推直拉；
     *<li>pull：回源拉流。
     *
     * Generated from protobuf field <code>string type = 2;</code>
     */
    protected $type = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $stream_state
     *           直播流状态。
     *          <li>online：在线流；
     *          <li>offline：历史流；
     *          <li>forbidden：禁推流。
     *     @type string $type
     *           直播流类型。
     *          <li>push：直推直拉；
     *          <li>pull：回源拉流。
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Live\Models\GPBMetadata\StreamManage::initOnce();
        parent::__construct($data);
    }

    /**
     * 直播流状态。
     *<li>online：在线流；
     *<li>offline：历史流；
     *<li>forbidden：禁推流。
     *
     * Generated from protobuf field <code>string stream_state = 1;</code>
     * @return string
     */
    public function getStreamState()
    {
        return $this->stream_state;
    }

    /**
     * 直播流状态。
     *<li>online：在线流；
     *<li>offline：历史流；
     *<li>forbidden：禁推流。
     *
     * Generated from protobuf field <code>string stream_state = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setStreamState($var)
    {
        GPBUtil::checkString($var, True);
        $this->stream_state = $var;

        return $this;
    }

    /**
     * 直播流类型。
     *<li>push：直推直拉；
     *<li>pull：回源拉流。
     *
     * Generated from protobuf field <code>string type = 2;</code>
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * 直播流类型。
     *<li>push：直推直拉；
     *<li>pull：回源拉流。
     *
     * Generated from protobuf field <code>string type = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setType($var)
    {
        GPBUtil::checkString($var, True);
        $this->type = $var;

        return $this;
    }

}

