import React, { useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const data = {
  Wb2_symbolLockI: [
    {
      messageLogId: "jEuKIBSlxUaMoojket3Fm",
      dateTime: "2021-03-02T15:50:46.812Z",
      measurement: "Wb2_symbolLockI",
      value: "2.8815818999750173"
    },
    {
      messageLogId: "8_uzfuA5DOVpUf-P-4flw",
      dateTime: "2021-03-02T15:51:27.171Z",
      measurement: "Wb2_symbolLockI",
      value: "1.4330796492710172"
    },
    {
      messageLogId: "i4Ux8NtNwdrgCiucqYSM2",
      dateTime: "2021-03-02T15:51:39.401Z",
      measurement: "Wb2_symbolLockI",
      value: "5.902023730036721"
    },
    {
      messageLogId: "Z0UtmgvBxEB7LOmAxfB42",
      dateTime: "2021-03-02T15:51:56.225Z",
      measurement: "Wb2_symbolLockI",
      value: "0.10872922237955784"
    },
    {
      messageLogId: "zpiq_lI0Tj9H1wonXgCd8",
      dateTime: "2021-03-02T15:52:21.066Z",
      measurement: "Wb2_symbolLockI",
      value: "7.038294171085041"
    },
    {
      messageLogId: "6PkUU7b-C0iL_eTQqlmjs",
      dateTime: "2021-03-02T15:52:40.431Z",
      measurement: "Wb2_symbolLockI",
      value: "4.977374940675412"
    },
    {
      messageLogId: "MlDUtT8Andp7c4S4qXuGS",
      dateTime: "2021-03-02T15:52:54.203Z",
      measurement: "Wb2_symbolLockI",
      value: "3.0921603143040173"
    },
    {
      messageLogId: "xtl-WseMwkaIA8GoeMEg-",
      dateTime: "2021-03-02T15:53:04.182Z",
      measurement: "Wb2_symbolLockI",
      value: "3.611131756156901"
    },
    {
      messageLogId: "YqH2qMKtqtODI8hnof0n_",
      dateTime: "2021-03-02T15:53:40.444Z",
      measurement: "Wb2_symbolLockI",
      value: "2.0990557747312826"
    },
    {
      messageLogId: "GP0pv566D5KB67RDfptgp",
      dateTime: "2021-03-02T15:53:55.037Z",
      measurement: "Wb2_symbolLockI",
      value: "7.393824605308906"
    },
    {
      messageLogId: "CZqXgvnJYEsKXZ7fvgT8H",
      dateTime: "2021-03-02T15:54:06.234Z",
      measurement: "Wb2_symbolLockI",
      value: "0.5503270182642449"
    },
    {
      messageLogId: "iA-QcwEATdufBT0hb4inz",
      dateTime: "2021-03-02T15:54:26.452Z",
      measurement: "Wb2_symbolLockI",
      value: "7.9701307184333015"
    },
    {
      messageLogId: "RvAEkzS-Pg8Tcdxm17jxc",
      dateTime: "2021-03-02T15:54:55.151Z",
      measurement: "Wb2_symbolLockI",
      value: "2.1501847147246114"
    },
    {
      messageLogId: "yPJNgI_CKOOaL0X8kaden",
      dateTime: "2021-03-02T15:55:05.255Z",
      measurement: "Wb2_symbolLockI",
      value: "6.370112898746674"
    },
    {
      messageLogId: "7aBijJjxGQDqbhth-DsDQ",
      dateTime: "2021-03-02T15:55:19.681Z",
      measurement: "Wb2_symbolLockI",
      value: "0.8572630664713554"
    },
    {
      messageLogId: "Q5XQ8D5pj2m_cTXHqDH7E",
      dateTime: "2021-03-02T15:56:00.550Z",
      measurement: "Wb2_symbolLockI",
      value: "7.39246357599923"
    },
    {
      messageLogId: "lz-S1NWi145zegUuovK-R",
      dateTime: "2021-03-02T15:56:31.810Z",
      measurement: "Wb2_symbolLockI",
      value: "8.941030614997292"
    },
    {
      messageLogId: "E5a9lyDAuvYKjdfDfLwFa",
      dateTime: "2021-03-02T15:56:52.321Z",
      measurement: "Wb2_symbolLockI",
      value: "5.011487821128881"
    },
    {
      messageLogId: "DKkpeR0WCZwJnExJe-t06",
      dateTime: "2021-03-02T15:57:02.199Z",
      measurement: "Wb2_symbolLockI",
      value: "0.5120775788368644"
    },
    {
      messageLogId: "y5eu0ekRt4fGg_kfW1Npg",
      dateTime: "2021-03-02T15:57:08.164Z",
      measurement: "Wb2_symbolLockI",
      value: "3.0185446989195475"
    },
    {
      messageLogId: "c9GcRfqhe22AP71vxnU8z",
      dateTime: "2021-03-02T15:57:22.656Z",
      measurement: "Wb2_symbolLockI",
      value: "4.128423847252289"
    },
    {
      messageLogId: "MpJL3W-haPzq07jl2UJv3",
      dateTime: "2021-03-02T15:57:46.585Z",
      measurement: "Wb2_symbolLockI",
      value: "2.406432815732507"
    },
    {
      messageLogId: "zmA07IE6ZwRs_Tyb_UaJp",
      dateTime: "2021-03-02T15:58:03.498Z",
      measurement: "Wb2_symbolLockI",
      value: "3.733288800279729"
    },
    {
      messageLogId: "9gbBCvXHIYpg-dlpqzpZt",
      dateTime: "2021-03-02T15:58:21.961Z",
      measurement: "Wb2_symbolLockI",
      value: "8.974994319031287"
    },
    {
      messageLogId: "vC-ONkb-AqPaUc6qjqT61",
      dateTime: "2021-03-02T15:58:29.383Z",
      measurement: "Wb2_symbolLockI",
      value: "7.53872072332626"
    },
    {
      messageLogId: "K7CrgiKw3Vbn6r2i65gXs",
      dateTime: "2021-03-02T15:58:48.111Z",
      measurement: "Wb2_symbolLockI",
      value: "8.323844378561493"
    },
    {
      messageLogId: "vtqBqOmf5Vv6l8M6865Eo",
      dateTime: "2021-03-02T15:59:24.494Z",
      measurement: "Wb2_symbolLockI",
      value: "2.7803448729226257"
    },
    {
      messageLogId: "TDkW94WUJrULW-hxl_gAD",
      dateTime: "2021-03-02T15:59:31.893Z",
      measurement: "Wb2_symbolLockI",
      value: "0.7612996300321051"
    },
    {
      messageLogId: "p4AomeLCzC3vCALQAELbU",
      dateTime: "2021-03-02T15:59:37.172Z",
      measurement: "Wb2_symbolLockI",
      value: "0.13897673649106712"
    },
    {
      messageLogId: "BZNNqDM3TlXA5hDreMEap",
      dateTime: "2021-03-02T15:59:45.519Z",
      measurement: "Wb2_symbolLockI",
      value: "3.6589883036359656"
    },
    {
      messageLogId: "uADi54jJT0TECGhii4mvv",
      dateTime: "2021-03-02T15:59:57.742Z",
      measurement: "Wb2_symbolLockI",
      value: "6.136945187028132"
    },
    {
      messageLogId: "4VPmzlpPBWsDD_I_NEbV_",
      dateTime: "2021-03-02T16:00:10.708Z",
      measurement: "Wb2_symbolLockI",
      value: "7.555968740440852"
    },
    {
      messageLogId: "oELN4ODitJiJtMf7TNCw0",
      dateTime: "2021-03-02T16:00:29.770Z",
      measurement: "Wb2_symbolLockI",
      value: "3.0663599633073124"
    },
    {
      messageLogId: "A9BUwpAg_kCS-fQRSOAV6",
      dateTime: "2021-03-02T16:00:43.180Z",
      measurement: "Wb2_symbolLockI",
      value: "1.4750795000694854"
    }
  ],
  commanded_azimuth_deg: [
    {
      messageLogId: "Yt3IYegWgHm30_3qNH4XZ",
      dateTime: "2021-03-02T15:50:46.276Z",
      measurement: "commanded_azimuth_deg",
      value: "1.975814994430316"
    },
    {
      messageLogId: "yesj2DwuQUemjoneT5Xxt",
      dateTime: "2021-03-02T15:50:55.269Z",
      measurement: "commanded_azimuth_deg",
      value: "2.8035106800654357"
    },
    {
      messageLogId: "m-hon50Vq9XVP7zvdWA4a",
      dateTime: "2021-03-02T15:51:14.641Z",
      measurement: "commanded_azimuth_deg",
      value: "2.370741889514531"
    },
    {
      messageLogId: "EOJPhdbxtpmLXOdSvhv2P",
      dateTime: "2021-03-02T15:51:22.427Z",
      measurement: "commanded_azimuth_deg",
      value: "2.1856174066532956"
    },
    {
      messageLogId: "8Azo2fLK_WuEaiZEJpMv4",
      dateTime: "2021-03-02T15:51:52.302Z",
      measurement: "commanded_azimuth_deg",
      value: "1.8089114645420614"
    },
    {
      messageLogId: "LS2EpBq14Ahfb5qxlMgNb",
      dateTime: "2021-03-02T15:52:24.153Z",
      measurement: "commanded_azimuth_deg",
      value: "2.7124719992973874"
    },
    {
      messageLogId: "jLSZNDlcSrWNjOQh_02A1",
      dateTime: "2021-03-02T15:52:41.947Z",
      measurement: "commanded_azimuth_deg",
      value: "0.25626875027372575"
    },
    {
      messageLogId: "4_t25LyMmgy5iofIFIOC8",
      dateTime: "2021-03-02T15:53:02.211Z",
      measurement: "commanded_azimuth_deg",
      value: "0.8013866133787295"
    },
    {
      messageLogId: "AmfM0eEPK2orsQBbVn2kC",
      dateTime: "2021-03-02T15:53:15.400Z",
      measurement: "commanded_azimuth_deg",
      value: "2.4239011942455644"
    },
    {
      messageLogId: "oKwP5eT6e-Bf1i69YDUrd",
      dateTime: "2021-03-02T15:53:33.339Z",
      measurement: "commanded_azimuth_deg",
      value: "1.9296874531125403"
    },
    {
      messageLogId: "KQ6sjdOg9Er82UJ3nzesU",
      dateTime: "2021-03-02T15:54:02.491Z",
      measurement: "commanded_azimuth_deg",
      value: "0.18233441017474616"
    },
    {
      messageLogId: "0RxsZoStAzzoIp1QZueSJ",
      dateTime: "2021-03-02T15:54:33.304Z",
      measurement: "commanded_azimuth_deg",
      value: "0.7825985383181532"
    },
    {
      messageLogId: "KolWt4jmv1n4TsMcRP6uM",
      dateTime: "2021-03-02T15:54:58.138Z",
      measurement: "commanded_azimuth_deg",
      value: "2.907646336068795"
    },
    {
      messageLogId: "1AsibR-5hujOn8C3h7kcD",
      dateTime: "2021-03-02T15:55:23.484Z",
      measurement: "commanded_azimuth_deg",
      value: "1.6988401295377127"
    },
    {
      messageLogId: "4WDBJNXCKMDNatX_IQiYb",
      dateTime: "2021-03-02T15:55:41.300Z",
      measurement: "commanded_azimuth_deg",
      value: "0.06388587971895854"
    },
    {
      messageLogId: "1ptgM_wjwgEug3Topao8p",
      dateTime: "2021-03-02T15:55:50.541Z",
      measurement: "commanded_azimuth_deg",
      value: "1.2491207539670819"
    },
    {
      messageLogId: "af-M9el2ToTYbyZ5-66Bi",
      dateTime: "2021-03-02T15:56:05.401Z",
      measurement: "commanded_azimuth_deg",
      value: "2.4523727323840783"
    },
    {
      messageLogId: "H5rtV-JnjpSDKrjkcaucS",
      dateTime: "2021-03-02T15:56:40.460Z",
      measurement: "commanded_azimuth_deg",
      value: "1.5132734893241317"
    },
    {
      messageLogId: "lGh0GZgiApAngI-3Yn2X4",
      dateTime: "2021-03-02T15:57:05.452Z",
      measurement: "commanded_azimuth_deg",
      value: "2.702677919218569"
    },
    {
      messageLogId: "LF6wTOuYUfm9dL7pf44MM",
      dateTime: "2021-03-02T15:57:19.738Z",
      measurement: "commanded_azimuth_deg",
      value: "2.113504902866709"
    },
    {
      messageLogId: "FEZAxGbpUMz2GPG7LFmj3",
      dateTime: "2021-03-02T15:57:27.144Z",
      measurement: "commanded_azimuth_deg",
      value: "0.7073343818108954"
    },
    {
      messageLogId: "oBbpShHUNaSzPinIi_1T_",
      dateTime: "2021-03-02T15:57:52.535Z",
      measurement: "commanded_azimuth_deg",
      value: "1.6762393728905258"
    },
    {
      messageLogId: "L-wDhCaPazidRsuZ-PhCF",
      dateTime: "2021-03-02T15:58:05.805Z",
      measurement: "commanded_azimuth_deg",
      value: "1.4055747844148005"
    },
    {
      messageLogId: "Kq3lHuE7RCUkOCQojbDwt",
      dateTime: "2021-03-02T15:58:26.534Z",
      measurement: "commanded_azimuth_deg",
      value: "2.4386421542351155"
    },
    {
      messageLogId: "QesARwyOI2evgD-CEsKtL",
      dateTime: "2021-03-02T15:58:45.663Z",
      measurement: "commanded_azimuth_deg",
      value: "2.0798677472855545"
    },
    {
      messageLogId: "TbFInl8q7PCwA8gYfTcmF",
      dateTime: "2021-03-02T15:58:54.064Z",
      measurement: "commanded_azimuth_deg",
      value: "1.4825403594618383"
    },
    {
      messageLogId: "YK0TCm2hyh2yFkEITlG5Y",
      dateTime: "2021-03-02T15:59:04.768Z",
      measurement: "commanded_azimuth_deg",
      value: "0.026918233800330316"
    },
    {
      messageLogId: "9o0mSTXcI73qmEM51gqZG",
      dateTime: "2021-03-02T15:59:38.529Z",
      measurement: "commanded_azimuth_deg",
      value: "0.8580860901709668"
    },
    {
      messageLogId: "5uxjut-1SSxsFH3JGcz1x",
      dateTime: "2021-03-02T15:59:48.235Z",
      measurement: "commanded_azimuth_deg",
      value: "2.2249703800109346"
    },
    {
      messageLogId: "TKABHxD_Vlg8yk4ZsgxOM",
      dateTime: "2021-03-02T16:00:05.313Z",
      measurement: "commanded_azimuth_deg",
      value: "0.4105276184119482"
    },
    {
      messageLogId: "KGAn0bw6ro-Oc_0Rwi4X0",
      dateTime: "2021-03-02T16:00:13.312Z",
      measurement: "commanded_azimuth_deg",
      value: "0.832711419761002"
    },
    {
      messageLogId: "znyZOrpnILdAhcvYwyYEB",
      dateTime: "2021-03-02T16:00:26.300Z",
      measurement: "commanded_azimuth_deg",
      value: "2.910217489117349"
    },
    {
      messageLogId: "LyYXJqiViW0IkkMfzaoFP",
      dateTime: "2021-03-02T16:00:41.603Z",
      measurement: "commanded_azimuth_deg",
      value: "2.4751777720490944"
    }
  ],
  Wb1_esnoQ: [
    {
      messageLogId: "uLmReOjJeNytI9Q6E7B1D",
      dateTime: "2021-03-02T15:50:52.592Z",
      measurement: "Wb1_esnoQ",
      value: "1.1859138752882172"
    },
    {
      messageLogId: "v8fO3s26rJp-YOyRpha_P",
      dateTime: "2021-03-02T15:51:19.849Z",
      measurement: "Wb1_esnoQ",
      value: "0.530265849379481"
    },
    {
      messageLogId: "4FWvLr50Ons5ACI1nTuyc",
      dateTime: "2021-03-02T15:51:35.328Z",
      measurement: "Wb1_esnoQ",
      value: "6.2046098714605975"
    },
    {
      messageLogId: "FubLvvCvSjq1GKGdKfdRU",
      dateTime: "2021-03-02T15:51:50.578Z",
      measurement: "Wb1_esnoQ",
      value: "6.337137554913058"
    },
    {
      messageLogId: "QbXN-e-rHf59CSKicpVJV",
      dateTime: "2021-03-02T15:52:17.397Z",
      measurement: "Wb1_esnoQ",
      value: "0.3627579939627036"
    },
    {
      messageLogId: "S8R_kOa_bUSaJ5OvtjC77",
      dateTime: "2021-03-02T15:52:27.754Z",
      measurement: "Wb1_esnoQ",
      value: "4.696612410284585"
    },
    {
      messageLogId: "OsXF3nklYOKXMfbudSTr-",
      dateTime: "2021-03-02T15:52:50.183Z",
      measurement: "Wb1_esnoQ",
      value: "3.4627226265190174"
    },
    {
      messageLogId: "JFk_pxxfcRStJdo5mVh_8",
      dateTime: "2021-03-02T15:53:03.652Z",
      measurement: "Wb1_esnoQ",
      value: "3.608728149053369"
    },
    {
      messageLogId: "q_cLqYTo3m9oejkJw5cRB",
      dateTime: "2021-03-02T15:53:49.530Z",
      measurement: "Wb1_esnoQ",
      value: "5.672990545523722"
    },
    {
      messageLogId: "VDOD0yJcVDuTgAYU1pCA6",
      dateTime: "2021-03-02T15:53:59.048Z",
      measurement: "Wb1_esnoQ",
      value: "3.883827233879013"
    },
    {
      messageLogId: "Vd5j2W3aypOkd5Hj9-qP1",
      dateTime: "2021-03-02T15:54:32.459Z",
      measurement: "Wb1_esnoQ",
      value: "0.9548397472604666"
    },
    {
      messageLogId: "2FEqjEF6neZrWUbI4u0zb",
      dateTime: "2021-03-02T15:54:41.374Z",
      measurement: "Wb1_esnoQ",
      value: "4.4160303695244565"
    },
    {
      messageLogId: "Wb3mqOaZLPUBQqbRcB4Ry",
      dateTime: "2021-03-02T15:54:52.552Z",
      measurement: "Wb1_esnoQ",
      value: "6.874571543935429"
    },
    {
      messageLogId: "aU_vTh68Hw9V09WBbD_4C",
      dateTime: "2021-03-02T15:55:28.178Z",
      measurement: "Wb1_esnoQ",
      value: "6.034287526952244"
    },
    {
      messageLogId: "7naphOohvbvksN_NA34NA",
      dateTime: "2021-03-02T15:56:23.678Z",
      measurement: "Wb1_esnoQ",
      value: "2.9925070317689726"
    },
    {
      messageLogId: "MZ0t0Dp4gWzabTlTPT5c1",
      dateTime: "2021-03-02T15:56:53.604Z",
      measurement: "Wb1_esnoQ",
      value: "3.2301954788090863"
    },
    {
      messageLogId: "jmshRDdEHBS4w3wbrfvRL",
      dateTime: "2021-03-02T15:57:18.176Z",
      measurement: "Wb1_esnoQ",
      value: "2.2530035028863544"
    },
    {
      messageLogId: "0FfvzUdb6VL3xbh5x2Onw",
      dateTime: "2021-03-02T15:57:39.149Z",
      measurement: "Wb1_esnoQ",
      value: "5.124960580963342"
    },
    {
      messageLogId: "xKCvOu6bZSw9OJYdm6YoI",
      dateTime: "2021-03-02T15:57:59.228Z",
      measurement: "Wb1_esnoQ",
      value: "5.224481691087546"
    },
    {
      messageLogId: "Ue-K2dGXujeVPTFO30XXw",
      dateTime: "2021-03-02T15:58:11.886Z",
      measurement: "Wb1_esnoQ",
      value: "6.242641673460387"
    },
    {
      messageLogId: "AzuJJ5mzpOZS-oNFeihLy",
      dateTime: "2021-03-02T15:58:26.363Z",
      measurement: "Wb1_esnoQ",
      value: "2.173457554689996"
    },
    {
      messageLogId: "K8a72FISyR1dm6Lvl4oNT",
      dateTime: "2021-03-02T15:58:35.107Z",
      measurement: "Wb1_esnoQ",
      value: "0.5795707964703175"
    },
    {
      messageLogId: "hhUKunBZNv7bJlGx8G9zz",
      dateTime: "2021-03-02T15:58:58.905Z",
      measurement: "Wb1_esnoQ",
      value: "2.8846596105874696"
    },
    {
      messageLogId: "aSBgCnDkBqy7HCBroANBv",
      dateTime: "2021-03-02T15:59:14.211Z",
      measurement: "Wb1_esnoQ",
      value: "3.8251993757531384"
    },
    {
      messageLogId: "oKoHhy7zOWmbkS2YIlGTW",
      dateTime: "2021-03-02T15:59:35.915Z",
      measurement: "Wb1_esnoQ",
      value: "0.6109829442367689"
    },
    {
      messageLogId: "T9x922wvXzEX27mX2htGA",
      dateTime: "2021-03-02T15:59:50.279Z",
      measurement: "Wb1_esnoQ",
      value: "4.947081009392946"
    },
    {
      messageLogId: "OIzyR9bcyti3acS2CN_nF",
      dateTime: "2021-03-02T16:00:14.703Z",
      measurement: "Wb1_esnoQ",
      value: "6.653783600266653"
    },
    {
      messageLogId: "8CZ_giEh7RFYYclNcKCFi",
      dateTime: "2021-03-02T16:00:23.789Z",
      measurement: "Wb1_esnoQ",
      value: "1.9250873447426364"
    },
    {
      messageLogId: "IUIQlikJ8-nz5rIZxDxnD",
      dateTime: "2021-03-02T16:00:42.186Z",
      measurement: "Wb1_esnoQ",
      value: "4.05215054182279"
    }
  ],
  Wb2_esnoQ: [
    {
      messageLogId: "AhlyYw21SGF87W_tRpx__",
      dateTime: "2021-03-02T15:50:46.736Z",
      measurement: "Wb2_esnoQ",
      value: "0.5783983512315165"
    },
    {
      messageLogId: "Ft3TBN7D1bPK9ZwnZSfva",
      dateTime: "2021-03-02T15:51:25.088Z",
      measurement: "Wb2_esnoQ",
      value: "0.23834753654873175"
    },
    {
      messageLogId: "_YA7Ax0Q4OCqhDjvlU4mc",
      dateTime: "2021-03-02T15:51:35.688Z",
      measurement: "Wb2_esnoQ",
      value: "3.782450197995037"
    },
    {
      messageLogId: "RR_10YaB2F0J21qTvLsBb",
      dateTime: "2021-03-02T15:52:23.645Z",
      measurement: "Wb2_esnoQ",
      value: "5.161737815672478"
    },
    {
      messageLogId: "aVxgI5WdptGxyIX3mads0",
      dateTime: "2021-03-02T15:53:02.323Z",
      measurement: "Wb2_esnoQ",
      value: "0.26299557548217023"
    },
    {
      messageLogId: "gOYnDXhSEuhTgaHAbZqUe",
      dateTime: "2021-03-02T15:53:22.883Z",
      measurement: "Wb2_esnoQ",
      value: "5.79219534536821"
    },
    {
      messageLogId: "tdfT3TM2lCs4YIV6mviy9",
      dateTime: "2021-03-02T15:53:46.518Z",
      measurement: "Wb2_esnoQ",
      value: "0.11270838012592543"
    },
    {
      messageLogId: "bY3bm-vHWE1lCH8lqQZSF",
      dateTime: "2021-03-02T15:53:50.020Z",
      measurement: "Wb2_esnoQ",
      value: "4.937510079302496"
    },
    {
      messageLogId: "xLmsT42Ifm62RUkSk6pz2",
      dateTime: "2021-03-02T15:54:16.617Z",
      measurement: "Wb2_esnoQ",
      value: "2.3102799932761666"
    },
    {
      messageLogId: "7uCkn1J64bx1YIXNPsFHn",
      dateTime: "2021-03-02T15:54:44.927Z",
      measurement: "Wb2_esnoQ",
      value: "3.339591137024345"
    },
    {
      messageLogId: "hCrA-PAcLSd5c0xmUKBnl",
      dateTime: "2021-03-02T15:55:19.263Z",
      measurement: "Wb2_esnoQ",
      value: "1.886277070475872"
    },
    {
      messageLogId: "efPR0e5NRqrpVhvHej5KI",
      dateTime: "2021-03-02T15:55:32.762Z",
      measurement: "Wb2_esnoQ",
      value: "0.6271443635731806"
    },
    {
      messageLogId: "BRMHo5o7__vl--Tvy5CXg",
      dateTime: "2021-03-02T15:55:48.902Z",
      measurement: "Wb2_esnoQ",
      value: "3.0654740238123015"
    },
    {
      messageLogId: "qTnclFn3ScTccUtr5Q8FL",
      dateTime: "2021-03-02T15:56:11.780Z",
      measurement: "Wb2_esnoQ",
      value: "2.111970007297823"
    },
    {
      messageLogId: "Umihn95wQzw6at1Lhaa03",
      dateTime: "2021-03-02T15:56:24.302Z",
      measurement: "Wb2_esnoQ",
      value: "1.8648736261923406"
    },
    {
      messageLogId: "fpMINBKSRMhgqurdd6Rr3",
      dateTime: "2021-03-02T15:56:47.011Z",
      measurement: "Wb2_esnoQ",
      value: "2.762476855511247"
    },
    {
      messageLogId: "SjwfaSgV3bCkwhu62S0ss",
      dateTime: "2021-03-02T15:56:53.456Z",
      measurement: "Wb2_esnoQ",
      value: "5.486949845422914"
    },
    {
      messageLogId: "6pji4Xm3CSoAjyoKSdZy3",
      dateTime: "2021-03-02T15:57:40.373Z",
      measurement: "Wb2_esnoQ",
      value: "2.4776858003387376"
    },
    {
      messageLogId: "i63CVr3WH31riP1SaXwOZ",
      dateTime: "2021-03-02T15:58:02.579Z",
      measurement: "Wb2_esnoQ",
      value: "0.20088812823084345"
    },
    {
      messageLogId: "qagwMN6fhBd8Li7LIpukn",
      dateTime: "2021-03-02T15:58:28.264Z",
      measurement: "Wb2_esnoQ",
      value: "2.5835732806168292"
    },
    {
      messageLogId: "F7iGduHNZ5wIrbXRGVbTC",
      dateTime: "2021-03-02T15:58:51.622Z",
      measurement: "Wb2_esnoQ",
      value: "3.3201271466306728"
    },
    {
      messageLogId: "ICaWpAeBIR7qZwjl4oab_",
      dateTime: "2021-03-02T15:59:18.806Z",
      measurement: "Wb2_esnoQ",
      value: "4.126395087180636"
    },
    {
      messageLogId: "UEiiGxM1m1MTllZuOxn7u",
      dateTime: "2021-03-02T15:59:27.375Z",
      measurement: "Wb2_esnoQ",
      value: "3.331784857485721"
    },
    {
      messageLogId: "xV1Wk4w46GWERjthgnpS0",
      dateTime: "2021-03-02T15:59:46.626Z",
      measurement: "Wb2_esnoQ",
      value: "5.599099102243916"
    },
    {
      messageLogId: "EkG2Zl7-wBoESRAJVz1bk",
      dateTime: "2021-03-02T15:59:57.735Z",
      measurement: "Wb2_esnoQ",
      value: "0.7378815933793057"
    },
    {
      messageLogId: "sNNcPbFCDWcw7-IxPOBEl",
      dateTime: "2021-03-02T16:00:19.005Z",
      measurement: "Wb2_esnoQ",
      value: "2.7667481992192036"
    }
  ],
  Wb1_symbolLockQ: [
    {
      messageLogId: "sXrAX6YIBThd0PzpkEzQA",
      dateTime: "2021-03-02T15:50:47.955Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.5626406147093188"
    },
    {
      messageLogId: "FNm8fxG7toyheqgqtiKyR",
      dateTime: "2021-03-02T15:51:01.630Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.8951710567929788"
    },
    {
      messageLogId: "ZpXG-uqic_tfuYorE4rj0",
      dateTime: "2021-03-02T15:51:17.937Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.8732084820672747"
    },
    {
      messageLogId: "xwGPS_fgFh8Q3AzFOnsY4",
      dateTime: "2021-03-02T15:51:49.816Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.07484196272535082"
    },
    {
      messageLogId: "lpbbBpqqFAKOxuOiO7rGq",
      dateTime: "2021-03-02T15:52:09.447Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.3306673883473392"
    },
    {
      messageLogId: "ijk1zfsi63DWVwXQxP_xP",
      dateTime: "2021-03-02T15:52:36.588Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.9833857208067209"
    },
    {
      messageLogId: "kDRf_LGl3NK89w-TZhz6e",
      dateTime: "2021-03-02T15:52:49.789Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.8173264175644042"
    },
    {
      messageLogId: "kpipdQGnoi8Cj-XkDFLhi",
      dateTime: "2021-03-02T15:53:11.578Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.6787220631823715"
    },
    {
      messageLogId: "BrVDOKStTAZcHXo3zdZDo",
      dateTime: "2021-03-02T15:53:24.649Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.6648963672120777"
    },
    {
      messageLogId: "NdwBQUX1g1lhxcTrR3PUD",
      dateTime: "2021-03-02T15:53:34.918Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.7378116152734165"
    },
    {
      messageLogId: "QG6us-TjdvLX1zCdv0TeJ",
      dateTime: "2021-03-02T15:53:59.070Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.6797148289700177"
    },
    {
      messageLogId: "S9GC6x8XwewWJGh01obIB",
      dateTime: "2021-03-02T15:54:09.492Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.9431055693758899"
    },
    {
      messageLogId: "zFDB8GtSH3Qa_NbJ2fWF_",
      dateTime: "2021-03-02T15:54:28.056Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.9253596792617841"
    },
    {
      messageLogId: "2tOvtZPr8I_vN4VShoPQf",
      dateTime: "2021-03-02T15:54:38.369Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.2808485808812523"
    },
    {
      messageLogId: "rGmfVq8zlQU52P49cf8I-",
      dateTime: "2021-03-02T15:55:18.942Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.8755011677212637"
    },
    {
      messageLogId: "fUnxCEXFatqnAXkFBWPoc",
      dateTime: "2021-03-02T15:55:45.205Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.2027672329794229"
    },
    {
      messageLogId: "fVYL9l8qSx_5ZNr76zIZG",
      dateTime: "2021-03-02T15:55:59.909Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.7912250580836107"
    },
    {
      messageLogId: "3BbLCB2-omfpppxGhcQ2Y",
      dateTime: "2021-03-02T15:56:18.697Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.7482354732337783"
    },
    {
      messageLogId: "2qRjMLMB5pVi1eEcbvYzu",
      dateTime: "2021-03-02T15:56:30.823Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.7036732456975768"
    },
    {
      messageLogId: "JQQDEFrNmoy9LKL_ruqV2",
      dateTime: "2021-03-02T15:57:09.373Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.25335371173702803"
    },
    {
      messageLogId: "t-Ma45m2_wOkN3an6BeO2",
      dateTime: "2021-03-02T15:57:28.511Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.8466850006524754"
    },
    {
      messageLogId: "UyGu6ARlcfu_ZMjoV-bzc",
      dateTime: "2021-03-02T15:57:57.217Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.42483654875825394"
    },
    {
      messageLogId: "3_9RVkHSl2xVW9tnRTjmr",
      dateTime: "2021-03-02T15:58:02.969Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.3685420740689894"
    },
    {
      messageLogId: "qPmM-wdVTR9s5FBjYcSWN",
      dateTime: "2021-03-02T15:58:27.661Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.5902414473785972"
    },
    {
      messageLogId: "MMd9eOD_7x-b7TVkaZXLe",
      dateTime: "2021-03-02T15:58:46.882Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.4796062378003576"
    },
    {
      messageLogId: "0mfSVW-0BoJ2A1F7eBWH4",
      dateTime: "2021-03-02T15:59:00.548Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.4828313241805773"
    },
    {
      messageLogId: "bz-S-DMoxLlfNrJupp6B4",
      dateTime: "2021-03-02T15:59:12.570Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.5436435395444158"
    },
    {
      messageLogId: "ekzPFLLCnevoqWH6g-JBd",
      dateTime: "2021-03-02T15:59:34.555Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.041653881078440036"
    },
    {
      messageLogId: "N6TxVd4VCw3aeTo0wX67t",
      dateTime: "2021-03-02T15:59:57.500Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.11794427976957678"
    },
    {
      messageLogId: "W69NT8j7PMTyWNXB0I_EX",
      dateTime: "2021-03-02T16:00:14.951Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.018741120183024096"
    },
    {
      messageLogId: "iMZNFx-gWKM5k2iasTTXf",
      dateTime: "2021-03-02T16:00:24.813Z",
      measurement: "Wb1_symbolLockQ",
      value: "0.5829966138368089"
    }
  ],
  Wb1_totalPower: [
    {
      messageLogId: "cvUzjA3d4SNyo4mQDVBhY",
      dateTime: "2021-03-02T15:50:53.411Z",
      measurement: "Wb1_totalPower",
      value: "2.7796920291583653"
    },
    {
      messageLogId: "EAByjh8VkXVSVRehcffWt",
      dateTime: "2021-03-02T15:51:15.445Z",
      measurement: "Wb1_totalPower",
      value: "0.15361574296163205"
    },
    {
      messageLogId: "TrjDQs8SO4BHD_CMUa2u8",
      dateTime: "2021-03-02T15:51:35.865Z",
      measurement: "Wb1_totalPower",
      value: "1.0710069771589317"
    },
    {
      messageLogId: "DptxKl0h_JB2P8ildulho",
      dateTime: "2021-03-02T15:52:04.848Z",
      measurement: "Wb1_totalPower",
      value: "2.011150791118802"
    },
    {
      messageLogId: "5sy-fh00L0W0x2nSctXOB",
      dateTime: "2021-03-02T15:52:17.604Z",
      measurement: "Wb1_totalPower",
      value: "1.105265141964277"
    },
    {
      messageLogId: "fLEazn8utF8MK0BI_FI4_",
      dateTime: "2021-03-02T15:52:50.765Z",
      measurement: "Wb1_totalPower",
      value: "1.5956068405837018"
    },
    {
      messageLogId: "SeLCkLyoOmkMpEsO5Wa13",
      dateTime: "2021-03-02T15:52:57.080Z",
      measurement: "Wb1_totalPower",
      value: "1.9094940629308494"
    },
    {
      messageLogId: "jmotPCiiEAoGpYa3157r4",
      dateTime: "2021-03-02T15:53:16.959Z",
      measurement: "Wb1_totalPower",
      value: "0.644995710784631"
    },
    {
      messageLogId: "-RaDLNA5ohJrnE3Oadzcj",
      dateTime: "2021-03-02T15:53:23.835Z",
      measurement: "Wb1_totalPower",
      value: "1.3440946046463722"
    },
    {
      messageLogId: "GsL9iaKryvMSL7Gt7NLjA",
      dateTime: "2021-03-02T15:53:43.272Z",
      measurement: "Wb1_totalPower",
      value: "0.2504096077562403"
    },
    {
      messageLogId: "8-Kmqv-tHTIQTj7AGqfuU",
      dateTime: "2021-03-02T15:53:53.128Z",
      measurement: "Wb1_totalPower",
      value: "2.864684965078296"
    },
    {
      messageLogId: "TK1maO-q05WXwc6QmU-hL",
      dateTime: "2021-03-02T15:54:19.232Z",
      measurement: "Wb1_totalPower",
      value: "1.2020631491646094"
    },
    {
      messageLogId: "5BnpoItxh-zOX4T76-96j",
      dateTime: "2021-03-02T15:54:52.622Z",
      measurement: "Wb1_totalPower",
      value: "1.2139510825490851"
    },
    {
      messageLogId: "sljgYK263wh0-N84YgR7A",
      dateTime: "2021-03-02T15:55:08.777Z",
      measurement: "Wb1_totalPower",
      value: "2.0302352846101908"
    },
    {
      messageLogId: "_t10YpkWjqgPNnR1FnOHQ",
      dateTime: "2021-03-02T15:55:30.354Z",
      measurement: "Wb1_totalPower",
      value: "1.3753268820441709"
    },
    {
      messageLogId: "9zm50kGnls9p-7I6fKqA6",
      dateTime: "2021-03-02T15:55:53.342Z",
      measurement: "Wb1_totalPower",
      value: "0.1086764175782663"
    },
    {
      messageLogId: "k1LysUgzAwQciOVr2xje9",
      dateTime: "2021-03-02T15:56:03.916Z",
      measurement: "Wb1_totalPower",
      value: "2.69460868727182"
    },
    {
      messageLogId: "kf3ndSgxQwD6m2VoVdfUZ",
      dateTime: "2021-03-02T15:56:13.608Z",
      measurement: "Wb1_totalPower",
      value: "0.45537968677358787"
    },
    {
      messageLogId: "JvGK9TwSuiqfG0K1pc-P3",
      dateTime: "2021-03-02T15:56:21.900Z",
      measurement: "Wb1_totalPower",
      value: "2.5346987869908637"
    },
    {
      messageLogId: "CUls4ZLWraN3HgMbjFBGI",
      dateTime: "2021-03-02T15:56:46.145Z",
      measurement: "Wb1_totalPower",
      value: "1.1699325135785639"
    },
    {
      messageLogId: "VaEq-HfNwfxXb_IXysEnF",
      dateTime: "2021-03-02T15:57:10.982Z",
      measurement: "Wb1_totalPower",
      value: "1.4014286388405932"
    },
    {
      messageLogId: "qjLrwnpfCg_T00b7NFP3e",
      dateTime: "2021-03-02T15:57:18.011Z",
      measurement: "Wb1_totalPower",
      value: "1.4180044910383882"
    },
    {
      messageLogId: "Fl23jdpMtUTbdCqIadC8E",
      dateTime: "2021-03-02T15:57:25.642Z",
      measurement: "Wb1_totalPower",
      value: "2.2295234123243626"
    },
    {
      messageLogId: "lkx5XEM7VbTIrxbkJRxn4",
      dateTime: "2021-03-02T15:57:46.444Z",
      measurement: "Wb1_totalPower",
      value: "1.0315963039015543"
    },
    {
      messageLogId: "gMbdavLQcVUaaTB08-L7I",
      dateTime: "2021-03-02T15:58:15.800Z",
      measurement: "Wb1_totalPower",
      value: "1.8753235365342036"
    },
    {
      messageLogId: "A2Bsj2cm8EKvUHKMPfoO7",
      dateTime: "2021-03-02T15:58:30.365Z",
      measurement: "Wb1_totalPower",
      value: "2.528508895939363"
    },
    {
      messageLogId: "bImipcnRRa6nYkzNFNW9W",
      dateTime: "2021-03-02T15:59:08.446Z",
      measurement: "Wb1_totalPower",
      value: "2.8453801732361295"
    },
    {
      messageLogId: "qjxfHb4tcG_Sk-_QRJMlr",
      dateTime: "2021-03-02T15:59:23.988Z",
      measurement: "Wb1_totalPower",
      value: "0.02354805785038827"
    },
    {
      messageLogId: "6SI6Vlo2Rj6lXctbcY8Db",
      dateTime: "2021-03-02T15:59:53.346Z",
      measurement: "Wb1_totalPower",
      value: "2.801517472283882"
    },
    {
      messageLogId: "9rbTNvcxO6Nmy1E0oYOfe",
      dateTime: "2021-03-02T16:00:41.777Z",
      measurement: "Wb1_totalPower",
      value: "2.3653652462357884"
    }
  ],
  Wb1_overallLock: [
    {
      messageLogId: "PSzWeFls4C4t_eUjsG80D",
      dateTime: "2021-03-02T15:50:53.310Z",
      measurement: "Wb1_overallLock",
      value: "2.940046121691522"
    },
    {
      messageLogId: "HfDRAOqSS_PbAD23e6Ls1",
      dateTime: "2021-03-02T15:51:04.887Z",
      measurement: "Wb1_overallLock",
      value: "2.409182628797867"
    },
    {
      messageLogId: "2OCljjtHocdh35nmh_F7u",
      dateTime: "2021-03-02T15:51:17.099Z",
      measurement: "Wb1_overallLock",
      value: "2.545865302108469"
    },
    {
      messageLogId: "jNsMMZGZXAfvOf--R2ity",
      dateTime: "2021-03-02T15:51:52.882Z",
      measurement: "Wb1_overallLock",
      value: "2.9095177124422777"
    },
    {
      messageLogId: "EKDzii7Ii-bCNEuKMx1LL",
      dateTime: "2021-03-02T15:52:23.853Z",
      measurement: "Wb1_overallLock",
      value: "0.3816008044366792"
    },
    {
      messageLogId: "bKNPSWzbkw1lh8FA5ZPJ1",
      dateTime: "2021-03-02T15:52:47.293Z",
      measurement: "Wb1_overallLock",
      value: "2.095306916523752"
    },
    {
      messageLogId: "6mNa5dtsJipuvcSPTXbsI",
      dateTime: "2021-03-02T15:53:06.739Z",
      measurement: "Wb1_overallLock",
      value: "2.148586898027391"
    },
    {
      messageLogId: "nknqlrto0n6bf6cAYQ_dd",
      dateTime: "2021-03-02T15:53:39.678Z",
      measurement: "Wb1_overallLock",
      value: "1.7748098040301834"
    },
    {
      messageLogId: "QH1ibQtUrchKFln3G1s4V",
      dateTime: "2021-03-02T15:53:46.670Z",
      measurement: "Wb1_overallLock",
      value: "2.425163668275342"
    },
    {
      messageLogId: "34g3GTFy7CY9XTxwLCFxK",
      dateTime: "2021-03-02T15:54:01.888Z",
      measurement: "Wb1_overallLock",
      value: "0.4291454941521722"
    },
    {
      messageLogId: "RJl3S7dyvUHR0ETBPFVsv",
      dateTime: "2021-03-02T15:54:25.717Z",
      measurement: "Wb1_overallLock",
      value: "2.0695401395783715"
    },
    {
      messageLogId: "RlhTO9isEQsoA6zXVm1X0",
      dateTime: "2021-03-02T15:54:36.194Z",
      measurement: "Wb1_overallLock",
      value: "2.5478882812164896"
    },
    {
      messageLogId: "_ymI4zI3v9toX5ozzxI4l",
      dateTime: "2021-03-02T15:54:58.405Z",
      measurement: "Wb1_overallLock",
      value: "2.9199243766204677"
    },
    {
      messageLogId: "u4QuGL3dzCs8GmJUkTyR_",
      dateTime: "2021-03-02T15:55:05.599Z",
      measurement: "Wb1_overallLock",
      value: "0.09479857256719093"
    },
    {
      messageLogId: "nkVaa2F7ZWdx0PniYf9ss",
      dateTime: "2021-03-02T15:55:18.143Z",
      measurement: "Wb1_overallLock",
      value: "0.5503204462533717"
    },
    {
      messageLogId: "x7l2sYHOKIGnXC-SKWV0F",
      dateTime: "2021-03-02T15:55:37.890Z",
      measurement: "Wb1_overallLock",
      value: "1.6299334823662996"
    },
    {
      messageLogId: "aOl6TAcVYexWrzqXXcjf_",
      dateTime: "2021-03-02T15:55:59.873Z",
      measurement: "Wb1_overallLock",
      value: "2.281204433051229"
    },
    {
      messageLogId: "CQh2X5g-spYweqnT3RLNA",
      dateTime: "2021-03-02T15:56:27.735Z",
      measurement: "Wb1_overallLock",
      value: "1.797238543306301"
    },
    {
      messageLogId: "KB1f4VY8tc23uItJV6n4_",
      dateTime: "2021-03-02T15:56:55.563Z",
      measurement: "Wb1_overallLock",
      value: "1.5324980837736573"
    },
    {
      messageLogId: "eh52TEgaLETwUa0n-hwUZ",
      dateTime: "2021-03-02T15:57:17.646Z",
      measurement: "Wb1_overallLock",
      value: "2.110510396149582"
    },
    {
      messageLogId: "xwB-fJ6eAuNB1OivkTnk3",
      dateTime: "2021-03-02T15:57:49.949Z",
      measurement: "Wb1_overallLock",
      value: "1.4551519308662868"
    },
    {
      messageLogId: "JX9B8dY9gda0uws9siJr5",
      dateTime: "2021-03-02T15:58:14.433Z",
      measurement: "Wb1_overallLock",
      value: "1.3352114492488711"
    },
    {
      messageLogId: "lWXRNkwXSWnfY6x9SngUo",
      dateTime: "2021-03-02T15:58:26.288Z",
      measurement: "Wb1_overallLock",
      value: "0.9748688883221432"
    },
    {
      messageLogId: "QzTM0COBJisgN9m9JvLD8",
      dateTime: "2021-03-02T15:58:50.020Z",
      measurement: "Wb1_overallLock",
      value: "1.4353843953641103"
    },
    {
      messageLogId: "QLb_y2_1WMlpm8kHSER6o",
      dateTime: "2021-03-02T15:59:03.902Z",
      measurement: "Wb1_overallLock",
      value: "1.7350779564849028"
    },
    {
      messageLogId: "rm--jLXVi4alLIjyYFPTw",
      dateTime: "2021-03-02T15:59:17.707Z",
      measurement: "Wb1_overallLock",
      value: "1.103471436100036"
    },
    {
      messageLogId: "SnaXEDTtOYiH893N7DP7j",
      dateTime: "2021-03-02T15:59:27.164Z",
      measurement: "Wb1_overallLock",
      value: "1.0774746196925908"
    },
    {
      messageLogId: "BcyGzXtcJ9DjhiyBwn49z",
      dateTime: "2021-03-02T15:59:36.891Z",
      measurement: "Wb1_overallLock",
      value: "0.97477742752888"
    },
    {
      messageLogId: "WKCBZHykN_NYDqkaBYmux",
      dateTime: "2021-03-02T15:59:42.813Z",
      measurement: "Wb1_overallLock",
      value: "0.9457993822447232"
    },
    {
      messageLogId: "9MeLuisr0I5GNe3_ZK_Q9",
      dateTime: "2021-03-02T15:59:54.056Z",
      measurement: "Wb1_overallLock",
      value: "0.08675169586203091"
    },
    {
      messageLogId: "mAs5Iqd8KASs7HtzDFcpU",
      dateTime: "2021-03-02T16:00:04.272Z",
      measurement: "Wb1_overallLock",
      value: "1.849611523810501"
    },
    {
      messageLogId: "2gEE3nXS3Ht7Jl14zLCXF",
      dateTime: "2021-03-02T16:00:28.136Z",
      measurement: "Wb1_overallLock",
      value: "0.3056353434998891"
    },
    {
      messageLogId: "wJqSwihNb6Z2pLcAUsbf4",
      dateTime: "2021-03-02T16:00:42.700Z",
      measurement: "Wb1_overallLock",
      value: "0.9697300172556189"
    }
  ],
  measured_beacon_dmb: [
    {
      messageLogId: "0vaZbqs7bc9kIkJULTWcs",
      dateTime: "2021-03-02T15:50:46.854Z",
      measurement: "measured_beacon_dmb",
      value: "3.094104650143789"
    },
    {
      messageLogId: "3sftYgZFuN6vkmbVsUZdb",
      dateTime: "2021-03-02T15:51:14.364Z",
      measurement: "measured_beacon_dmb",
      value: "5.722218057713104"
    },
    {
      messageLogId: "3mRi6At-6O_D_FZUo-mD5",
      dateTime: "2021-03-02T15:51:46.542Z",
      measurement: "measured_beacon_dmb",
      value: "5.704552948471143"
    },
    {
      messageLogId: "hyWPCG9SRzoHHVjVzSxKq",
      dateTime: "2021-03-02T15:52:09.863Z",
      measurement: "measured_beacon_dmb",
      value: "3.6527829505284615"
    },
    {
      messageLogId: "rJdjYSQZ_p7sLJ6rLwmr5",
      dateTime: "2021-03-02T15:52:19.493Z",
      measurement: "measured_beacon_dmb",
      value: "1.072056948525188"
    },
    {
      messageLogId: "GgrsbNjA6puTzdlgm7Jr9",
      dateTime: "2021-03-02T15:52:53.654Z",
      measurement: "measured_beacon_dmb",
      value: "3.9926117385965902"
    },
    {
      messageLogId: "j0we6dTqmvEfqwOrO4gJ5",
      dateTime: "2021-03-02T15:53:07.574Z",
      measurement: "measured_beacon_dmb",
      value: "1.9064622072883037"
    },
    {
      messageLogId: "F433Hg_t1diJeGwLnyfBj",
      dateTime: "2021-03-02T15:53:22.850Z",
      measurement: "measured_beacon_dmb",
      value: "2.5829345945320386"
    },
    {
      messageLogId: "aERsRttPzwzdMd1vE2ocV",
      dateTime: "2021-03-02T15:53:34.549Z",
      measurement: "measured_beacon_dmb",
      value: "0.2805588562505896"
    },
    {
      messageLogId: "7JNkjWM-gor_F1aoX5VAI",
      dateTime: "2021-03-02T15:53:50.059Z",
      measurement: "measured_beacon_dmb",
      value: "1.7956143970752474"
    },
    {
      messageLogId: "xVvsmlqfzxG7u0rEy6_-f",
      dateTime: "2021-03-02T15:54:26.403Z",
      measurement: "measured_beacon_dmb",
      value: "2.877592773358738"
    },
    {
      messageLogId: "0DZa3yKW3F5nUijxtCOdM",
      dateTime: "2021-03-02T15:54:54.934Z",
      measurement: "measured_beacon_dmb",
      value: "0.32394692508528045"
    },
    {
      messageLogId: "RakTHtyhm2lc1qnIE9bjM",
      dateTime: "2021-03-02T15:55:04.945Z",
      measurement: "measured_beacon_dmb",
      value: "4.448265496948977"
    },
    {
      messageLogId: "bce3ACUt9zh64E5BqAn6t",
      dateTime: "2021-03-02T15:55:23.120Z",
      measurement: "measured_beacon_dmb",
      value: "1.3710239920876082"
    },
    {
      messageLogId: "4o_TRP_3iQgt1sNAQE2v_",
      dateTime: "2021-03-02T15:55:32.385Z",
      measurement: "measured_beacon_dmb",
      value: "3.815333418243825"
    },
    {
      messageLogId: "DGroaVpUAzmWJ46Gs_iE4",
      dateTime: "2021-03-02T15:55:53.435Z",
      measurement: "measured_beacon_dmb",
      value: "3.6675661700548563"
    },
    {
      messageLogId: "1sUX6Zs8RKswEr3oOyerE",
      dateTime: "2021-03-02T15:56:16.703Z",
      measurement: "measured_beacon_dmb",
      value: "5.0004063055103956"
    },
    {
      messageLogId: "nnu8qipWviSnXGXfaoBG1",
      dateTime: "2021-03-02T15:56:42.501Z",
      measurement: "measured_beacon_dmb",
      value: "1.6052322717172869"
    },
    {
      messageLogId: "JQZVhOYU4-Mrigp6oky9W",
      dateTime: "2021-03-02T15:56:53.010Z",
      measurement: "measured_beacon_dmb",
      value: "3.2928324150866186"
    },
    {
      messageLogId: "B0ODxbbn7Gkc-EV_YdmLH",
      dateTime: "2021-03-02T15:57:03.380Z",
      measurement: "measured_beacon_dmb",
      value: "2.3461893116992876"
    },
    {
      messageLogId: "PhI_hbYm-O2I5L4DNWHI7",
      dateTime: "2021-03-02T15:57:34.765Z",
      measurement: "measured_beacon_dmb",
      value: "4.193284986417681"
    },
    {
      messageLogId: "l8cPvoYw8kZvl858s_mfd",
      dateTime: "2021-03-02T15:58:00.808Z",
      measurement: "measured_beacon_dmb",
      value: "2.9559460030142617"
    },
    {
      messageLogId: "yWbb0uleGn_0D4S327m9I",
      dateTime: "2021-03-02T15:58:28.838Z",
      measurement: "measured_beacon_dmb",
      value: "2.4552144067498256"
    },
    {
      messageLogId: "UYhBfmBpO2abh78GP8KO7",
      dateTime: "2021-03-02T15:58:51.134Z",
      measurement: "measured_beacon_dmb",
      value: "1.9164511735962433"
    },
    {
      messageLogId: "KZq9OyuAKPgFPNUkHyCUe",
      dateTime: "2021-03-02T15:59:15.313Z",
      measurement: "measured_beacon_dmb",
      value: "3.4634262540291063"
    },
    {
      messageLogId: "MJ2FJW0BPqRvevCX13rVb",
      dateTime: "2021-03-02T15:59:34.555Z",
      measurement: "measured_beacon_dmb",
      value: "4.695500083408598"
    },
    {
      messageLogId: "fOPWSfYbn89Qh71fUqx3c",
      dateTime: "2021-03-02T15:59:59.110Z",
      measurement: "measured_beacon_dmb",
      value: "5.295261725400525"
    },
    {
      messageLogId: "-Z91IRnIrI-pbTaSH6pQv",
      dateTime: "2021-03-02T16:00:22.692Z",
      measurement: "measured_beacon_dmb",
      value: "5.417888925278759"
    },
    {
      messageLogId: "8ai8OyVEj9TVtSET8kBBI",
      dateTime: "2021-03-02T16:00:32.345Z",
      measurement: "measured_beacon_dmb",
      value: "1.5574762650519807"
    }
  ],
  Wb1_esnoI: [
    {
      messageLogId: "_ir9-OSDkT9eyQZTlBGDF",
      dateTime: "2021-03-02T15:50:46.442Z",
      measurement: "Wb1_esnoI",
      value: "0.8032662831966733"
    },
    {
      messageLogId: "IzT7bf8F3MP3b8xRCpxhC",
      dateTime: "2021-03-02T15:51:07.181Z",
      measurement: "Wb1_esnoI",
      value: "1.4604167203669056"
    },
    {
      messageLogId: "sHUXt7gkbpY9V3sU8vdJE",
      dateTime: "2021-03-02T15:51:21.946Z",
      measurement: "Wb1_esnoI",
      value: "0.524281213095211"
    },
    {
      messageLogId: "aIPGL1mqqKVoLZU4fwWIJ",
      dateTime: "2021-03-02T15:51:26.742Z",
      measurement: "Wb1_esnoI",
      value: "1.9578705468122148"
    },
    {
      messageLogId: "u9UdkX9GwRaIKQLEOgPjk",
      dateTime: "2021-03-02T15:51:38.136Z",
      measurement: "Wb1_esnoI",
      value: "0.4380704352839824"
    },
    {
      messageLogId: "3z8mzA-lz5sjmttfIqzyH",
      dateTime: "2021-03-02T15:51:52.475Z",
      measurement: "Wb1_esnoI",
      value: "0.5025209216616171"
    },
    {
      messageLogId: "qZ5mj_mF3tWbCIA-kMgCZ",
      dateTime: "2021-03-02T15:52:03.971Z",
      measurement: "Wb1_esnoI",
      value: "1.774192348167487"
    },
    {
      messageLogId: "hi49z0wN7Y4YxAuVuuDdz",
      dateTime: "2021-03-02T15:52:31.305Z",
      measurement: "Wb1_esnoI",
      value: "1.5735674879144925"
    },
    {
      messageLogId: "OMj7gaAinMIwPSab-Fd2T",
      dateTime: "2021-03-02T15:52:51.722Z",
      measurement: "Wb1_esnoI",
      value: "1.8139019558942615"
    },
    {
      messageLogId: "XgcrAJczVaPEo-tajm95k",
      dateTime: "2021-03-02T15:52:59.591Z",
      measurement: "Wb1_esnoI",
      value: "1.027591707816534"
    },
    {
      messageLogId: "37E9P2a1LA1o10jmck0uo",
      dateTime: "2021-03-02T15:53:13.803Z",
      measurement: "Wb1_esnoI",
      value: "0.5403961517674778"
    },
    {
      messageLogId: "R88nnWAQtnWfhXUCMgQx8",
      dateTime: "2021-03-02T15:53:32.008Z",
      measurement: "Wb1_esnoI",
      value: "1.609006261429736"
    },
    {
      messageLogId: "c7MftwpPOJ-4irbRb6R8J",
      dateTime: "2021-03-02T15:54:00.218Z",
      measurement: "Wb1_esnoI",
      value: "1.8420027598478603"
    },
    {
      messageLogId: "eMG2h5mSqEQsQZYjlVk-4",
      dateTime: "2021-03-02T15:54:40.646Z",
      measurement: "Wb1_esnoI",
      value: "1.806907842371947"
    },
    {
      messageLogId: "PQWCa84gyMz4jUS1zh4JV",
      dateTime: "2021-03-02T15:55:03.068Z",
      measurement: "Wb1_esnoI",
      value: "0.5749430928023855"
    },
    {
      messageLogId: "3rDhdp1WhxsOtUW-cRjfG",
      dateTime: "2021-03-02T15:55:23.577Z",
      measurement: "Wb1_esnoI",
      value: "1.2948034960803827"
    },
    {
      messageLogId: "WjP8U_psA-1XiWMzmC8gY",
      dateTime: "2021-03-02T15:55:35.117Z",
      measurement: "Wb1_esnoI",
      value: "1.5303951616859153"
    },
    {
      messageLogId: "_xutM8OT42X42E4e8eMbC",
      dateTime: "2021-03-02T15:55:42.302Z",
      measurement: "Wb1_esnoI",
      value: "1.5956541218907998"
    },
    {
      messageLogId: "dZ8vVzk9ycgxMkxzPTpoO",
      dateTime: "2021-03-02T15:56:02.664Z",
      measurement: "Wb1_esnoI",
      value: "0.3888712748754144"
    },
    {
      messageLogId: "_QptrZgcEPg5g9fRR_YFt",
      dateTime: "2021-03-02T15:56:22.942Z",
      measurement: "Wb1_esnoI",
      value: "0.2320747076935301"
    },
    {
      messageLogId: "RahOAioRWfBdiEd9Ycxjw",
      dateTime: "2021-03-02T15:56:43.405Z",
      measurement: "Wb1_esnoI",
      value: "0.3918472248425253"
    },
    {
      messageLogId: "eYX0RAA5UkmiUw3ixxb_f",
      dateTime: "2021-03-02T15:56:59.743Z",
      measurement: "Wb1_esnoI",
      value: "1.0543709240143087"
    },
    {
      messageLogId: "EG-YBbN_VgONt6NiyMyv6",
      dateTime: "2021-03-02T15:57:07.246Z",
      measurement: "Wb1_esnoI",
      value: "1.201717662937912"
    },
    {
      messageLogId: "ny1-ZFFk38yREUWjjCeHi",
      dateTime: "2021-03-02T15:57:47.959Z",
      measurement: "Wb1_esnoI",
      value: "0.43637982348860627"
    },
    {
      messageLogId: "uJOkjx_XCNrSfv_tv7vec",
      dateTime: "2021-03-02T15:58:02.375Z",
      measurement: "Wb1_esnoI",
      value: "1.5078679015349818"
    },
    {
      messageLogId: "Cij-ddl2xRRISA3dO4r4E",
      dateTime: "2021-03-02T15:58:13.133Z",
      measurement: "Wb1_esnoI",
      value: "1.3931961964850859"
    },
    {
      messageLogId: "-K5qR5fwmpcq0Uy3FjtVc",
      dateTime: "2021-03-02T15:58:57.084Z",
      measurement: "Wb1_esnoI",
      value: "0.13661038405968684"
    },
    {
      messageLogId: "cXdrxnbIy6h3O5NdQImpR",
      dateTime: "2021-03-02T15:59:33.347Z",
      measurement: "Wb1_esnoI",
      value: "1.69122256834087"
    },
    {
      messageLogId: "prrsz1IhrTgr9Am_aVHPc",
      dateTime: "2021-03-02T15:59:45.275Z",
      measurement: "Wb1_esnoI",
      value: "1.4227910089813518"
    },
    {
      messageLogId: "SzpbpYXArWP3bdlczs_uG",
      dateTime: "2021-03-02T15:59:49.981Z",
      measurement: "Wb1_esnoI",
      value: "0.39531062513334203"
    },
    {
      messageLogId: "UQDxMOr1uA_npoAWqMicA",
      dateTime: "2021-03-02T16:00:05.245Z",
      measurement: "Wb1_esnoI",
      value: "1.7769559931801275"
    },
    {
      messageLogId: "BbC8c376oAs_jns2zHT3h",
      dateTime: "2021-03-02T16:00:23.013Z",
      measurement: "Wb1_esnoI",
      value: "1.3216264978033423"
    },
    {
      messageLogId: "wsO8ubb-OC-vOf0iXWvCq",
      dateTime: "2021-03-02T16:00:37.483Z",
      measurement: "Wb1_esnoI",
      value: "0.3171512527078437"
    }
  ],
  Wb2_esnoI: [
    {
      messageLogId: "gRvpXsbhRYJHTh_b37PMP",
      dateTime: "2021-03-02T15:50:51.496Z",
      measurement: "Wb2_esnoI",
      value: "8.250642192712869"
    },
    {
      messageLogId: "6a6avidJFUJhz1wRvFsFy",
      dateTime: "2021-03-02T15:51:16.928Z",
      measurement: "Wb2_esnoI",
      value: "4.300595786305745"
    },
    {
      messageLogId: "NQ7IDfa1zqXwM2bg8imSd",
      dateTime: "2021-03-02T15:51:32.833Z",
      measurement: "Wb2_esnoI",
      value: "1.4807940247933105"
    },
    {
      messageLogId: "ScqnEdXF8iZDg1KoA_4bO",
      dateTime: "2021-03-02T15:52:00.816Z",
      measurement: "Wb2_esnoI",
      value: "0.4899497115707079"
    },
    {
      messageLogId: "xGpTXdx0xmMlE2ysYgBIZ",
      dateTime: "2021-03-02T15:52:09.523Z",
      measurement: "Wb2_esnoI",
      value: "0.7328762601678631"
    },
    {
      messageLogId: "e1x4aNRJGI2EWU3wPlhJN",
      dateTime: "2021-03-02T15:52:19.759Z",
      measurement: "Wb2_esnoI",
      value: "3.9314373630906134"
    },
    {
      messageLogId: "ITfTKkwOaC67xfQbmmc0A",
      dateTime: "2021-03-02T15:52:29.518Z",
      measurement: "Wb2_esnoI",
      value: "6.055129611710301"
    },
    {
      messageLogId: "cj7wYvC36SBG0DVmrPrfs",
      dateTime: "2021-03-02T15:53:15.841Z",
      measurement: "Wb2_esnoI",
      value: "4.501616848997665"
    },
    {
      messageLogId: "x21CYkoCc3_yO-gJ9bzm_",
      dateTime: "2021-03-02T15:53:29.685Z",
      measurement: "Wb2_esnoI",
      value: "8.463801820545232"
    },
    {
      messageLogId: "qC6Bom_xcWFRtJJsDRI9L",
      dateTime: "2021-03-02T15:53:49.545Z",
      measurement: "Wb2_esnoI",
      value: "3.8197120826960695"
    },
    {
      messageLogId: "yKIXQvF2z0FBTYpwE0ht3",
      dateTime: "2021-03-02T15:54:05.423Z",
      measurement: "Wb2_esnoI",
      value: "8.279127184000602"
    },
    {
      messageLogId: "PhePHnfjfaknIm2yvktRZ",
      dateTime: "2021-03-02T15:54:23.047Z",
      measurement: "Wb2_esnoI",
      value: "0.7844275409603731"
    },
    {
      messageLogId: "KjTZ3z8QONDVDm3d2LEGE",
      dateTime: "2021-03-02T15:54:32.727Z",
      measurement: "Wb2_esnoI",
      value: "0.2026910113953524"
    },
    {
      messageLogId: "XonMkO416ElTpYnFPuw_k",
      dateTime: "2021-03-02T15:54:46.559Z",
      measurement: "Wb2_esnoI",
      value: "7.258447154627271"
    },
    {
      messageLogId: "fvONnp5AK2gbVrNZSAc39",
      dateTime: "2021-03-02T15:55:05.645Z",
      measurement: "Wb2_esnoI",
      value: "8.190142991274357"
    },
    {
      messageLogId: "vImUIe4CvuFMKgMzzxsuR",
      dateTime: "2021-03-02T15:55:22.082Z",
      measurement: "Wb2_esnoI",
      value: "8.473022163751677"
    },
    {
      messageLogId: "7H-NkdxSLa9RUTlLBfExE",
      dateTime: "2021-03-02T15:55:52.418Z",
      measurement: "Wb2_esnoI",
      value: "3.0276887978212326"
    },
    {
      messageLogId: "Awnlfiyfxk1NLSBT9Mq_f",
      dateTime: "2021-03-02T15:56:14.624Z",
      measurement: "Wb2_esnoI",
      value: "1.9060770178988942"
    },
    {
      messageLogId: "glrQ_cYC8V_jMkUQArCId",
      dateTime: "2021-03-02T15:56:32.345Z",
      measurement: "Wb2_esnoI",
      value: "6.459023195918593"
    },
    {
      messageLogId: "TaDeLM7DNrel-tZJJ0PMH",
      dateTime: "2021-03-02T15:56:50.395Z",
      measurement: "Wb2_esnoI",
      value: "3.484575203617603"
    },
    {
      messageLogId: "HkAYuWD6hy8yPeHWKlU7F",
      dateTime: "2021-03-02T15:57:12.777Z",
      measurement: "Wb2_esnoI",
      value: "7.466433612069008"
    },
    {
      messageLogId: "OTk776xyCDJ3fCVKS9QJd",
      dateTime: "2021-03-02T15:57:35.702Z",
      measurement: "Wb2_esnoI",
      value: "0.6550483133403389"
    },
    {
      messageLogId: "EOO5dH6vAxR1xhJoRiE-C",
      dateTime: "2021-03-02T15:57:57.888Z",
      measurement: "Wb2_esnoI",
      value: "6.986452278873133"
    },
    {
      messageLogId: "nzIpvQQtvMLrXUkFqHBhN",
      dateTime: "2021-03-02T15:58:21.058Z",
      measurement: "Wb2_esnoI",
      value: "8.062668557931726"
    },
    {
      messageLogId: "S6qGf6Wx-jyjj-Q65q_Zu",
      dateTime: "2021-03-02T15:58:40.409Z",
      measurement: "Wb2_esnoI",
      value: "4.042053337815178"
    },
    {
      messageLogId: "doWip8q9y3oT2drNwtR8J",
      dateTime: "2021-03-02T15:58:55.382Z",
      measurement: "Wb2_esnoI",
      value: "5.076362562391696"
    },
    {
      messageLogId: "SurBVUSHTJ16r6z0LfS8Z",
      dateTime: "2021-03-02T15:59:12.161Z",
      measurement: "Wb2_esnoI",
      value: "4.941611224142985"
    },
    {
      messageLogId: "blx1xdrakB8QZc12cdpRX",
      dateTime: "2021-03-02T15:59:25.062Z",
      measurement: "Wb2_esnoI",
      value: "8.193411173912573"
    },
    {
      messageLogId: "j3dLW69KJQrh0lEwes1RQ",
      dateTime: "2021-03-02T15:59:51.833Z",
      measurement: "Wb2_esnoI",
      value: "6.018474247488333"
    },
    {
      messageLogId: "BlU7I2PFS5WBDs6f40c3S",
      dateTime: "2021-03-02T16:00:11.331Z",
      measurement: "Wb2_esnoI",
      value: "6.305709043849075"
    },
    {
      messageLogId: "AlqOoQ3Y7aaUiiknqMi4U",
      dateTime: "2021-03-02T16:00:38.468Z",
      measurement: "Wb2_esnoI",
      value: "0.10797038284269944"
    }
  ],
  measured_azimuth_deg: [
    {
      messageLogId: "MMFCGKPZdu0XGMg3R2Kk9",
      dateTime: "2021-03-02T15:50:45.428Z",
      measurement: "measured_azimuth_deg",
      value: "1.5384442149738282"
    },
    {
      messageLogId: "zlKSvzzezw7GeFqZHwkRK",
      dateTime: "2021-03-02T15:51:11.132Z",
      measurement: "measured_azimuth_deg",
      value: "1.2571440441556732"
    },
    {
      messageLogId: "Rwfz-zYR7ZJkYz74MktGk",
      dateTime: "2021-03-02T15:51:30.554Z",
      measurement: "measured_azimuth_deg",
      value: "0.454681637879494"
    },
    {
      messageLogId: "XmxbByaoF7IAwZMMvk2AQ",
      dateTime: "2021-03-02T15:51:51.220Z",
      measurement: "measured_azimuth_deg",
      value: "1.3560237305192804"
    },
    {
      messageLogId: "MqEZVRih62mvz1srcNbxf",
      dateTime: "2021-03-02T15:52:03.493Z",
      measurement: "measured_azimuth_deg",
      value: "0.3563641384976399"
    },
    {
      messageLogId: "PLSSDeEoOsM-3_q6N-LN4",
      dateTime: "2021-03-02T15:52:20.736Z",
      measurement: "measured_azimuth_deg",
      value: "1.4112483166860788"
    },
    {
      messageLogId: "fZCChfo3e7fbufX3wguZD",
      dateTime: "2021-03-02T15:52:53.026Z",
      measurement: "measured_azimuth_deg",
      value: "0.17981177169973517"
    },
    {
      messageLogId: "HTMV0jJ4MZpjZQ1KwwP4L",
      dateTime: "2021-03-02T15:53:12.932Z",
      measurement: "measured_azimuth_deg",
      value: "0.6342454674405202"
    },
    {
      messageLogId: "9JZwcfe2Adq6iIe5oiclA",
      dateTime: "2021-03-02T15:53:25.357Z",
      measurement: "measured_azimuth_deg",
      value: "0.7999217208129663"
    },
    {
      messageLogId: "O7CYKzJzPL8fyTqDTeJWB",
      dateTime: "2021-03-02T15:53:35.297Z",
      measurement: "measured_azimuth_deg",
      value: "1.1900956258689683"
    },
    {
      messageLogId: "vYnE-CzjXNIzxj3j27jJ2",
      dateTime: "2021-03-02T15:53:59.930Z",
      measurement: "measured_azimuth_deg",
      value: "1.7148393421857464"
    },
    {
      messageLogId: "Au7ViZWGgrs6O4mSskYJa",
      dateTime: "2021-03-02T15:54:34.681Z",
      measurement: "measured_azimuth_deg",
      value: "0.26803308740397624"
    },
    {
      messageLogId: "uo2EirSmWmtcFNFSjJcid",
      dateTime: "2021-03-02T15:54:54.195Z",
      measurement: "measured_azimuth_deg",
      value: "0.04024824273537586"
    },
    {
      messageLogId: "LIiDUrf0nG564SUWMaDFD",
      dateTime: "2021-03-02T15:55:03.308Z",
      measurement: "measured_azimuth_deg",
      value: "1.9416794443608936"
    },
    {
      messageLogId: "H0AzQd0QaJU3Wg6mSQtSm",
      dateTime: "2021-03-02T15:55:12.215Z",
      measurement: "measured_azimuth_deg",
      value: "0.41444315224490325"
    },
    {
      messageLogId: "VjBHnMoc5Pkeou1YMGlxU",
      dateTime: "2021-03-02T15:55:34.138Z",
      measurement: "measured_azimuth_deg",
      value: "1.863096383059612"
    },
    {
      messageLogId: "LX6SpooAMIJCACJkJRibE",
      dateTime: "2021-03-02T15:56:02.089Z",
      measurement: "measured_azimuth_deg",
      value: "0.3119942172388741"
    },
    {
      messageLogId: "BlAHYx5VNtuhLvDeOiyGw",
      dateTime: "2021-03-02T15:56:22.371Z",
      measurement: "measured_azimuth_deg",
      value: "0.461302105462134"
    },
    {
      messageLogId: "kVamTLop0BDSW_u4vyy9r",
      dateTime: "2021-03-02T15:56:29.139Z",
      measurement: "measured_azimuth_deg",
      value: "0.8134409310337669"
    },
    {
      messageLogId: "XErnl7KDFtoHBstN_sOrF",
      dateTime: "2021-03-02T15:57:01.441Z",
      measurement: "measured_azimuth_deg",
      value: "0.5165650238165889"
    },
    {
      messageLogId: "1xZqz0RPtc3wAu64hjzKN",
      dateTime: "2021-03-02T15:57:19.306Z",
      measurement: "measured_azimuth_deg",
      value: "0.04804734072335748"
    },
    {
      messageLogId: "06_QkHy6pZAIZsQ8x35Wa",
      dateTime: "2021-03-02T15:57:44.149Z",
      measurement: "measured_azimuth_deg",
      value: "1.6385860057616746"
    },
    {
      messageLogId: "u5ldzokpdHAqqp8rrLim4",
      dateTime: "2021-03-02T15:58:04.317Z",
      measurement: "measured_azimuth_deg",
      value: "0.8591202106228526"
    },
    {
      messageLogId: "O7dk_UA5xa3YXzr254mog",
      dateTime: "2021-03-02T15:58:23.779Z",
      measurement: "measured_azimuth_deg",
      value: "0.7483848376315916"
    },
    {
      messageLogId: "yv6GD2JWvgyDlQ3ChPVHP",
      dateTime: "2021-03-02T15:58:38.760Z",
      measurement: "measured_azimuth_deg",
      value: "1.1346908716115678"
    },
    {
      messageLogId: "qu_OE9pWVS81pn6bYXYOU",
      dateTime: "2021-03-02T15:58:57.207Z",
      measurement: "measured_azimuth_deg",
      value: "1.614572048052795"
    },
    {
      messageLogId: "rfwzg1_W7lfAgnxfP0pBM",
      dateTime: "2021-03-02T15:59:11.704Z",
      measurement: "measured_azimuth_deg",
      value: "1.0082489828815426"
    },
    {
      messageLogId: "fAjFUBjb2OLsj8mKqXFzW",
      dateTime: "2021-03-02T15:59:14.277Z",
      measurement: "measured_azimuth_deg",
      value: "1.4502119022213855"
    },
    {
      messageLogId: "UoNaRQkyRa1MFLdSuFQBS",
      dateTime: "2021-03-02T15:59:28.332Z",
      measurement: "measured_azimuth_deg",
      value: "0.8022427425892293"
    },
    {
      messageLogId: "Xwk6gZJ7gZTLmmZSfqem_",
      dateTime: "2021-03-02T15:59:41.926Z",
      measurement: "measured_azimuth_deg",
      value: "1.7565406871814933"
    },
    {
      messageLogId: "ZKW2OPEr8CvLXUILdhSpC",
      dateTime: "2021-03-02T16:00:02.810Z",
      measurement: "measured_azimuth_deg",
      value: "1.1149537751323846"
    },
    {
      messageLogId: "atcbf2tuBVy7OuWF0idOo",
      dateTime: "2021-03-02T16:00:29.871Z",
      measurement: "measured_azimuth_deg",
      value: "0.9297000530901298"
    }
  ],
  Wb2_overallLock: [
    {
      messageLogId: "zl5zQP_Px8mJXfX-O94vF",
      dateTime: "2021-03-02T15:50:46.234Z",
      measurement: "Wb2_overallLock",
      value: "0.48282516196508807"
    },
    {
      messageLogId: "wuezHKc6VKiEYtCNGU_f5",
      dateTime: "2021-03-02T15:51:13.693Z",
      measurement: "Wb2_overallLock",
      value: "0.7724313638123048"
    },
    {
      messageLogId: "5mlGK-UxEXo_tUpihQvWQ",
      dateTime: "2021-03-02T15:51:26.916Z",
      measurement: "Wb2_overallLock",
      value: "1.328827775333876"
    },
    {
      messageLogId: "QVonMajOIqeuQ0QNj_fdH",
      dateTime: "2021-03-02T15:51:49.123Z",
      measurement: "Wb2_overallLock",
      value: "1.4952204462105825"
    },
    {
      messageLogId: "i92d3P8N50yS5bS9oD3YE",
      dateTime: "2021-03-02T15:52:06.002Z",
      measurement: "Wb2_overallLock",
      value: "1.0825949735785343"
    },
    {
      messageLogId: "EZiBs72JPTPIxIx9aP9u4",
      dateTime: "2021-03-02T15:52:13.420Z",
      measurement: "Wb2_overallLock",
      value: "0.5038009303134354"
    },
    {
      messageLogId: "dPdbMJ_E2TEHmLZPPZsME",
      dateTime: "2021-03-02T15:52:33.203Z",
      measurement: "Wb2_overallLock",
      value: "1.8255529052100183"
    },
    {
      messageLogId: "I8lGMKJcxJhbRlpuLqpK8",
      dateTime: "2021-03-02T15:52:59.726Z",
      measurement: "Wb2_overallLock",
      value: "1.8313970464276423"
    },
    {
      messageLogId: "WT-AcG5IiM1LKqO917yzG",
      dateTime: "2021-03-02T15:53:10.778Z",
      measurement: "Wb2_overallLock",
      value: "1.2536324745269898"
    },
    {
      messageLogId: "sD4QJC1wMDzFy23xhJthY",
      dateTime: "2021-03-02T15:53:21.099Z",
      measurement: "Wb2_overallLock",
      value: "0.2893969730731558"
    },
    {
      messageLogId: "IK0hi7WzF_4r88jNoiUNG",
      dateTime: "2021-03-02T15:53:46.464Z",
      measurement: "Wb2_overallLock",
      value: "1.3939502630281637"
    },
    {
      messageLogId: "EAqfNa2Fc-QFRN27Gn0O_",
      dateTime: "2021-03-02T15:54:11.275Z",
      measurement: "Wb2_overallLock",
      value: "0.47036455245230835"
    },
    {
      messageLogId: "5aSdlGIBPupmaKerlUEzR",
      dateTime: "2021-03-02T15:54:32.521Z",
      measurement: "Wb2_overallLock",
      value: "1.1550793071404515"
    },
    {
      messageLogId: "qO1yplNX7pr1rKI4vF7cO",
      dateTime: "2021-03-02T15:54:45.987Z",
      measurement: "Wb2_overallLock",
      value: "0.12190657561174012"
    },
    {
      messageLogId: "J8F98SyKkdW4TpPB_fok_",
      dateTime: "2021-03-02T15:55:27.820Z",
      measurement: "Wb2_overallLock",
      value: "0.3471891905680802"
    },
    {
      messageLogId: "Yhl-X465qH23picNTv6Uc",
      dateTime: "2021-03-02T15:55:40.024Z",
      measurement: "Wb2_overallLock",
      value: "0.7705989367176291"
    },
    {
      messageLogId: "Npmqdd9Z5tEobic2diOhE",
      dateTime: "2021-03-02T15:56:06.769Z",
      measurement: "Wb2_overallLock",
      value: "0.7517564058624906"
    },
    {
      messageLogId: "fhCoAmId7_OiYdtKTHfOz",
      dateTime: "2021-03-02T15:56:24.358Z",
      measurement: "Wb2_overallLock",
      value: "1.5375752273201035"
    },
    {
      messageLogId: "9bW72zbBv00aFMUt4IPeW",
      dateTime: "2021-03-02T15:56:29.786Z",
      measurement: "Wb2_overallLock",
      value: "0.769178232004309"
    },
    {
      messageLogId: "OaGeQmKzS89PkCrV06GMG",
      dateTime: "2021-03-02T15:56:42.618Z",
      measurement: "Wb2_overallLock",
      value: "1.9904959389695525"
    },
    {
      messageLogId: "Yolh-OcwcAu_fWGWaYhie",
      dateTime: "2021-03-02T15:56:49.005Z",
      measurement: "Wb2_overallLock",
      value: "0.24179029517873274"
    },
    {
      messageLogId: "40sji68hE_dKmdZSmmD96",
      dateTime: "2021-03-02T15:57:05.918Z",
      measurement: "Wb2_overallLock",
      value: "0.7881905332226209"
    },
    {
      messageLogId: "nzkHahAG3qSDODWhDFVKx",
      dateTime: "2021-03-02T15:57:15.749Z",
      measurement: "Wb2_overallLock",
      value: "0.5736644670337803"
    },
    {
      messageLogId: "_JCxI3hwUgVdIeGTlopA-",
      dateTime: "2021-03-02T15:57:36.424Z",
      measurement: "Wb2_overallLock",
      value: "0.5352710581106823"
    },
    {
      messageLogId: "Lij7VUD9L7lebQe9dbHYP",
      dateTime: "2021-03-02T15:58:10.186Z",
      measurement: "Wb2_overallLock",
      value: "1.72024771881031"
    },
    {
      messageLogId: "K2YVpXfEkcH31R5gll3zn",
      dateTime: "2021-03-02T15:58:25.709Z",
      measurement: "Wb2_overallLock",
      value: "1.6775318753602295"
    },
    {
      messageLogId: "v6GyLdkaEBmLoOYBCcQfr",
      dateTime: "2021-03-02T15:58:35.264Z",
      measurement: "Wb2_overallLock",
      value: "0.23713527050040462"
    },
    {
      messageLogId: "6Rp-6urEmdV-qBaARLx8x",
      dateTime: "2021-03-02T15:59:01.074Z",
      measurement: "Wb2_overallLock",
      value: "1.8083201592632128"
    },
    {
      messageLogId: "whCJAhQHbTksObMQbwEZQ",
      dateTime: "2021-03-02T15:59:17.407Z",
      measurement: "Wb2_overallLock",
      value: "1.7879051275964186"
    },
    {
      messageLogId: "57BCsWVbPO3boEkoZwxRb",
      dateTime: "2021-03-02T15:59:36.571Z",
      measurement: "Wb2_overallLock",
      value: "1.2431912963080929"
    },
    {
      messageLogId: "fXKIg8CXMa5zGGDLQ5xKZ",
      dateTime: "2021-03-02T15:59:46.488Z",
      measurement: "Wb2_overallLock",
      value: "0.5949020247935835"
    },
    {
      messageLogId: "ahe7ymO0jslmeEjeH6XPX",
      dateTime: "2021-03-02T15:59:50.655Z",
      measurement: "Wb2_overallLock",
      value: "0.5131566906969347"
    },
    {
      messageLogId: "sBrkGdIFYHsvGZCrUdMkk",
      dateTime: "2021-03-02T15:59:56.809Z",
      measurement: "Wb2_overallLock",
      value: "1.4373533210093854"
    },
    {
      messageLogId: "ZkavrIDSTuF9_Uk4dKcH9",
      dateTime: "2021-03-02T16:00:25.722Z",
      measurement: "Wb2_overallLock",
      value: "1.2851103577045018"
    }
  ],
  Wb2_symbolLockQ: [
    {
      messageLogId: "9KwSllnuTen6kfJXF9m0I",
      dateTime: "2021-03-02T15:50:49.661Z",
      measurement: "Wb2_symbolLockQ",
      value: "6.356728264513143"
    },
    {
      messageLogId: "TcZ0GVReXXL4w0F8k5VgL",
      dateTime: "2021-03-02T15:51:05.868Z",
      measurement: "Wb2_symbolLockQ",
      value: "4.544997521943326"
    },
    {
      messageLogId: "iazwxaLHnb0YNkAcPNtLw",
      dateTime: "2021-03-02T15:51:16.095Z",
      measurement: "Wb2_symbolLockQ",
      value: "2.852564163442829"
    },
    {
      messageLogId: "JxiPhGFh1HERNn-iGMcBP",
      dateTime: "2021-03-02T15:51:29.855Z",
      measurement: "Wb2_symbolLockQ",
      value: "0.9637010105230122"
    },
    {
      messageLogId: "LQbnqlexTr0Pf7-65k40w",
      dateTime: "2021-03-02T15:52:07.294Z",
      measurement: "Wb2_symbolLockQ",
      value: "5.365721685724501"
    },
    {
      messageLogId: "W1iuYXU4wo4hgsvIQTsIY",
      dateTime: "2021-03-02T15:52:27.657Z",
      measurement: "Wb2_symbolLockQ",
      value: "0.9995990243973898"
    },
    {
      messageLogId: "CJgG1IV9_4-3u-NeJ33l6",
      dateTime: "2021-03-02T15:52:47.585Z",
      measurement: "Wb2_symbolLockQ",
      value: "1.919820781737542"
    },
    {
      messageLogId: "a5vAVJY4UlN5pSCOpP61B",
      dateTime: "2021-03-02T15:53:01.355Z",
      measurement: "Wb2_symbolLockQ",
      value: "6.950854384704468"
    },
    {
      messageLogId: "HmESPpMv95OUO_KLjJ_rS",
      dateTime: "2021-03-02T15:53:14.536Z",
      measurement: "Wb2_symbolLockQ",
      value: "0.4769162531918987"
    },
    {
      messageLogId: "8fEaJsiqiVVYqpaYFZh6Q",
      dateTime: "2021-03-02T15:53:41.712Z",
      measurement: "Wb2_symbolLockQ",
      value: "3.0843799180852933"
    },
    {
      messageLogId: "m6pFSp7IUIBmaSWwVYZUl",
      dateTime: "2021-03-02T15:54:11.185Z",
      measurement: "Wb2_symbolLockQ",
      value: "2.8716872905222806"
    },
    {
      messageLogId: "_F7ldR8Tx3zpGfQYwhp8K",
      dateTime: "2021-03-02T15:54:31.185Z",
      measurement: "Wb2_symbolLockQ",
      value: "2.138964239110284"
    },
    {
      messageLogId: "QTkDtE-Dovkbkh9IWsf4B",
      dateTime: "2021-03-02T15:54:36.977Z",
      measurement: "Wb2_symbolLockQ",
      value: "4.266312467250375"
    },
    {
      messageLogId: "X7ZkktiHCh3UpC4DNCo-l",
      dateTime: "2021-03-02T15:54:53.348Z",
      measurement: "Wb2_symbolLockQ",
      value: "6.1856365818602015"
    },
    {
      messageLogId: "oEZWebdoPguCMoQk_4zSG",
      dateTime: "2021-03-02T15:55:13.477Z",
      measurement: "Wb2_symbolLockQ",
      value: "5.4731986038062335"
    },
    {
      messageLogId: "fO40sHF6cLwEyioIcPSNc",
      dateTime: "2021-03-02T15:55:26.101Z",
      measurement: "Wb2_symbolLockQ",
      value: "0.6494492689841449"
    },
    {
      messageLogId: "rjfmPS9SyzwrbTOab--EU",
      dateTime: "2021-03-02T15:56:00.271Z",
      measurement: "Wb2_symbolLockQ",
      value: "4.473100964521628"
    },
    {
      messageLogId: "H5sns_P1YSc1P00yjWKa1",
      dateTime: "2021-03-02T15:56:22.561Z",
      measurement: "Wb2_symbolLockQ",
      value: "6.791321415935846"
    },
    {
      messageLogId: "qhlYtuqZB5kAdEcM2xWmA",
      dateTime: "2021-03-02T15:56:35.964Z",
      measurement: "Wb2_symbolLockQ",
      value: "6.772341102935943"
    },
    {
      messageLogId: "pMX_0QfIjKpEuSuIDbclb",
      dateTime: "2021-03-02T15:56:55.531Z",
      measurement: "Wb2_symbolLockQ",
      value: "2.563857757200971"
    },
    {
      messageLogId: "T96i8lDi4tr49IjEa24j7",
      dateTime: "2021-03-02T15:57:09.805Z",
      measurement: "Wb2_symbolLockQ",
      value: "4.634174101489439"
    },
    {
      messageLogId: "bmEBr714UcuKadXpZM2KC",
      dateTime: "2021-03-02T15:57:31.800Z",
      measurement: "Wb2_symbolLockQ",
      value: "1.715231343571995"
    },
    {
      messageLogId: "DiPtqJ8sHzgya5B1ARd98",
      dateTime: "2021-03-02T15:58:08.040Z",
      measurement: "Wb2_symbolLockQ",
      value: "1.5708030894864766"
    },
    {
      messageLogId: "fEfDN8VrtXamCywB968RW",
      dateTime: "2021-03-02T15:58:31.647Z",
      measurement: "Wb2_symbolLockQ",
      value: "2.0662877382540943"
    },
    {
      messageLogId: "dGsnW0Dpqj3Vb8hK5zZJ8",
      dateTime: "2021-03-02T15:58:38.365Z",
      measurement: "Wb2_symbolLockQ",
      value: "0.5533847749727361"
    },
    {
      messageLogId: "4E65_ZgdbKMjENWbapyFS",
      dateTime: "2021-03-02T15:58:48.885Z",
      measurement: "Wb2_symbolLockQ",
      value: "2.8337098413983215"
    },
    {
      messageLogId: "fcehAqUQiSNr-WSnStAgU",
      dateTime: "2021-03-02T15:59:18.436Z",
      measurement: "Wb2_symbolLockQ",
      value: "0.2523363253475024"
    },
    {
      messageLogId: "OCo3u6-SyVzujPfEI-7NP",
      dateTime: "2021-03-02T15:59:30.640Z",
      measurement: "Wb2_symbolLockQ",
      value: "7.6296582211535995"
    },
    {
      messageLogId: "eTSpCQf3QCnuffUFLijaw",
      dateTime: "2021-03-02T15:59:48.426Z",
      measurement: "Wb2_symbolLockQ",
      value: "6.478124959414782"
    },
    {
      messageLogId: "Emzk4UO4vyMhGb3LoIll7",
      dateTime: "2021-03-02T16:00:16.807Z",
      measurement: "Wb2_symbolLockQ",
      value: "5.367640833754997"
    },
    {
      messageLogId: "LN8addHjhL0GocoVOAzRY",
      dateTime: "2021-03-02T16:00:39.334Z",
      measurement: "Wb2_symbolLockQ",
      value: "7.150322493859147"
    }
  ],
  Wb1_carrierOffsetFrequency: [
    {
      messageLogId: "gEw9zLjykAeoyWUYmceXS",
      dateTime: "2021-03-02T15:50:48.367Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "4.33176238606643"
    },
    {
      messageLogId: "0ZbHHAeYV2jJrSyC3tkae",
      dateTime: "2021-03-02T15:51:22.203Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "2.2388437863227506"
    },
    {
      messageLogId: "Ft-v9ljb-5KYWjeoxgpUv",
      dateTime: "2021-03-02T15:51:51.579Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "2.850853861874068"
    },
    {
      messageLogId: "x6yi4RCLVIJ0WtMdRoawI",
      dateTime: "2021-03-02T15:52:31.139Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "0.8781049427416787"
    },
    {
      messageLogId: "zuacWE5Obdi5NMPAJTKBX",
      dateTime: "2021-03-02T15:52:53.300Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "2.330370364266364"
    },
    {
      messageLogId: "cfDbbzeyqq3m-6lq0ZihI",
      dateTime: "2021-03-02T15:53:05.730Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "0.0276063162838458"
    },
    {
      messageLogId: "PB5m6WdGO9DWTCZ5cyux3",
      dateTime: "2021-03-02T15:53:11.634Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "4.9768400688992545"
    },
    {
      messageLogId: "0hWImI4EgykrnrVXp7qPX",
      dateTime: "2021-03-02T15:53:19.428Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "0.45700114955136373"
    },
    {
      messageLogId: "3bhXZkFTfto_YojwuEVTI",
      dateTime: "2021-03-02T15:53:28.584Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "1.9100832970324044"
    },
    {
      messageLogId: "AW_vj7HDwSO-teHyBMSGo",
      dateTime: "2021-03-02T15:53:36.692Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "2.033407460645589"
    },
    {
      messageLogId: "szRaUn56wrHVE8sH8ZFJg",
      dateTime: "2021-03-02T15:53:58.240Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "4.07815803320879"
    },
    {
      messageLogId: "i2eRA_fTyni6DuvvI-IyY",
      dateTime: "2021-03-02T15:54:08.166Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "4.5916149494672345"
    },
    {
      messageLogId: "8Nm1PFMFI4CB4kqceXeDC",
      dateTime: "2021-03-02T15:54:25.376Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "4.292391504009275"
    },
    {
      messageLogId: "r9HRHFxwIzlimfTuCIu6o",
      dateTime: "2021-03-02T15:54:37.531Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "2.3253144767086416"
    },
    {
      messageLogId: "UQhgrWazISJ4RmcOOjSoa",
      dateTime: "2021-03-02T15:54:40.958Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "2.267016719867245"
    },
    {
      messageLogId: "DazlFjdK9fn6JCBVmrVKz",
      dateTime: "2021-03-02T15:55:18.188Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "4.564809916344048"
    },
    {
      messageLogId: "z2adapqvOyb5svdW2BpP6",
      dateTime: "2021-03-02T15:55:35.705Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "3.81594561827576"
    },
    {
      messageLogId: "fRP4_C_4vJuomEgzDAO43",
      dateTime: "2021-03-02T15:56:06.537Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "3.031026463463306"
    },
    {
      messageLogId: "ae5csOz3AxveahzYec6aj",
      dateTime: "2021-03-02T15:56:24.775Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "2.520060280020174"
    },
    {
      messageLogId: "W9ZlFpS0XNl1g2_3ux8As",
      dateTime: "2021-03-02T15:56:39.586Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "3.8558417987687195"
    },
    {
      messageLogId: "A6AclTQAzRKes8PeQ7qJT",
      dateTime: "2021-03-02T15:56:56.581Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "2.3045657150050403"
    },
    {
      messageLogId: "8pFWS9NCg7HbKDDQsabIt",
      dateTime: "2021-03-02T15:57:08.206Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "2.4713722982259108"
    },
    {
      messageLogId: "f_gvD-IkpORRtzc5z2Jvz",
      dateTime: "2021-03-02T15:57:34.589Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "3.632204718222833"
    },
    {
      messageLogId: "fRIk2x5EPHDMqh_m8kbeV",
      dateTime: "2021-03-02T15:57:43.112Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "2.315926539462035"
    },
    {
      messageLogId: "seCRghK3vIXaB1cCjPNyO",
      dateTime: "2021-03-02T15:57:59.762Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "0.3969314361628906"
    },
    {
      messageLogId: "-tSY0FgxTS4arHnBTfl_F",
      dateTime: "2021-03-02T15:58:15.877Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "1.7077592828528976"
    },
    {
      messageLogId: "qhjiWHXKOAoRrq96Qqx-Z",
      dateTime: "2021-03-02T15:58:25.439Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "4.667912774592269"
    },
    {
      messageLogId: "pfCCKxUCdTISto9IobEYY",
      dateTime: "2021-03-02T15:58:46.098Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "4.52380248427407"
    },
    {
      messageLogId: "Kuh2upuaQKX8MrNFKumH5",
      dateTime: "2021-03-02T15:58:58.431Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "3.2465106826526595"
    },
    {
      messageLogId: "kxMSzkaPBhe7DJvCebyZY",
      dateTime: "2021-03-02T15:59:21.508Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "2.0975282858037"
    },
    {
      messageLogId: "Z0KsOTS5Rk5jI5p0WPRyS",
      dateTime: "2021-03-02T15:59:47.670Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "0.4159092768457534"
    },
    {
      messageLogId: "3qMmX0PbKGlvdREuNpa9O",
      dateTime: "2021-03-02T16:00:19.046Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "0.9228727334723114"
    },
    {
      messageLogId: "ttol2gj48bdycm75VFyTO",
      dateTime: "2021-03-02T16:00:30.854Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "4.3561656258167165"
    },
    {
      messageLogId: "ewTcDS077rWY3eNhZ8r8X",
      dateTime: "2021-03-02T16:00:37.137Z",
      measurement: "Wb1_carrierOffsetFrequency",
      value: "2.436563860738865"
    }
  ],
  Wb2_totalPower: [
    {
      messageLogId: "6G3hmB5KWhJAEU4r5yKAE",
      dateTime: "2021-03-02T15:50:47.623Z",
      measurement: "Wb2_totalPower",
      value: "0.013909668393961017"
    },
    {
      messageLogId: "dPTY9ayZgA2gel43Bc3R5",
      dateTime: "2021-03-02T15:51:14.382Z",
      measurement: "Wb2_totalPower",
      value: "3.7333199658631857"
    },
    {
      messageLogId: "4dGCxapBJy-TlQLY75LbF",
      dateTime: "2021-03-02T15:51:33.917Z",
      measurement: "Wb2_totalPower",
      value: "3.7611679005393457"
    },
    {
      messageLogId: "7uECEbIfgkwlKe8-w7wTv",
      dateTime: "2021-03-02T15:52:12.892Z",
      measurement: "Wb2_totalPower",
      value: "4.699068567301588"
    },
    {
      messageLogId: "DT9FaMsicTR_w2oQjrCu9",
      dateTime: "2021-03-02T15:52:29.682Z",
      measurement: "Wb2_totalPower",
      value: "2.406354986493061"
    },
    {
      messageLogId: "Z2pU4yyQ01316fjd8D6Lk",
      dateTime: "2021-03-02T15:52:53.353Z",
      measurement: "Wb2_totalPower",
      value: "4.119009413943678"
    },
    {
      messageLogId: "BYETMos9WBvL0PvkbmpPR",
      dateTime: "2021-03-02T15:53:12.988Z",
      measurement: "Wb2_totalPower",
      value: "0.9303779995386519"
    },
    {
      messageLogId: "kRIUR0lB6mIRZJbEZQKZO",
      dateTime: "2021-03-02T15:53:22.376Z",
      measurement: "Wb2_totalPower",
      value: "1.29361521101509"
    },
    {
      messageLogId: "jOO7QGCRalgj1wfmxYgMH",
      dateTime: "2021-03-02T15:53:26.142Z",
      measurement: "Wb2_totalPower",
      value: "4.24637476299604"
    },
    {
      messageLogId: "i2315HcuaZuX3BHnS0oer",
      dateTime: "2021-03-02T15:54:07.607Z",
      measurement: "Wb2_totalPower",
      value: "2.2647735726123477"
    },
    {
      messageLogId: "sFGEjHCGlHBLXpALO7jrp",
      dateTime: "2021-03-02T15:54:13.367Z",
      measurement: "Wb2_totalPower",
      value: "1.9794696691155318"
    },
    {
      messageLogId: "cthlB8BfDQRtSzpZ3E0VM",
      dateTime: "2021-03-02T15:54:28.762Z",
      measurement: "Wb2_totalPower",
      value: "2.494241714946214"
    },
    {
      messageLogId: "LUHKpv3CCgKEl3cc7PEr8",
      dateTime: "2021-03-02T15:54:53.806Z",
      measurement: "Wb2_totalPower",
      value: "2.6378857075891258"
    },
    {
      messageLogId: "6qEbataqaE7bmD9It6uJC",
      dateTime: "2021-03-02T15:55:06.378Z",
      measurement: "Wb2_totalPower",
      value: "2.9118820402651533"
    },
    {
      messageLogId: "lsOybC9fO1DvhTGYy_Jg1",
      dateTime: "2021-03-02T15:55:41.842Z",
      measurement: "Wb2_totalPower",
      value: "2.0690144843061113"
    },
    {
      messageLogId: "LIMMAFRJGXKGyWrVT8gqS",
      dateTime: "2021-03-02T15:56:00.505Z",
      measurement: "Wb2_totalPower",
      value: "0.28228522042313076"
    },
    {
      messageLogId: "rQg-ytu-NMAe41sjywFjA",
      dateTime: "2021-03-02T15:56:23.448Z",
      measurement: "Wb2_totalPower",
      value: "1.3696274186889135"
    },
    {
      messageLogId: "W7fkUdIjZkUb8Yue_5moe",
      dateTime: "2021-03-02T15:56:36.480Z",
      measurement: "Wb2_totalPower",
      value: "4.600973186001507"
    },
    {
      messageLogId: "5tGV-jzNCjnQVUi5u4B4O",
      dateTime: "2021-03-02T15:56:43.402Z",
      measurement: "Wb2_totalPower",
      value: "2.2386442983362027"
    },
    {
      messageLogId: "1FRdD1a_YhN4ZiY7sTcxQ",
      dateTime: "2021-03-02T15:57:14.472Z",
      measurement: "Wb2_totalPower",
      value: "3.777039354828763"
    },
    {
      messageLogId: "3aEyxdLG_YBN_24W7P32d",
      dateTime: "2021-03-02T15:57:38.976Z",
      measurement: "Wb2_totalPower",
      value: "0.35233531225804304"
    },
    {
      messageLogId: "j23sx4oXfW0MsEdrv_Y7v",
      dateTime: "2021-03-02T15:57:49.024Z",
      measurement: "Wb2_totalPower",
      value: "4.075638134881576"
    },
    {
      messageLogId: "FzkD3Be5Hikp82LulWAGT",
      dateTime: "2021-03-02T15:58:15.140Z",
      measurement: "Wb2_totalPower",
      value: "1.6261233805287407"
    },
    {
      messageLogId: "xVRkV9T4pItmXrD2J5mBs",
      dateTime: "2021-03-02T15:58:25.851Z",
      measurement: "Wb2_totalPower",
      value: "0.1133221257694117"
    },
    {
      messageLogId: "7Tt587MlQTRL7DYLja3_s",
      dateTime: "2021-03-02T15:58:53.537Z",
      measurement: "Wb2_totalPower",
      value: "3.26194341967726"
    },
    {
      messageLogId: "3P19Ncg9UKeqpTABBP8Ew",
      dateTime: "2021-03-02T15:58:57.505Z",
      measurement: "Wb2_totalPower",
      value: "0.9730313866144708"
    },
    {
      messageLogId: "MJU1TzOFAm8U0DrpDM4LZ",
      dateTime: "2021-03-02T15:59:12.077Z",
      measurement: "Wb2_totalPower",
      value: "1.5171277134566208"
    },
    {
      messageLogId: "KB250a3hqeOlCiKh7vUeA",
      dateTime: "2021-03-02T15:59:42.752Z",
      measurement: "Wb2_totalPower",
      value: "3.5059464499396205"
    },
    {
      messageLogId: "Rkb5skaXhalVOI6U0Y8zE",
      dateTime: "2021-03-02T16:00:05.747Z",
      measurement: "Wb2_totalPower",
      value: "2.171355605309753"
    },
    {
      messageLogId: "fWxhZTiEgN7pefDHTp1lc",
      dateTime: "2021-03-02T16:00:21.985Z",
      measurement: "Wb2_totalPower",
      value: "0.5872434693883599"
    },
    {
      messageLogId: "NmgFJu4HZ9UTqVNi8fRn7",
      dateTime: "2021-03-02T16:00:35.291Z",
      measurement: "Wb2_totalPower",
      value: "1.2160735545254102"
    }
  ],
  measured_elevation_deg: [
    {
      messageLogId: "OG1mqQ9690t57LFKechi2",
      dateTime: "2021-03-02T15:50:46.821Z",
      measurement: "measured_elevation_deg",
      value: "3.664937790316303"
    },
    {
      messageLogId: "6E7Am4F_veAAB3Cq8ZG3V",
      dateTime: "2021-03-02T15:50:55.204Z",
      measurement: "measured_elevation_deg",
      value: "3.9229676956524067"
    },
    {
      messageLogId: "79NafmyN8JP3XRDO4tmet",
      dateTime: "2021-03-02T15:51:04.582Z",
      measurement: "measured_elevation_deg",
      value: "3.0758796151194994"
    },
    {
      messageLogId: "Oq-2hDLwW97thm81ZYpVj",
      dateTime: "2021-03-02T15:51:19.781Z",
      measurement: "measured_elevation_deg",
      value: "0.1977160789825816"
    },
    {
      messageLogId: "BPSofNLYPTGvT3dAd8GAq",
      dateTime: "2021-03-02T15:51:37.505Z",
      measurement: "measured_elevation_deg",
      value: "2.735978707775997"
    },
    {
      messageLogId: "Ai9yTxeqeCTUEXLYg83So",
      dateTime: "2021-03-02T15:51:54.923Z",
      measurement: "measured_elevation_deg",
      value: "1.937523403021052"
    },
    {
      messageLogId: "FCJljImBofOFzCtWWYZMH",
      dateTime: "2021-03-02T15:52:09.429Z",
      measurement: "measured_elevation_deg",
      value: "2.7457706556167"
    },
    {
      messageLogId: "uT2xa6x067ZnhNdIo9WO3",
      dateTime: "2021-03-02T15:52:34.600Z",
      measurement: "measured_elevation_deg",
      value: "4.36284039396448"
    },
    {
      messageLogId: "KXLOZ0YJ5b0hmCOlbRpZM",
      dateTime: "2021-03-02T15:52:40.661Z",
      measurement: "measured_elevation_deg",
      value: "3.9375495705090118"
    },
    {
      messageLogId: "JhI96ZRq-XDKeZnBZaHJO",
      dateTime: "2021-03-02T15:53:02.438Z",
      measurement: "measured_elevation_deg",
      value: "1.2506610886569476"
    },
    {
      messageLogId: "Zi9IWxU-X5jSMYWtxZdzl",
      dateTime: "2021-03-02T15:53:30.540Z",
      measurement: "measured_elevation_deg",
      value: "0.14467902117672404"
    },
    {
      messageLogId: "6_bTSDUdNq72bihsTSzqN",
      dateTime: "2021-03-02T15:53:37.311Z",
      measurement: "measured_elevation_deg",
      value: "4.278629859236645"
    },
    {
      messageLogId: "wDaJ5eSQUdwy8FZoW08Ec",
      dateTime: "2021-03-02T15:53:46.268Z",
      measurement: "measured_elevation_deg",
      value: "4.3302243802520755"
    },
    {
      messageLogId: "QXhWE8N5zdLxjMzATT-aG",
      dateTime: "2021-03-02T15:54:23.176Z",
      measurement: "measured_elevation_deg",
      value: "2.987164909794256"
    },
    {
      messageLogId: "u-Re1kQvkL5cGg3vT22_R",
      dateTime: "2021-03-02T15:54:34.136Z",
      measurement: "measured_elevation_deg",
      value: "4.7068441578326095"
    },
    {
      messageLogId: "MeJZMN3_fG5eBbTtkKyJg",
      dateTime: "2021-03-02T15:54:54.759Z",
      measurement: "measured_elevation_deg",
      value: "3.277640355002957"
    },
    {
      messageLogId: "5jANDVgRFGJ2hDogOUdqu",
      dateTime: "2021-03-02T15:55:22.412Z",
      measurement: "measured_elevation_deg",
      value: "0.52621173938598"
    },
    {
      messageLogId: "-NktEykuN6ZNPPt83ljKw",
      dateTime: "2021-03-02T15:55:28.024Z",
      measurement: "measured_elevation_deg",
      value: "0.4546854396621064"
    },
    {
      messageLogId: "41RzHCRE3j0isZCtRMYpF",
      dateTime: "2021-03-02T15:56:12.482Z",
      measurement: "measured_elevation_deg",
      value: "1.0370671710817776"
    },
    {
      messageLogId: "_WsGHBPFpPhOs76ZdaSgv",
      dateTime: "2021-03-02T15:56:21.697Z",
      measurement: "measured_elevation_deg",
      value: "3.531369177078276"
    },
    {
      messageLogId: "Jpuxe2H4gk0uWeF6KwHO3",
      dateTime: "2021-03-02T15:56:39.426Z",
      measurement: "measured_elevation_deg",
      value: "2.190842613036554"
    },
    {
      messageLogId: "Z-x04jQNrnoKcCwD4xVWD",
      dateTime: "2021-03-02T15:56:45.740Z",
      measurement: "measured_elevation_deg",
      value: "2.1163446624153597"
    },
    {
      messageLogId: "c3dQ0wD4FJWYrriUOLAd_",
      dateTime: "2021-03-02T15:57:21.939Z",
      measurement: "measured_elevation_deg",
      value: "2.4498476345549314"
    },
    {
      messageLogId: "vNA0SFU_MFZWwV5AONtvx",
      dateTime: "2021-03-02T15:57:36.447Z",
      measurement: "measured_elevation_deg",
      value: "2.6695258649522318"
    },
    {
      messageLogId: "prKHYggu4U3UlytR37PBr",
      dateTime: "2021-03-02T15:58:13.623Z",
      measurement: "measured_elevation_deg",
      value: "2.8912945389955222"
    },
    {
      messageLogId: "rsLbPS4t1suwswuCYzQSb",
      dateTime: "2021-03-02T15:58:35.925Z",
      measurement: "measured_elevation_deg",
      value: "0.14613086210962745"
    },
    {
      messageLogId: "sCEUlS64OfITF1oXjjAKg",
      dateTime: "2021-03-02T15:58:50.645Z",
      measurement: "measured_elevation_deg",
      value: "1.995124977620533"
    },
    {
      messageLogId: "SFBQ4onqSDwMRtA71wfxA",
      dateTime: "2021-03-02T15:59:17.984Z",
      measurement: "measured_elevation_deg",
      value: "3.6596508386089233"
    },
    {
      messageLogId: "bCXvy5JE918LMpHKlZqns",
      dateTime: "2021-03-02T15:59:33.219Z",
      measurement: "measured_elevation_deg",
      value: "2.0376890359828237"
    },
    {
      messageLogId: "qlhuWnagI0nakfHyaIfRk",
      dateTime: "2021-03-02T15:59:47.071Z",
      measurement: "measured_elevation_deg",
      value: "3.628945939948043"
    },
    {
      messageLogId: "ukOsUhPkkcxN6DlnP2okk",
      dateTime: "2021-03-02T16:00:03.637Z",
      measurement: "measured_elevation_deg",
      value: "0.1637253815027967"
    },
    {
      messageLogId: "rXsao5Cgg-cfj14-HhIj2",
      dateTime: "2021-03-02T16:00:43.950Z",
      measurement: "measured_elevation_deg",
      value: "0.7537372286466015"
    }
  ],
  Wb2_carrierLock: [
    {
      messageLogId: "5PjOm7BQtseQupQHJof-H",
      dateTime: "2021-03-02T15:50:50.899Z",
      measurement: "Wb2_carrierLock",
      value: "2.43598564653008"
    },
    {
      messageLogId: "Im_Q8bh31F8H5KiuGLpKb",
      dateTime: "2021-03-02T15:51:16.495Z",
      measurement: "Wb2_carrierLock",
      value: "0.7813002396211393"
    },
    {
      messageLogId: "jsp-elgpx2MUkzrvpV0V0",
      dateTime: "2021-03-02T15:51:32.175Z",
      measurement: "Wb2_carrierLock",
      value: "1.3052945846717203"
    },
    {
      messageLogId: "sWt7nk-xJ75O1PJGSo9ef",
      dateTime: "2021-03-02T15:51:41.900Z",
      measurement: "Wb2_carrierLock",
      value: "1.272953964827476"
    },
    {
      messageLogId: "-v8WjI-nJKidX5m-GHo2w",
      dateTime: "2021-03-02T15:52:10.557Z",
      measurement: "Wb2_carrierLock",
      value: "1.0411667186040052"
    },
    {
      messageLogId: "K8LBCMaSr4GDlyOG2uekv",
      dateTime: "2021-03-02T15:52:24.269Z",
      measurement: "Wb2_carrierLock",
      value: "0.3192977418294536"
    },
    {
      messageLogId: "nQ3U2CCXJymYkNJliSpFT",
      dateTime: "2021-03-02T15:52:43.578Z",
      measurement: "Wb2_carrierLock",
      value: "1.203839241710753"
    },
    {
      messageLogId: "2pV71zeQ1KFrcTCTcTJ7Q",
      dateTime: "2021-03-02T15:53:03.162Z",
      measurement: "Wb2_carrierLock",
      value: "1.827577061629404"
    },
    {
      messageLogId: "DUmiizQUjigDBtPJq5NSG",
      dateTime: "2021-03-02T15:53:30.024Z",
      measurement: "Wb2_carrierLock",
      value: "2.0817470723516647"
    },
    {
      messageLogId: "HPfx1fSrNlVeaIurRJhVa",
      dateTime: "2021-03-02T15:53:49.103Z",
      measurement: "Wb2_carrierLock",
      value: "1.7615269432158245"
    },
    {
      messageLogId: "08pVfsnWnYHtQTvXVlzgC",
      dateTime: "2021-03-02T15:54:05.191Z",
      measurement: "Wb2_carrierLock",
      value: "0.4988215246386827"
    },
    {
      messageLogId: "G4Zp9Yxdw1beAqffVlSUH",
      dateTime: "2021-03-02T15:54:13.492Z",
      measurement: "Wb2_carrierLock",
      value: "1.1485566074795988"
    },
    {
      messageLogId: "x6PsQ4Jf8Bi4EwYYJah9x",
      dateTime: "2021-03-02T15:54:30.822Z",
      measurement: "Wb2_carrierLock",
      value: "1.3873931980503045"
    },
    {
      messageLogId: "BDjZ4L9__dDRid7OiKQcV",
      dateTime: "2021-03-02T15:54:44.598Z",
      measurement: "Wb2_carrierLock",
      value: "2.6484470414971355"
    },
    {
      messageLogId: "1V6zegjXeKDhCbTFuD8AD",
      dateTime: "2021-03-02T15:55:11.958Z",
      measurement: "Wb2_carrierLock",
      value: "0.03218695278930328"
    },
    {
      messageLogId: "fJBLaWmV0RBUJ4DZahgXS",
      dateTime: "2021-03-02T15:55:39.136Z",
      measurement: "Wb2_carrierLock",
      value: "1.6622922168230074"
    },
    {
      messageLogId: "bW7soPiur8DiRLu0LSz7V",
      dateTime: "2021-03-02T15:55:59.998Z",
      measurement: "Wb2_carrierLock",
      value: "3.4830329764592247"
    },
    {
      messageLogId: "lcte5HLTbx9q7gL4ADxEn",
      dateTime: "2021-03-02T15:56:22.941Z",
      measurement: "Wb2_carrierLock",
      value: "2.097191678944032"
    },
    {
      messageLogId: "LNYZttOrTvkUtCj2obJVW",
      dateTime: "2021-03-02T15:56:47.404Z",
      measurement: "Wb2_carrierLock",
      value: "1.4966482695378631"
    },
    {
      messageLogId: "5dEOxyeLYht5nWdFgbh_1",
      dateTime: "2021-03-02T15:56:54.830Z",
      measurement: "Wb2_carrierLock",
      value: "3.0655907047149755"
    },
    {
      messageLogId: "Yxb9qsPe6IplZ5U9iCjxL",
      dateTime: "2021-03-02T15:57:45.221Z",
      measurement: "Wb2_carrierLock",
      value: "3.3461466537629674"
    },
    {
      messageLogId: "kuAYZvVfXPF0cdkK1iaXl",
      dateTime: "2021-03-02T15:58:00.305Z",
      measurement: "Wb2_carrierLock",
      value: "0.6590429390925032"
    },
    {
      messageLogId: "Nxg5cbn4wrrr1ChO2WhZM",
      dateTime: "2021-03-02T15:58:11.261Z",
      measurement: "Wb2_carrierLock",
      value: "3.195609238676737"
    },
    {
      messageLogId: "oA8jI9r6gwooIs6-otiVV",
      dateTime: "2021-03-02T15:58:19.311Z",
      measurement: "Wb2_carrierLock",
      value: "1.0735310491540573"
    },
    {
      messageLogId: "NH1uoqYS_Nc4qtku1L_m_",
      dateTime: "2021-03-02T15:58:37.596Z",
      measurement: "Wb2_carrierLock",
      value: "1.530121216320536"
    },
    {
      messageLogId: "TX2_DECIoih89rbgwbUiz",
      dateTime: "2021-03-02T15:59:05.874Z",
      measurement: "Wb2_carrierLock",
      value: "3.579009447612154"
    },
    {
      messageLogId: "-ReMVbKjh0OQcB6bKbZKl",
      dateTime: "2021-03-02T15:59:27.006Z",
      measurement: "Wb2_carrierLock",
      value: "3.810840056912248"
    },
    {
      messageLogId: "YHX4wH_UOhziPUago2qFi",
      dateTime: "2021-03-02T15:59:40.227Z",
      measurement: "Wb2_carrierLock",
      value: "2.1965586385965805"
    },
    {
      messageLogId: "2E1tjtjgs_wKnSgxW2lFA",
      dateTime: "2021-03-02T15:59:52.177Z",
      measurement: "Wb2_carrierLock",
      value: "2.0564572116924804"
    },
    {
      messageLogId: "IazVwgm2oaWC-LwTp-NH_",
      dateTime: "2021-03-02T15:59:59.280Z",
      measurement: "Wb2_carrierLock",
      value: "3.1430863450908633"
    },
    {
      messageLogId: "A0LsQKqouHTmPu7pLLqTL",
      dateTime: "2021-03-02T16:00:07.286Z",
      measurement: "Wb2_carrierLock",
      value: "2.6231721387533367"
    },
    {
      messageLogId: "LeZdVFVF69Mh3-7r_dDuy",
      dateTime: "2021-03-02T16:00:24.971Z",
      measurement: "Wb2_carrierLock",
      value: "0.0443624683783832"
    },
    {
      messageLogId: "VS45nrTcWVZsZ4VCO5w_B",
      dateTime: "2021-03-02T16:00:37.242Z",
      measurement: "Wb2_carrierLock",
      value: "2.061088114499348"
    }
  ],
  Wb1_carrierLock: [
    {
      messageLogId: "Henk6ro5lvzb7XOM979kn",
      dateTime: "2021-03-02T15:50:46.869Z",
      measurement: "Wb1_carrierLock",
      value: "0.6689991279406766"
    },
    {
      messageLogId: "DqmveVhUWQ6-ty7XMGuFU",
      dateTime: "2021-03-02T15:51:19.244Z",
      measurement: "Wb1_carrierLock",
      value: "2.8042302248119073"
    },
    {
      messageLogId: "pQMeeHn2EfSIQ6WWmon97",
      dateTime: "2021-03-02T15:51:36.315Z",
      measurement: "Wb1_carrierLock",
      value: "3.6678228842023906"
    },
    {
      messageLogId: "XoET4Rv4cAN6-nUfas4E0",
      dateTime: "2021-03-02T15:51:47.648Z",
      measurement: "Wb1_carrierLock",
      value: "3.7138483096976875"
    },
    {
      messageLogId: "5wULi8p9m0oRd0yGg_TKm",
      dateTime: "2021-03-02T15:52:20.964Z",
      measurement: "Wb1_carrierLock",
      value: "2.594554060848087"
    },
    {
      messageLogId: "NDJvTXoYu7Hh3ML41jzrQ",
      dateTime: "2021-03-02T15:52:31.797Z",
      measurement: "Wb1_carrierLock",
      value: "3.9365969454832164"
    },
    {
      messageLogId: "NoWzdqAKoiYw4u0u8j2Iy",
      dateTime: "2021-03-02T15:52:48.781Z",
      measurement: "Wb1_carrierLock",
      value: "2.9723393701878154"
    },
    {
      messageLogId: "gX3as4WrMvIzlgE5xsnX1",
      dateTime: "2021-03-02T15:53:08.030Z",
      measurement: "Wb1_carrierLock",
      value: "3.1546340730979443"
    },
    {
      messageLogId: "8Y3sp2QBteURte1eJno6W",
      dateTime: "2021-03-02T15:53:39.838Z",
      measurement: "Wb1_carrierLock",
      value: "1.7632120805585592"
    },
    {
      messageLogId: "YAZPGLW7efhvV08IYTBfR",
      dateTime: "2021-03-02T15:53:56.278Z",
      measurement: "Wb1_carrierLock",
      value: "2.863462323514166"
    },
    {
      messageLogId: "Vpp_wBYEOQ_oT01M9ifDA",
      dateTime: "2021-03-02T15:54:13.823Z",
      measurement: "Wb1_carrierLock",
      value: "2.4007643544162445"
    },
    {
      messageLogId: "YFwK5jLk12OkPZDHufiu5",
      dateTime: "2021-03-02T15:54:45.356Z",
      measurement: "Wb1_carrierLock",
      value: "2.9610015748626837"
    },
    {
      messageLogId: "JjZ1Tj9arwqhC0oF8GHYU",
      dateTime: "2021-03-02T15:54:59.270Z",
      measurement: "Wb1_carrierLock",
      value: "3.558512465727219"
    },
    {
      messageLogId: "FzBcOSDbiMknsRWbrQItc",
      dateTime: "2021-03-02T15:55:20.626Z",
      measurement: "Wb1_carrierLock",
      value: "3.226137995428177"
    },
    {
      messageLogId: "-CKyvT9SbB-lrQBOKASpw",
      dateTime: "2021-03-02T15:55:45.990Z",
      measurement: "Wb1_carrierLock",
      value: "3.124321190851348"
    },
    {
      messageLogId: "0DxV4_i7wDVY-70IwvLki",
      dateTime: "2021-03-02T15:56:12.292Z",
      measurement: "Wb1_carrierLock",
      value: "2.1849097471523335"
    },
    {
      messageLogId: "WNo2BYGXVVDVLdUnh3kxD",
      dateTime: "2021-03-02T15:56:32.977Z",
      measurement: "Wb1_carrierLock",
      value: "1.7753096430942419"
    },
    {
      messageLogId: "_7M-rV6E97bzkocrBOKM3",
      dateTime: "2021-03-02T15:56:45.999Z",
      measurement: "Wb1_carrierLock",
      value: "0.06259859553824176"
    },
    {
      messageLogId: "PEPWuW4uGEP0scURvYQmO",
      dateTime: "2021-03-02T15:56:52.824Z",
      measurement: "Wb1_carrierLock",
      value: "1.1700694348187262"
    },
    {
      messageLogId: "g4lRVhFC-Ui7tdKjJy9fk",
      dateTime: "2021-03-02T15:57:19.789Z",
      measurement: "Wb1_carrierLock",
      value: "1.3052602706099292"
    },
    {
      messageLogId: "830R3AHDn2WEJ2fzPaDFC",
      dateTime: "2021-03-02T15:57:31.881Z",
      measurement: "Wb1_carrierLock",
      value: "1.3558079526496796"
    },
    {
      messageLogId: "hmVtLTLzHlnZI5tXoeF6x",
      dateTime: "2021-03-02T15:58:07.249Z",
      measurement: "Wb1_carrierLock",
      value: "2.2114545284073635"
    },
    {
      messageLogId: "wTjtis4kuoSD1PUGfl9ef",
      dateTime: "2021-03-02T15:58:18.172Z",
      measurement: "Wb1_carrierLock",
      value: "0.16055620544478222"
    },
    {
      messageLogId: "XhXXJ39tnUyHKWR-7zHQR",
      dateTime: "2021-03-02T15:58:52.445Z",
      measurement: "Wb1_carrierLock",
      value: "3.3892214909507596"
    },
    {
      messageLogId: "fhlH2qUKkTFdY3q-w94ow",
      dateTime: "2021-03-02T15:59:02.309Z",
      measurement: "Wb1_carrierLock",
      value: "0.7236918785904156"
    },
    {
      messageLogId: "MnDUUPe3DwS93PiH_cTz2",
      dateTime: "2021-03-02T15:59:20.345Z",
      measurement: "Wb1_carrierLock",
      value: "0.46636502691052817"
    },
    {
      messageLogId: "4txmwO9m4p67iWXuNSX_1",
      dateTime: "2021-03-02T15:59:32.930Z",
      measurement: "Wb1_carrierLock",
      value: "0.7305106537764345"
    },
    {
      messageLogId: "WxA-2brDFExrjWZfiWvhU",
      dateTime: "2021-03-02T16:00:07.532Z",
      measurement: "Wb1_carrierLock",
      value: "2.118719097016945"
    },
    {
      messageLogId: "WUQHOKfZy8ALIk4xSM-E9",
      dateTime: "2021-03-02T16:00:22.912Z",
      measurement: "Wb1_carrierLock",
      value: "2.7847443841914616"
    },
    {
      messageLogId: "f1biwGfgX1goeqD6_olk7",
      dateTime: "2021-03-02T16:00:36.287Z",
      measurement: "Wb1_carrierLock",
      value: "3.455882146371849"
    }
  ],
  Wb1_symbolLockI: [
    {
      messageLogId: "WRVR45OHKtq2QsroLVhzQ",
      dateTime: "2021-03-02T15:50:49.007Z",
      measurement: "Wb1_symbolLockI",
      value: "1.9128540341087579"
    },
    {
      messageLogId: "z3FZ4a3Wjmx6HtJgsXD7a",
      dateTime: "2021-03-02T15:51:03.910Z",
      measurement: "Wb1_symbolLockI",
      value: "4.878917914250827"
    },
    {
      messageLogId: "L2oiK9JkXk2VYdRBuny2q",
      dateTime: "2021-03-02T15:51:28.064Z",
      measurement: "Wb1_symbolLockI",
      value: "2.886532483771525"
    },
    {
      messageLogId: "si23J17Lm51bYaWpKa-RA",
      dateTime: "2021-03-02T15:52:02.738Z",
      measurement: "Wb1_symbolLockI",
      value: "1.2194020551827445"
    },
    {
      messageLogId: "-EWMMfLOGKUR1_RDJKQ9k",
      dateTime: "2021-03-02T15:52:41.296Z",
      measurement: "Wb1_symbolLockI",
      value: "3.805915973965013"
    },
    {
      messageLogId: "HhkuG5GfHK9-TF6cfVv_N",
      dateTime: "2021-03-02T15:53:03.105Z",
      measurement: "Wb1_symbolLockI",
      value: "4.765719700817483"
    },
    {
      messageLogId: "MkNj-jQNEzrYRNqknwrXo",
      dateTime: "2021-03-02T15:53:20.491Z",
      measurement: "Wb1_symbolLockI",
      value: "4.781153428211562"
    },
    {
      messageLogId: "5iYNMLDQdGHmPCnkzMvmC",
      dateTime: "2021-03-02T15:54:00.564Z",
      measurement: "Wb1_symbolLockI",
      value: "0.36260775895235964"
    },
    {
      messageLogId: "ZFcj19qwQnHeV78-X7FKC",
      dateTime: "2021-03-02T15:54:27.649Z",
      measurement: "Wb1_symbolLockI",
      value: "0.3357213695832395"
    },
    {
      messageLogId: "TgE-8JMIBjmln10Qm2E8l",
      dateTime: "2021-03-02T15:54:48.139Z",
      measurement: "Wb1_symbolLockI",
      value: "2.6418296092684592"
    },
    {
      messageLogId: "J9DST4CaaC6afY-MM2gRH",
      dateTime: "2021-03-02T15:55:06.834Z",
      measurement: "Wb1_symbolLockI",
      value: "0.23830147298215532"
    },
    {
      messageLogId: "TDcsSb313l4jRTxmfCnkY",
      dateTime: "2021-03-02T15:55:23.048Z",
      measurement: "Wb1_symbolLockI",
      value: "4.102665373782966"
    },
    {
      messageLogId: "7P4KkhSEACXw2g49T5j7h",
      dateTime: "2021-03-02T15:55:38.788Z",
      measurement: "Wb1_symbolLockI",
      value: "4.656002165956645"
    },
    {
      messageLogId: "X_M7MTgZEQNwUsrVOZjzb",
      dateTime: "2021-03-02T15:56:31.875Z",
      measurement: "Wb1_symbolLockI",
      value: "4.9133937950712845"
    },
    {
      messageLogId: "Qz2rp-Blwo-A1DaMBtsQQ",
      dateTime: "2021-03-02T15:56:51.045Z",
      measurement: "Wb1_symbolLockI",
      value: "1.5099687330603973"
    },
    {
      messageLogId: "s15CqVupiUHA4eiSC5rs1",
      dateTime: "2021-03-02T15:56:57.341Z",
      measurement: "Wb1_symbolLockI",
      value: "0.03064618689492926"
    },
    {
      messageLogId: "dEvAzmHlrmis7_orWdH1-",
      dateTime: "2021-03-02T15:57:17.504Z",
      measurement: "Wb1_symbolLockI",
      value: "1.1205661216728418"
    },
    {
      messageLogId: "Anyo9pZm8-HoVa3rAU9dL",
      dateTime: "2021-03-02T15:57:41.604Z",
      measurement: "Wb1_symbolLockI",
      value: "1.8167733589081707"
    },
    {
      messageLogId: "AjdGh9O3QN25CKJ1Se9gk",
      dateTime: "2021-03-02T15:57:54.432Z",
      measurement: "Wb1_symbolLockI",
      value: "3.4721346426192374"
    },
    {
      messageLogId: "HE-rfqARCEKm4Y_-f1WsP",
      dateTime: "2021-03-02T15:58:04.642Z",
      measurement: "Wb1_symbolLockI",
      value: "2.9502033836358317"
    },
    {
      messageLogId: "3e6DWsKmmn4iDLeTQKNAq",
      dateTime: "2021-03-02T15:58:17.750Z",
      measurement: "Wb1_symbolLockI",
      value: "3.746391693969107"
    },
    {
      messageLogId: "8Vc4413f7eT2mGbsxvg8u",
      dateTime: "2021-03-02T15:58:34.560Z",
      measurement: "Wb1_symbolLockI",
      value: "2.066063823818101"
    },
    {
      messageLogId: "EgUmreZEY30Hgy4Xk-8Dk",
      dateTime: "2021-03-02T15:59:02.518Z",
      measurement: "Wb1_symbolLockI",
      value: "0.7320528088452222"
    },
    {
      messageLogId: "uB6dlQXlEoPbu3MVYKOBP",
      dateTime: "2021-03-02T15:59:11.908Z",
      measurement: "Wb1_symbolLockI",
      value: "3.9478431264654548"
    },
    {
      messageLogId: "x4du3QTkRen6BswKSu689",
      dateTime: "2021-03-02T15:59:37.466Z",
      measurement: "Wb1_symbolLockI",
      value: "0.8392079663789342"
    },
    {
      messageLogId: "35q4MwIpwnRLRrcyb6pJ2",
      dateTime: "2021-03-02T15:59:48.487Z",
      measurement: "Wb1_symbolLockI",
      value: "1.1454657657375718"
    },
    {
      messageLogId: "bS2-JwubUOaf29q0UxYtZ",
      dateTime: "2021-03-02T15:59:57.992Z",
      measurement: "Wb1_symbolLockI",
      value: "0.20918946454737075"
    },
    {
      messageLogId: "5404RXFZ3Yut4xeloj_Nf",
      dateTime: "2021-03-02T16:00:22.760Z",
      measurement: "Wb1_symbolLockI",
      value: "2.07874964212996"
    },
    {
      messageLogId: "KAeaz3e9qtxyNl0uZaJYw",
      dateTime: "2021-03-02T16:00:35.153Z",
      measurement: "Wb1_symbolLockI",
      value: "4.377594894924869"
    }
  ],
  commanded_elevation_deg: [
    {
      messageLogId: "3XbF5OsAZA1oJmq2LRHi5",
      dateTime: "2021-03-02T15:50:48.549Z",
      measurement: "commanded_elevation_deg",
      value: "0.3561563203196366"
    },
    {
      messageLogId: "A8iqIdnpHQTuCWKMy8xJk",
      dateTime: "2021-03-02T15:51:06.239Z",
      measurement: "commanded_elevation_deg",
      value: "3.0597867648812"
    },
    {
      messageLogId: "OUWQ5nAzDooH0v2cYwt5f",
      dateTime: "2021-03-02T15:51:27.244Z",
      measurement: "commanded_elevation_deg",
      value: "4.757153562542026"
    },
    {
      messageLogId: "l6Rn8gGqbFHHfwczghLXH",
      dateTime: "2021-03-02T15:51:31.259Z",
      measurement: "commanded_elevation_deg",
      value: "4.770303362454996"
    },
    {
      messageLogId: "tl64UU_vQOpNDLmEZnGSB",
      dateTime: "2021-03-02T15:51:52.787Z",
      measurement: "commanded_elevation_deg",
      value: "0.9942553423583766"
    },
    {
      messageLogId: "bmEOj1bKwkM8oUsv9di1F",
      dateTime: "2021-03-02T15:52:15.994Z",
      measurement: "commanded_elevation_deg",
      value: "2.6722794492734048"
    },
    {
      messageLogId: "VaLj8EEy5n_AAcQwPYG12",
      dateTime: "2021-03-02T15:52:55.274Z",
      measurement: "commanded_elevation_deg",
      value: "1.3337546994848504"
    },
    {
      messageLogId: "t037C1G7_5OEdcpQuOkeS",
      dateTime: "2021-03-02T15:53:14.726Z",
      measurement: "commanded_elevation_deg",
      value: "0.22681166561137944"
    },
    {
      messageLogId: "n9FV7VH-vyGmVvTdLcM0n",
      dateTime: "2021-03-02T15:53:37.946Z",
      measurement: "commanded_elevation_deg",
      value: "0.27156864654623525"
    },
    {
      messageLogId: "9R77bX7EpU--fTUXHFa3j",
      dateTime: "2021-03-02T15:53:44.163Z",
      measurement: "commanded_elevation_deg",
      value: "1.6184088965981036"
    },
    {
      messageLogId: "5nZU3wDhUQgPcAHAxfaZa",
      dateTime: "2021-03-02T15:54:11.812Z",
      measurement: "commanded_elevation_deg",
      value: "4.7911137298524205"
    },
    {
      messageLogId: "8WZj96YhM4IkFnh7zkESu",
      dateTime: "2021-03-02T15:54:43.539Z",
      measurement: "commanded_elevation_deg",
      value: "2.6271146856881056"
    },
    {
      messageLogId: "yVMxKdBiHLwivgqXPzpeL",
      dateTime: "2021-03-02T15:55:07.685Z",
      measurement: "commanded_elevation_deg",
      value: "3.8917096704374057"
    },
    {
      messageLogId: "OOV3hY2INDEZ9egDTz6xx",
      dateTime: "2021-03-02T15:55:17.108Z",
      measurement: "commanded_elevation_deg",
      value: "0.6970255054023183"
    },
    {
      messageLogId: "wxvwruX6gjofvWSJklBie",
      dateTime: "2021-03-02T15:55:30.334Z",
      measurement: "commanded_elevation_deg",
      value: "1.0898392613704315"
    },
    {
      messageLogId: "O9YR4SUnQkUNFg_iHVZBc",
      dateTime: "2021-03-02T15:55:54.841Z",
      measurement: "commanded_elevation_deg",
      value: "3.2376792690967315"
    },
    {
      messageLogId: "ZR2estRCAouVE9s-2mjMF",
      dateTime: "2021-03-02T15:56:09.237Z",
      measurement: "commanded_elevation_deg",
      value: "2.2598863763584855"
    },
    {
      messageLogId: "bczF7VDZeoThoYE4E1exP",
      dateTime: "2021-03-02T15:56:52.761Z",
      measurement: "commanded_elevation_deg",
      value: "2.454567080863473"
    },
    {
      messageLogId: "n8oiBWp1ZpkxJZgHYHCFi",
      dateTime: "2021-03-02T15:57:04.732Z",
      measurement: "commanded_elevation_deg",
      value: "3.046743920200789"
    },
    {
      messageLogId: "iI8z8pmVxVAvaANW_Vftz",
      dateTime: "2021-03-02T15:57:18.036Z",
      measurement: "commanded_elevation_deg",
      value: "0.9094535344662308"
    },
    {
      messageLogId: "ggmLS9BUd0nl3kbpqIYHt",
      dateTime: "2021-03-02T15:57:30.698Z",
      measurement: "commanded_elevation_deg",
      value: "4.849132996537479"
    },
    {
      messageLogId: "u0jxKHyCakASou7-JjNde",
      dateTime: "2021-03-02T15:57:45.728Z",
      measurement: "commanded_elevation_deg",
      value: "0.9303067024287898"
    },
    {
      messageLogId: "AKF_vLohCqqeBvCN_Hz_c",
      dateTime: "2021-03-02T15:57:59.364Z",
      measurement: "commanded_elevation_deg",
      value: "0.644191555253672"
    },
    {
      messageLogId: "PILHQ98-aS1qRFP1_FFqS",
      dateTime: "2021-03-02T15:58:27.540Z",
      measurement: "commanded_elevation_deg",
      value: "0.6070020767801437"
    },
    {
      messageLogId: "noWIZnkDPGQCMQcZtp-gb",
      dateTime: "2021-03-02T15:58:52.030Z",
      measurement: "commanded_elevation_deg",
      value: "4.469394477267253"
    },
    {
      messageLogId: "Yemp9BbAAhgElQk09FN45",
      dateTime: "2021-03-02T15:59:07.518Z",
      measurement: "commanded_elevation_deg",
      value: "2.4012215224999425"
    },
    {
      messageLogId: "BLO8hDQWlsnQ_K94mA7Hg",
      dateTime: "2021-03-02T15:59:37.313Z",
      measurement: "commanded_elevation_deg",
      value: "1.4869115990588044"
    },
    {
      messageLogId: "n1bGuy1H6YGLSdm5k6M_J",
      dateTime: "2021-03-02T15:59:52.058Z",
      measurement: "commanded_elevation_deg",
      value: "4.651031085351429"
    },
    {
      messageLogId: "qmmXrmwqXM4M7Sy_XEJ06",
      dateTime: "2021-03-02T16:00:05.064Z",
      measurement: "commanded_elevation_deg",
      value: "0.0920833232521795"
    },
    {
      messageLogId: "mx52_9LcH-aRu8aYqi3jm",
      dateTime: "2021-03-02T16:00:18.411Z",
      measurement: "commanded_elevation_deg",
      value: "3.8677863701588815"
    },
    {
      messageLogId: "4DQA92vLOO8_LxszBnvOX",
      dateTime: "2021-03-02T16:00:35.270Z",
      measurement: "commanded_elevation_deg",
      value: "1.0099864083593024"
    },
    {
      messageLogId: "2U8PW_Dpf-iVRm--_YkcS",
      dateTime: "2021-03-02T16:00:41.586Z",
      measurement: "commanded_elevation_deg",
      value: "4.101206613662563"
    }
  ],
  Wb2_carrierOffsetFrequency: [
    {
      messageLogId: "ALGWwEwHLDWjzG8EybgVs",
      dateTime: "2021-03-02T15:50:47.496Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "0.7559159944920396"
    },
    {
      messageLogId: "kafsiUQaxPc5Ru58KBqIp",
      dateTime: "2021-03-02T15:50:54.341Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "3.052136886799637"
    },
    {
      messageLogId: "h6-OzAoxvgpszpg5DyhZq",
      dateTime: "2021-03-02T15:51:33.937Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "0.9515107455717359"
    },
    {
      messageLogId: "yHYTu9ThFPX-PvYOBQwgP",
      dateTime: "2021-03-02T15:51:43.357Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "0.8673755848586978"
    },
    {
      messageLogId: "ib3RTZGofwHc4JNk3-3Im",
      dateTime: "2021-03-02T15:52:05.600Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "1.4668260426142825"
    },
    {
      messageLogId: "tpqSyl7Y6v6nBA0xH_Z95",
      dateTime: "2021-03-02T15:52:47.804Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "2.3630391380216746"
    },
    {
      messageLogId: "znvC-m7vlVFNWxG2B4qYi",
      dateTime: "2021-03-02T15:53:08.240Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "3.2216129203880355"
    },
    {
      messageLogId: "16Uy66JGhdkCjqpL8Zwhj",
      dateTime: "2021-03-02T15:53:18.953Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "0.3768403705662787"
    },
    {
      messageLogId: "0Dxvd1PKZ1rfPXIjZ8zha",
      dateTime: "2021-03-02T15:53:39.369Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "2.608308324637369"
    },
    {
      messageLogId: "0YAHKRNd49KMWUfyrlAm_",
      dateTime: "2021-03-02T15:53:58.900Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "3.686558538294831"
    },
    {
      messageLogId: "pn5xrfaTTUJ_smVkSlO-t",
      dateTime: "2021-03-02T15:54:10.199Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "4.2706301666594495"
    },
    {
      messageLogId: "Jtq57J1dSEHFZ6APkuRL4",
      dateTime: "2021-03-02T15:54:27.704Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "3.906545440749088"
    },
    {
      messageLogId: "e1GpV9Z6q7jkMGLFQRIxZ",
      dateTime: "2021-03-02T15:54:45.397Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "0.6118290625310335"
    },
    {
      messageLogId: "U53MKb2W9xio82nUMJsp7",
      dateTime: "2021-03-02T15:54:55.543Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "2.1378596482564696"
    },
    {
      messageLogId: "b8WYl-agp6cQNwaMhJ6uW",
      dateTime: "2021-03-02T15:55:29.089Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "2.911228820710588"
    },
    {
      messageLogId: "NF6OUJGxuOTWMpXoyF7XZ",
      dateTime: "2021-03-02T15:55:40.343Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "2.626421299552701"
    },
    {
      messageLogId: "Qmzy7P3zaSvJfJLBLqkpF",
      dateTime: "2021-03-02T15:55:42.612Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "3.242691303461374"
    },
    {
      messageLogId: "-mMe8i4Wf5TA_lHA9Y78I",
      dateTime: "2021-03-02T15:56:11.696Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "4.088823863455494"
    },
    {
      messageLogId: "3RzjVc3-VdwG8dvOx9jEt",
      dateTime: "2021-03-02T15:56:28.041Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "2.6285508095240524"
    },
    {
      messageLogId: "HDLs4tIHcYLyQLjnW1uUR",
      dateTime: "2021-03-02T15:56:40.251Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "4.6086603903693755"
    },
    {
      messageLogId: "FJBIoi_YfME0D_hsoXdxo",
      dateTime: "2021-03-02T15:56:54.045Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "4.142406201105105"
    },
    {
      messageLogId: "gRIuXRQOHqiuuGX7ChBJM",
      dateTime: "2021-03-02T15:57:17.836Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "4.207159428759119"
    },
    {
      messageLogId: "Lc8fS82Boe-boYfiC2P4w",
      dateTime: "2021-03-02T15:57:44.496Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "2.1062114057883004"
    },
    {
      messageLogId: "1-k7HTcstMkCjxZ1523C6",
      dateTime: "2021-03-02T15:57:50.441Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "2.784916562690562"
    },
    {
      messageLogId: "P1_jWLO8-EiRDlN2DebE_",
      dateTime: "2021-03-02T15:58:22.239Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "1.685090461791599"
    },
    {
      messageLogId: "lW9WU3vfY1rMAmpMq0led",
      dateTime: "2021-03-02T15:58:45.797Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "3.0801876106541077"
    },
    {
      messageLogId: "ga9pDCI0HOsZLFGiy-SAo",
      dateTime: "2021-03-02T15:59:14.582Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "3.755189320967822"
    },
    {
      messageLogId: "eTrp0dKauTFkkdbV--uj0",
      dateTime: "2021-03-02T15:59:34.124Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "2.284666698612802"
    },
    {
      messageLogId: "VJbq3iQN2IGBM2v4DMrlK",
      dateTime: "2021-03-02T15:59:57.603Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "4.4434403689217845"
    },
    {
      messageLogId: "e8N2NajWEhz5vsmCNahlN",
      dateTime: "2021-03-02T16:00:18.983Z",
      measurement: "Wb2_carrierOffsetFrequency",
      value: "2.8664231648465064"
    }
  ]
};

function formatYAxis(axis, title) {
  axis.title.text = title;
  axis.title.fill = am4core.color("#ffffff");
  axis.title.fontWeight = "400";
  axis.title.fontSize = 15;
  axis.title.fontFamily = "Open Sans";
  axis.renderer.labels.template.fill = am4core.color("#D7D5D5");
  axis.renderer.labels.template.fontWeight = "400";
  axis.renderer.labels.template.fontSize = 15;
  axis.renderer.labels.template.fontFamily = "Open Sans";
  axis.renderer.grid.template.stroke = am4core.color("#979797");
}

function formatSeries(series, measurement) {
  series.dataFields.dateX = "dateTime";
  series.dataFields.valueY = "value";
  series.smoothing = "monotoneX";
  series.tooltipText = "{name} [/] {dateX}: [bold]{valueY}[/]";
  const tooltip = series.tooltip;
  if (tooltip) {
    tooltip.dateFormatter.dateFormat = "HH:mm:ss";
  }
  series.name = measurement;
  series.hidden = true;

  const bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.radius = 2;
  bullet.states.create("hover").properties.scale = 2.5;
}

const PlotLogDataChart = ({
  id = "plot-log-data-chart",
  data,
  activeMeasurements,
  singleYAxis
}) => {
  const chartRef = useRef(null);
  const seriesRef = useRef({});
  const cursorRef = useRef(null);
  const singleAxisRef = useRef(null);

  React.useLayoutEffect(() => {
    const chart = am4core.create(id, am4charts.XYChart);
    chart.dateFormatter.utc = true;
    chart.dateFormatter.inputDateFormat = "i";

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 75;
    dateAxis.dataFields.date = "dateTime";
    dateAxis.title.text = "Time (sec)";
    dateAxis.title.align = "left";
    dateAxis.title.fill = am4core.color("#ffffff");
    dateAxis.title.fontWeight = "700";
    dateAxis.title.fontSize = 15;
    dateAxis.title.fontFamily = "Open Sans";
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.labels.template.fontWeight = "400";
    dateAxis.renderer.labels.template.fontSize = 15;
    dateAxis.renderer.labels.template.fontFamily = "Open Sans";
    dateAxis.renderer.labels.template.fill = am4core.color("#ABA8A8");
    dateAxis.snapTooltip = false;
    dateAxis.baseInterval = {
      timeUnit: "second",
      count: 1
    };

    dateAxis.dateFormats.setKey("minute", "HH:mm:ss");

    const legend = new am4charts.Legend();
    legend.labels.template.fill = am4core.color("#ffffff");
    legend.labels.template.fontSize = 12;
    legend.itemContainers.template.clickable = false;
    legend.itemContainers.template.focusable = false;
    chart.legend = legend;

    const cursor = new am4charts.XYCursor();
    cursor.xAxis = dateAxis;
    cursor.lineX.stroke = am4core.color("#ABA8A8");
    cursor.lineY.stroke = am4core.color("#ABA8A8");
    chart.cursor = cursor;
    cursorRef.current = cursor;

    // Chart setup complete, assign to the ref
    chartRef.current = chart;
    return () => chart.dispose();
  }, [id]);

  React.useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const allData = [];
      Object.keys(data).forEach((measurement) => {
        allData.concat(data[measurement]);
      });
      chart.data = allData;

      chart.yAxes.clear();
      chart.series.clear();

      const singleValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      formatYAxis(singleValueAxis, "Values");
      singleValueAxis.renderer.grid.template.disabled = false;
      singleValueAxis.renderer.grid.template.stroke = am4core.color("#979797");
      // by default this axis is hidden, not attached to any series
      singleValueAxis.disabled = true;
      singleAxisRef.current = singleValueAxis;

      const newSeriesRef = {};
      Object.keys(data).forEach((measurement) => {
        const axis = chart.yAxes.push(new am4charts.ValueAxis());
        formatYAxis(axis, measurement);

        const series = chart.series.push(new am4charts.LineSeries());
        formatSeries(series, measurement);

        series.yAxis = axis;
        series.data = data[measurement];

        newSeriesRef[measurement] = {
          axis,
          series
        };
      });
      seriesRef.current = newSeriesRef;
    }
  }, [data, seriesRef, singleAxisRef]);

  React.useEffect(() => {
    if (seriesRef.current && chartRef.current) {
      const seriesMap = seriesRef.current;

      // We need to presort the list of all measurement keys before iterating, to ensure that all *inactive* series
      // Are processed first. This is to ensure that any measurements which are being turned off free up their current color
      // before we try to turn on any new measurements. If we did that in the wrong order, a newly active measurement
      // would try to retrieve the next available color while all 5 were still in use, so it would end up receiving an
      // undefined stroke property (which causes further errors when that value is eventually "freed" when turned off)
      const activeLast = Object.keys(seriesMap).sort((a, _b) =>
        activeMeasurements.includes(a) ? 1 : 0
      );

      let firstAxisForGrid = undefined;
      const seriesArray = [];
      activeLast.forEach((measurement) => {
        const { series, axis } = seriesMap[measurement];
        const shouldEnable = activeMeasurements.includes(measurement);

        // At the start of the process, we reset each series, s
        series.yAxis = axis;
        axis.renderer.grid.template.disabled = true;

        // If this series was turned off and is now being enabled, we need to assign an unused color to it
        if ((!series.visible || series.hidden) && shouldEnable) {
          // series.stroke = getNextAvailableColor();
          series.fill = series.stroke;
          axis.title.fill = series.stroke;
        }
        // If this series is currently enabled, and we're about to turn it off, free up the color it was using
        if (series.visible && !shouldEnable) {
          // freeColor(series.stroke as am4core.Color);
        }

        if (shouldEnable) {
          if (firstAxisForGrid) {
            axis.syncWithAxis = firstAxisForGrid;
          } else {
            axis.renderer.grid.template.disabled = false;
            firstAxisForGrid = axis;
          }
        }

        series.hiddenInLegend = !singleYAxis || !shouldEnable;
        shouldEnable ? series.show() : series.hide();
        if (shouldEnable) {
          seriesArray.push(series);
        }
        axis.disabled = !shouldEnable;
      });

      if (singleAxisRef.current) {
        if (singleYAxis) {
          singleAxisRef.current.invalidateData();
          Object.keys(seriesMap).forEach((measurement) => {
            const { series, axis } = seriesMap[measurement];
            axis.disabled = true;
            if (singleAxisRef.current) {
              series.yAxis = singleAxisRef.current;
            }
          });
        }
        singleAxisRef.current.disabled = !singleYAxis;
      }

      if (cursorRef.current) {
        cursorRef.current.snapToSeries = seriesArray;
      }
    }
  }, [seriesRef, cursorRef, activeMeasurements, singleAxisRef, singleYAxis]);

  return (
    <div
      id={id}
      data-testid={id}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default function AxesChart() {
  return (
    <div style={{ height: "600px", width: "1000px", background: "black" }}>
      <PlotLogDataChart
        data={data}
        activeMeasurements={[
          "Wb2_symbolLockI",
          "measured_azimuth_deg",
          "commanded_azimuth_deg"
        ]}
        singleYAxis={false}
      />
    </div>
  );
}









// import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// // import logo from './logo.svg';
// // import "./App.css";
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// import moment from "moment";
// import * as Realm from "realm-web";

// <!-- Chart code -->
// <script>
// am5.ready(function() {

// // Create root element
// // https://www.amcharts.com/docs/v5/getting-started/#Root_element
// var root = am5.Root.new("chartdiv");

// // Set themes
// // https://www.amcharts.com/docs/v5/concepts/themes/
// root.setThemes([
//   am5themes_Animated.new(root)
// ]);

// // Create chart
// // https://www.amcharts.com/docs/v5/charts/xy-chart/
// var chart = root.container.children.push(
//   am5xy.XYChart.new(root, {
//     focusable: true,
//     panX: true,
//     panY: true,
//     wheelX: "panX",
//     wheelY: "zoomX",
//   pinchZoomX:true
//   })
// );

// var easing = am5.ease.linear;
// chart.get("colors").set("step", 3);

// // Create axes
// // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
// var xAxis = chart.xAxes.push(
//   am5xy.DateAxis.new(root, {
//     maxDeviation: 0.1,
//     groupData: false,
//     baseInterval: {
//       timeUnit: "day",
//       count: 1
//     },
//     renderer: am5xy.AxisRendererX.new(root, {}),
//     tooltip: am5.Tooltip.new(root, {})
//   })
// );

// function createAxisAndSeries(startValue, opposite) {
//   var yRenderer = am5xy.AxisRendererY.new(root, {
//     opposite: opposite
//   });
//   var yAxis = chart.yAxes.push(
//     am5xy.ValueAxis.new(root, {
//       maxDeviation: 1,
//       renderer: yRenderer
//     })
//   );

//   if (chart.yAxes.indexOf(yAxis) > 0) {
//     yAxis.set("syncWithAxis", chart.yAxes.getIndex(0));
//   }

//   // Add series
//   // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
//   var series = chart.series.push(
//     am5xy.LineSeries.new(root, {
//       xAxis: xAxis,
//       yAxis: yAxis,
//       valueYField: "value",
//       valueXField: "date",
//       tooltip: am5.Tooltip.new(root, {
//         pointerOrientation: "horizontal",
//         labelText: "{valueY}"
//       })
//     })
//   );

//   //series.fills.template.setAll({ fillOpacity: 0.2, visible: true });
//   series.strokes.template.setAll({ strokeWidth: 1 });

//   yRenderer.grid.template.set("strokeOpacity", 0.05);
//   yRenderer.labels.template.set("fill", series.get("fill"));
//   yRenderer.setAll({
//     stroke: series.get("fill"),
//     strokeOpacity: 1,
//     opacity: 1
//   });

//   // Set up data processor to parse string dates
//   // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
//   series.data.processor = am5.DataProcessor.new(root, {
//     dateFormat: "yyyy-MM-dd",
//     dateFields: ["date"]
//   });

//   series.data.setAll(generateChartData(startValue));
// }

// // Add cursor
// // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
// var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
//   xAxis: xAxis,
//   behavior: "none"
// }));
// cursor.lineY.set("visible", false);

// // add scrollbar
// chart.set("scrollbarX", am5.Scrollbar.new(root, {
//   orientation: "horizontal"
// }));

// createAxisAndSeries(100, false);
// createAxisAndSeries(1000, true);
// createAxisAndSeries(8000, true);

// // Make stuff animate on load
// // https://www.amcharts.com/docs/v5/concepts/animations/
// chart.appear(1000, 100);

// // Generates random data, quite different range
// function generateChartData(value) {
//   var data = [];
//   var firstDate = new Date();
//   firstDate.setDate(firstDate.getDate() - 100);
//   firstDate.setHours(0, 0, 0, 0);

//   for (var i = 0; i < 100; i++) {
//     var newDate = new Date(firstDate);
//     newDate.setDate(newDate.getDate() + i);

//     value += Math.round(
//       ((Math.random() < 0.5 ? 1 : -1) * Math.random() * value) / 20
//     );

//     data.push({
//       date: newDate,
//       value: value
//     });
//   }
//   return data;
// }

// }); // end am5.ready()
// </script>

// <!-- HTML -->
// <div id="chartdiv"></div>