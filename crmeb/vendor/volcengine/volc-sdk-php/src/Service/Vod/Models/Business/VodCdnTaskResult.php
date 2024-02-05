<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vod/business/vod_cdn.proto

namespace Volc\Service\Vod\Models\Business;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Vod.Models.Business.VodCdnTaskResult</code>
 */
class VodCdnTaskResult extends \Google\Protobuf\Internal\Message
{
    /**
     *结果总数
     *
     * Generated from protobuf field <code>int32 TotalCount = 1;</code>
     */
    protected $TotalCount = 0;
    /**
     *页码
     *
     * Generated from protobuf field <code>int32 PageNum = 2;</code>
     */
    protected $PageNum = 0;
    /**
     *页面大小
     *
     * Generated from protobuf field <code>int32 PageSize = 3;</code>
     */
    protected $PageSize = 0;
    /**
     *任务列表
     *
     * Generated from protobuf field <code>repeated .Volcengine.Vod.Models.Business.VodContentInfo ContentInfos = 4;</code>
     */
    private $ContentInfos;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $TotalCount
     *          结果总数
     *     @type int $PageNum
     *          页码
     *     @type int $PageSize
     *          页面大小
     *     @type \Volc\Service\Vod\Models\Business\VodContentInfo[]|\Google\Protobuf\Internal\RepeatedField $ContentInfos
     *          任务列表
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Vod\Models\GPBMetadata\VodCdn::initOnce();
        parent::__construct($data);
    }

    /**
     *结果总数
     *
     * Generated from protobuf field <code>int32 TotalCount = 1;</code>
     * @return int
     */
    public function getTotalCount()
    {
        return $this->TotalCount;
    }

    /**
     *结果总数
     *
     * Generated from protobuf field <code>int32 TotalCount = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setTotalCount($var)
    {
        GPBUtil::checkInt32($var);
        $this->TotalCount = $var;

        return $this;
    }

    /**
     *页码
     *
     * Generated from protobuf field <code>int32 PageNum = 2;</code>
     * @return int
     */
    public function getPageNum()
    {
        return $this->PageNum;
    }

    /**
     *页码
     *
     * Generated from protobuf field <code>int32 PageNum = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setPageNum($var)
    {
        GPBUtil::checkInt32($var);
        $this->PageNum = $var;

        return $this;
    }

    /**
     *页面大小
     *
     * Generated from protobuf field <code>int32 PageSize = 3;</code>
     * @return int
     */
    public function getPageSize()
    {
        return $this->PageSize;
    }

    /**
     *页面大小
     *
     * Generated from protobuf field <code>int32 PageSize = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setPageSize($var)
    {
        GPBUtil::checkInt32($var);
        $this->PageSize = $var;

        return $this;
    }

    /**
     *任务列表
     *
     * Generated from protobuf field <code>repeated .Volcengine.Vod.Models.Business.VodContentInfo ContentInfos = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getContentInfos()
    {
        return $this->ContentInfos;
    }

    /**
     *任务列表
     *
     * Generated from protobuf field <code>repeated .Volcengine.Vod.Models.Business.VodContentInfo ContentInfos = 4;</code>
     * @param \Volc\Service\Vod\Models\Business\VodContentInfo[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setContentInfos($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Volc\Service\Vod\Models\Business\VodContentInfo::class);
        $this->ContentInfos = $arr;

        return $this;
    }

}

