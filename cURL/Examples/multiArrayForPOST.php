<?php
/**
 * Created by PhpStorm.
 * User: Eivydas
 * Date: 2015-01-14
 * Time: 23:24
 */



function http_build_query_for_curl( $arrays, &$new = array(), $prefix = null ) {

    if ( is_object( $arrays ) ) {
        $arrays = get_object_vars( $arrays );
    }

    foreach ( $arrays as $key => $value ) {
        $k = isset( $prefix ) ? $prefix . '[' . $key . ']' : $key;
        if ( is_array( $value ) OR is_object( $value )  ) {
            http_build_query_for_curl( $value, $new, $k );
        } else {
            $new[$k] = $value;
        }
    }
}

$post_data = array (
    'showgooglemaps' => 1,
    'gm_lat' => 54.68939,
    'gm_lng' => 25.280020000000036,
    'house_number' => '',
    'data' => array(
        'id' => array(
            'adresas_1' => 228822, // Miestas
            'adresas_2' => '', // Savivaldybė
            'adresas_3' => '', // Gatvė
            'kambariu_skaicius_1' => 100018877, // Kambarių skaičius
            'busto_bukle' => 100009023,
            'buto_aukstas_1' => 100018897,
            'nt_butai_bukle_nuomoja' => 126702302,
            'aukstu_skaicius_pastate_1' => 100018896,
            'ypatybes' => array(
                0 => 100011151,
                1 => 100011148,
                2 => 100011155,
                3 => 100011157,
                4 => 100011150,
                5 => 100011152
            ),
            'iranga' => array(
                0 => 100011176,
                1 => 100011185,
                2 => 100011183,
                3 => 100011177,
                4 => 100011180,
                5 => 100011173,
                6 => 100011182
            ),
            'sildymas_1' => 119906742,
            'sildymas_2' => 100021913,
            'nuomotojas' => 100011023
        ),
        'text' => array(
            'kitos_pastabos' => 'Kitos pastabos tekstas', // Skelbimo tekstas
            'busto_plotas_m_1' => 32,
            'statybos_metai' => 2007,
            'kaina_1' => 1234, // Eurais
            'kaina_4' => 4261, // Litais
            'kaina_2' => 'EUR',
            'mobilus_telefonas' => 68743214
        ),
        'ypatybes' => array(
            0 => ''
        ),
        'iranga' => array(
            0 => ''
        )
    ),
    'video_id' => '725WlG1idPc', // YouTube video ID
    'packet' => array( //Mokamos paslaugos?
        43 => array(
            'price' => 59212,
        ),
        'value' => array(
            'mini_packet' => 0,
            'optimal_packet' => 0,
            'vip_packet' => 0
        ),
        44 => array(
            'price' => 59222,
        ),
        45 => array(
            'price' => 59232,
        ),
        104 => array(
            'price' => 61182,
        ),
        105 => array(
            'price' => 61192,
        ),
        117 => array(
            'price' => 61432,
        )
    ),
    'expire_time' => '',
    'current_time' => 1421260843, // TODO Gauti laiko kintamąjį
    'siteadvertise' => array(
        'value' => array(
            104 => 0,
            105 => 0,
            117 => 0
        )
    ),
    'mail' => array(
        'email' => 'el.pastas@gmail.com'
    ),
    'ntspecial' => 0, // Ar Su patentu, ar asmeniškai, ar įmonė turbūt
    'isEdit' => '',
    'isCreate' => 1,
    'comment' => 1, // Ar leidžiama komentuoti
    'ad_id' => 51875342, // TODO Gauti AD ID
    'category_id' => 1393
);


http_build_query_for_curl( $post_data, $post );

print_r($post);

