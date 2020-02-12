<?php

namespace Engine\Token;

class Token
{
    private $header = [];
    private $payload = [];
    private $secret;

    public function __construct()
    {
        
        $this->header = [
            "alg"   => "sha256", 
            "typ"   => "JWT",
            "end"   => $this->setEndToken(30) // параметр задается количеством дней(30)
        ];
        
        $this->secret = 'ztavruz';
    }

    public function createToken($user)
    {

        $header = $this->header;
        $alg = $header['alg'];
        $header = json_encode($header);
        $payload = [
            "id"    => $user['id'],
            'email' => $user['email'],
            'login' => $user['login']
        ];
        $payload = json_encode($payload);
        $secret = $this->secret;

        $header = base64_encode($header);
        $payload = base64_encode($payload);

        $signature = $header . "." . $payload;
        $signature = hash_hmac($alg, $signature, $secret);
        $signature = base64_encode($signature);

        $token = $header . "." . $payload . "." . $signature;

        return $token;
    }

    public function validateToken($token)
    {

        $arr = explode(".", $token);
        $str = $arr[0] . "." . $arr[1];
        $secret = $this->secret;

        if($this->relevanceTokenTime($arr[0]))
        {   
            $token = $this->parseToken($token);
            $header = $token['header'];

            $str = hash_hmac($header['alg'], $str, $secret);
            $str = base64_encode($str);
            $signature = $arr[2];

            $equal = hash_equals($str, $signature);

            return $equal;
        }

    }

    private function relevanceTokenTime($item)
    {
        $item = base64_decode($item);
        $item = json_decode($item, true);
        $endToken = $item['end'];
        $currentData = time();
        if($endToken > $currentData)
        {
            return true;
        }

        return false;
    }

    public function parseToken($token)
    {
        $arr = explode(".", $token);
        $header = $arr[0];
        $payload = $arr[1];
        $header = base64_decode($header);
        $payload = base64_decode($payload);
        $header = json_decode($header, true);
        $payload = json_decode($payload, true);
        
        $data = [];
        $data["header"]  = $header;
        $data["payload"] = $payload;

        return $data;
    }

    private function setEndToken($days)
    {
        $start = time();
        $srok  = $this->getDays($days);
        // $srok = 10;
        $result   = $start + $srok;
        return $result;
    }

    public function getDays($kolvo)
    {
        $result = 1*60*60*24*$kolvo;
        return $result;
    }
}