import React from "react";

const IndexPage: React.FC = () => {
  return (
    <div className="music-app">
      <div className="cover">
        <div className="artist"></div>
      </div>
      <br />
      <div className="content">
        <div className="content-header">
          <span className="content-title">
            420420 <code>#6969</code>
          </span>
          <button className="btn-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="23"
              viewBox="0 0 22 23"
            >
              <g fill="#7289DA">
                <path d="M4.3231,4.4332 C4.3231,4.4332 4.5811,4.0472 4.6881,3.8762 C4.7951,3.7052 4.4111,3.3012 4.2621,3.1732 C4.1131,3.0452 3.8781,3.1092 3.8781,3.1092 C2.0031,3.9402 1.0651,5.6452 0.9371,5.9862 C0.8091,6.3272 1.2631,6.6992 1.5981,6.8812 C1.7521,6.9652 1.9971,6.7792 2.1481,6.6412 L2.1991,6.5892 L2.2781,6.5092 L2.2791,6.5082 L7.3801,11.5892 L8.0771,10.8922 L9.3581,9.6112 L4.3161,4.4402 L4.3231,4.4332 Z" />
                <path d="M16.3738,9.7931 L16.6428,9.5371 L19.0598,11.9311 C19.0768,11.9461 19.0948,11.9521 19.1108,11.9521 C19.1568,11.9521 19.1948,11.9101 19.1948,11.9101 C19.1948,11.9101 21.8708,9.2551 21.8798,9.2461 C21.9588,9.1681 21.8798,9.1251 21.8798,9.1251 L19.8158,7.0471 L19.8128,7.0501 L19.5298,6.7731 L19.6878,6.6211 L20.0258,6.6601 L19.9618,6.2121 L20.0468,6.1261 L19.9198,5.4801 C19.4788,4.8551 18.2708,3.8541 18.2708,3.8541 L17.6388,3.7401 L17.5748,3.8251 L17.0988,3.7541 L17.1448,4.1601 L17.1748,4.1901 L17.0338,4.3321 L16.2538,3.5691 C16.2538,3.5691 11.7278,1.1111 11.4868,0.9971 C11.3508,0.9341 11.2508,0.8921 11.1548,0.8921 C11.0808,0.8921 11.0088,0.9171 10.9258,0.9761 C10.7338,1.1111 10.8468,1.3831 10.8468,1.3831 L13.6608,6.5831 L14.2238,7.1411 L14.0478,7.3171 L14.0478,7.3171 L13.9828,7.3821 L13.5328,7.3201 L13.6018,7.7661 L13.4718,7.8961 L13.4488,7.8731 C13.4278,7.8521 13.3988,7.8411 13.3708,7.8411 C13.3428,7.8411 13.3148,7.8521 13.2928,7.8731 C13.2498,7.9161 13.2498,7.9861 13.2928,8.0291 L13.3158,8.0521 L13.2538,8.1151 L13.2378,8.0981 C13.2158,8.0771 13.1878,8.0661 13.1598,8.0661 C13.1308,8.0661 13.1028,8.0771 13.0818,8.0981 C13.0388,8.1411 13.0388,8.2111 13.0818,8.2541 L13.0988,8.2711 L11.9148,9.4611 L11.8878,9.4341 C11.8658,9.4131 11.8378,9.4021 11.8098,9.4021 C11.7818,9.4021 11.7538,9.4131 11.7318,9.4341 C11.6888,9.4771 11.6888,9.5471 11.7318,9.5901 L11.7598,9.6171 L11.6968,9.6801 L11.6758,9.6601 C11.6548,9.6381 11.6258,9.6271 11.5988,9.6271 C11.5698,9.6271 11.5418,9.6381 11.5198,9.6601 C11.4778,9.7031 11.4778,9.7721 11.5198,9.8151 L11.5408,9.8361 L11.3868,9.9921 L11.3658,10.1901 L11.4468,10.2731 L11.4448,10.2741 L11.3468,10.3741 L4.9578,16.7621 L4.8748,16.6931 L4.6098,16.7311 L4.4598,16.8831 L4.4498,16.8731 C4.4278,16.8511 4.3998,16.8401 4.3718,16.8401 C4.3438,16.8401 4.3148,16.8511 4.2938,16.8731 C4.2508,16.9161 4.2508,16.9851 4.2938,17.0281 L4.3058,17.0401 L4.2438,17.1041 L4.2378,17.0981 C4.2168,17.0761 4.1878,17.0651 4.1598,17.0651 C4.1318,17.0651 4.1038,17.0761 4.0818,17.0981 C4.0398,17.1411 4.0398,17.2101 4.0818,17.2531 L4.0888,17.2611 L2.9198,18.4501 L2.8958,18.4261 C2.8738,18.4041 2.8468,18.3941 2.8178,18.3941 C2.7898,18.3941 2.7618,18.4041 2.7398,18.4261 C2.6968,18.4691 2.6968,18.5391 2.7398,18.5821 L2.7658,18.6071 L2.7038,18.6701 L2.6848,18.6511 C2.6628,18.6301 2.6348,18.6191 2.6058,18.6191 C2.5788,18.6191 2.5498,18.6301 2.5288,18.6511 C2.4858,18.6941 2.4858,18.7641 2.5288,18.8071 L2.5488,18.8281 L2.4618,18.9171 L2.0088,18.8361 L2.0428,19.3421 L1.8998,19.4881 L2.0238,20.1701 C2.0238,20.1701 2.2138,20.7641 2.6048,21.1581 C2.9838,21.5401 3.5618,21.7231 3.5868,21.7421 L4.2398,21.8561 L4.4008,21.6981 L4.8508,21.7711 L4.7768,21.3261 L4.9138,21.1921 L4.9768,21.2551 C4.9978,21.2761 5.0258,21.2871 5.0538,21.2871 C5.0818,21.2871 5.1108,21.2761 5.1318,21.2551 C5.1748,21.2111 5.1748,21.1421 5.1318,21.0991 L5.0698,21.0371 L5.1338,20.9751 L5.1878,21.0291 C5.2088,21.0511 5.2378,21.0621 5.2658,21.0621 C5.2938,21.0621 5.3218,21.0511 5.3438,21.0291 C5.3868,20.9861 5.3868,20.9171 5.3438,20.8741 L5.2908,20.8201 L6.4778,19.6491 L6.5298,19.7011 C6.5508,19.7231 6.5798,19.7331 6.6078,19.7331 C6.6358,19.7331 6.6638,19.7231 6.6858,19.7011 C6.7278,19.6581 6.7278,19.5881 6.6858,19.5451 L6.6348,19.4951 L6.6978,19.4321 L6.7418,19.4761 C6.7628,19.4971 6.7908,19.5081 6.8188,19.5081 C6.8478,19.5081 6.8758,19.4971 6.8968,19.4761 C6.9398,19.4331 6.9398,19.3631 6.8968,19.3201 L6.8538,19.2771 L6.9868,19.1471 L7.0348,18.8621 L6.9638,18.7911 L6.9648,18.7901 L7.0938,18.6621 L13.4398,12.3141 L13.4368,12.3081 L13.5608,12.4361 L13.7598,12.4141 L13.9388,12.2341 L13.9678,12.2631 C13.9898,12.2841 14.0178,12.2951 14.0458,12.2951 C14.0738,12.2951 14.1028,12.2841 14.1238,12.2631 C14.1668,12.2201 14.1668,12.1501 14.1238,12.1071 L14.0948,12.0781 L14.1578,12.0161 L14.1798,12.0381 C14.2008,12.0591 14.2288,12.0701 14.2578,12.0701 C14.2858,12.0701 14.3138,12.0591 14.3348,12.0381 C14.3778,11.9951 14.3778,11.9251 14.3348,11.8821 L14.3128,11.8591 L15.4988,10.6711 L15.5298,10.7021 C15.5508,10.7231 15.5788,10.7341 15.6068,10.7341 C15.6358,10.7341 15.6638,10.7231 15.6848,10.7021 C15.7278,10.6591 15.7278,10.5891 15.6848,10.5461 L15.6538,10.5151 L15.7168,10.4521 L15.7408,10.4771 C15.7628,10.4981 15.7908,10.5091 15.8188,10.5091 C15.8468,10.5091 15.8748,10.4981 15.8968,10.4771 C15.9398,10.4331 15.9398,10.3641 15.8968,10.3211 L15.8728,10.2961 L16.0048,10.1641 L16.4458,10.2331 L16.3738,9.7931 Z" />
                <polygon points="17.255 16.968 14.442 14.836 13.941 14.32 12 16.261 12.488 16.727 14.321 19.476 16.793 22.183 19.642 19.525" />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="23"
              viewBox="0 0 32 32"
            >
              <title>hypesquad-event-attendee</title>
              <path
                d="M31.43,8.79,18.77,17.1a1.47,1.47,0,0,0-.51.57l-1.93,3.87a.36.36,0,0,1-.66,0l-1.93-3.87a1.47,1.47,0,0,0-.51-.57L.57,8.79A.37.37,0,0,0,0,9.27L5.29,19.56A.38.38,0,0,1,5,20.1H1.82a.37.37,0,0,0-.22.67L15.78,30.93a.39.39,0,0,0,.44,0L30.4,20.77a.37.37,0,0,0-.22-.67H27a.38.38,0,0,1-.33-.54L32,9.27A.37.37,0,0,0,31.43,8.79Z"
                fill="#fbb848"
              />
              <path
                d="M16.28,1.17l1.3,2.65a.33.33,0,0,0,.23.17l2.93.42a.31.31,0,0,1,.17.53L18.79,7a.33.33,0,0,0-.09.27l.5,2.91a.3.3,0,0,1-.44.32L16.14,9.13a.28.28,0,0,0-.28,0L13.24,10.5a.3.3,0,0,1-.44-.32l.5-2.91A.33.33,0,0,0,13.21,7L11.09,4.94a.31.31,0,0,1,.17-.53L14.19,4a.33.33,0,0,0,.23-.17l1.3-2.65A.31.31,0,0,1,16.28,1.17Z"
                fill="#fbb848"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="23"
              viewBox="0 0 32 32"
            >
              <title>HypeSquad Badge: House of Balance</title>
              <path
                d="M31.63,15.73,16.27.37a.37.37,0,0,0-.52,0h0L.37,15.73a.37.37,0,0,0,0,.52h0L15.73,31.63a.37.37,0,0,0,.52,0h0L31.63,16.27a.37.37,0,0,0,0-.52ZM25,12.29l-3,5.79a.22.22,0,0,0,.12.28h1.89a.2.2,0,0,1,.18.23.17.17,0,0,1-.07.14l-7.92,5.72a.26.26,0,0,1-.24,0L8,18.74a.22.22,0,0,1,0-.3H8a.24.24,0,0,1,.13-.07H9.9a.22.22,0,0,0,.22-.22h0v-.07l-3-5.79A.22.22,0,0,1,7.22,12a.17.17,0,0,1,.14,0l7.12,4.67a.65.65,0,0,1,.29.32l1.09,2.18a.19.19,0,0,0,.26.09.22.22,0,0,0,.1-.09L17.27,17a1,1,0,0,1,.29-.32L24.68,12a.21.21,0,0,1,.28.1h0A.2.2,0,0,1,25,12.29Z"
                fill="#45ddc0"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="23"
              viewBox="0 0 42 32"
            >
              <defs>
                <rect id="a" width="42" height="32" />
                <polygon
                  id="c"
                  points="0 .095 0 3.02 3.798 3.02 3.798 .095 0 .095"
                />
                <polygon
                  id="e"
                  points=".136 29.681 37.097 29.681 37.097 .307 .136 .307"
                />
              </defs>
              <g fill="none" fillRule="evenodd">
                <g transform="translate(0 1)" mask="url(#b)">
                  <g transform="translate(0 7.671)">
                    <path
                      fill="#4F5D7F"
                      d="M3.79846047,1.55738298 C3.79846047,0.759510638 3.12027442,0.0947234043 2.30632093,0.0947234043 L1.49236744,0.0947234043 C0.678413953,0.0947234043 -9.76744186e-05,0.759510638 -9.76744186e-05,1.55738298 C-9.76744186e-05,2.35525532 0.678413953,3.02004255 1.49236744,3.02004255 L2.30632093,3.02004255 C3.12027442,3.02004255 3.79846047,2.35525532 3.79846047,1.55738298"
                      mask="url(#d)"
                    />
                  </g>
                  <g transform="translate(4.884 .012)">
                    <path
                      fill="#4F5D7F"
                      d="M35.6782837,8.81802128 C33.2364233,3.63185106 28.081493,0.573446809 22.6550279,0.307276596 L7.32567907,0.307276596 C5.9689814,0.307276596 5.01926047,1.37131915 5.01926047,2.56812766 C5.01926047,3.89770213 6.10474884,4.82865957 7.32567907,4.82865957 L11.2596791,4.82865957 C12.0736326,4.82865957 12.7518186,5.49344681 12.7518186,6.29131915 C12.7518186,7.08919149 12.0736326,7.75429787 11.2596791,7.75429787 L1.62800465,7.75429787 C0.814051163,7.75429787 0.135539535,8.41908511 0.135539535,9.21695745 C0.135539535,10.0148298 0.814051163,10.679617 1.62800465,10.679617 L8.5466093,10.679617 C9.36056279,10.679617 10.0387488,11.3447234 10.0387488,12.1425957 C10.0387488,12.9404681 9.36056279,13.6052553 8.5466093,13.6052553 L4.20530698,13.6052553 C3.39135349,13.6052553 2.71316744,14.2700426 2.71316744,15.0679149 C2.71316744,15.8657872 3.39135349,16.5308936 4.20530698,16.5308936 L7.18991163,16.5308936 C7.32567907,18.1266383 7.73265581,19.722383 8.41084186,21.1850426 C11.8024233,28.4989787 20.7559116,31.6904681 28.2169349,28.3658936 C35.949493,24.9085532 39.205307,16.1319574 35.6782837,8.81802128"
                      mask="url(#f)"
                    />
                  </g>
                  <path
                    fill="#ECEFF8"
                    d="M23.4174744,7.36289362 C27.7070093,5.43204255 32.7811953,7.27576596 34.7509628,11.4805532 C36.7207302,15.6853404 34.8401721,20.6592766 30.5503116,22.5901277 C26.2607767,24.5209787 21.1865907,22.6772553 19.2168233,18.4724681 C17.2470558,14.2676809 19.1279395,9.29374468 23.4174744,7.36289362"
                  />
                  <path
                    fill="#B7C2CE"
                    d="M30.2519488,10.1595638 L32.9650186,14.6809468 C33.100786,14.9467979 33.100786,15.079883 32.9650186,15.345734 L30.2519488,19.867117 C30.1161814,20.1329681 29.8449721,20.1329681 29.7092047,20.1329681 L24.418507,20.1329681 C24.1472977,20.1329681 24.0115302,19.999883 23.8760884,19.867117 L21.162693,15.345734 C21.0272512,15.079883 21.0272512,14.9467979 21.162693,14.6809468 L23.8760884,10.1595638 C24.0115302,9.89371277 24.2830651,9.89371277 24.418507,9.89371277 L29.7092047,9.89371277 C29.9807395,9.76062766 30.1161814,9.89371277 30.2519488,10.1595638"
                  />
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="23"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3e70dd"
                d="M21.58 11.4L17.3 4.01l-.35-.6H7.04l-.35.6-4.27 7.39-.35.6.35.6 4.27 7.39.35.6h9.92l.35-.6 4.28-7.39.35-.6-.36-.6zM8.51 10.37L6.88 12l1.63 1.63v2.73L4.15 12l4.37-4.37v2.74zm3.12 6.93l-2.04-.63 3.1-9.98 2.04.64-3.1 9.97zm3.86-.93v-2.73L17.12 12l-1.63-1.63V7.63L19.85 12l-4.36 4.37z"
              />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
          </button>
        </div>
        <br />

        <ul className="playlist">
          <a href="/example-link">
            <li className="list-item">
              <img className="list-item-image" src="" alt="img" />
              <div className="list-item-info">
                <div className="info-title">anothing title</div>
                <div className="info-subtitle">subtitle</div>
              </div>
              <button className="btn-add">
                <svg
                  className="connectedAccountOpenIcon-2cNbq5"
                  aria-hidden="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                  ></path>
                </svg>
              </button>
            </li>
          </a>
          <a href="/example-link">
            <li className="list-item">
              <img
                className="list-item-image"
                src=""
                alt="img"
              />
              <div className="list-item-info">
                <div className="info-title">anothing title</div>
                <div className="info-subtitle">subtitle</div>
              </div>
              <button className="btn-add">
                <svg
                  className="connectedAccountOpenIcon-2cNbq5"
                  aria-hidden="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                  ></path>
                </svg>
              </button>
            </li>
          </a>
          <a href="/example-link">
            <li className="list-item">
              <img
                className="list-item-image"
                src=""
                alt="img"
              />
              <div className="list-item-info">
                <div className="info-title">one more title</div>
                <div className="info-subtitle">subtitle</div>
              </div>
              <button className="btn-add">
                <svg
                  className="connectedAccountOpenIcon-2cNbq5"
                  aria-hidden="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                  ></path>
                </svg>
              </button>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default IndexPage;
