export default function Game2_OKC() {
  return (
    <svg
      className="absolute"
      viewBox="0,0,540,570"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* <g className="title" transform="translate(5, 21)">
        <text font-family="Roboto">SAS vs OKC on 05/20/2026</text>
      </g>
      <g className="footer" transform="translate(10, 560)">
        <text font-family="Roboto">
          <tspan>FG%: </tspan>
          <tspan font-weight="800">47.9%</tspan>
          <tspan> (45/94)</tspan>
        </text>
      </g>
      <g>
        <g className="legend" transform="translate(520, 560)">
          <text text-anchor="end" font-family="Roboto">
            Miss
          </text>
          <path
            transform="translate(-44, -6)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
          <text
            transform="translate(-80, 0)"
            text-anchor="end"
            font-family="Roboto"
          >
            Made
          </text>
          <path
            transform="translate(-130, -6)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
      </g> */}
      <g className="court" transform="translate(20, 50)">
        {/* <g className="markings">
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M470,0v140"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M30,0v140"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M330,0v190"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M170,0v190"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M310,0v190"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M190,0v190"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M330,190H170"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M280,40h-60"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M250,40v2.5"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M290,40v10"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M210,40v10"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M250,42.5c4.1,0,7.5,3.4,7.5,7.5s-3.4,7.5-7.5,7.5s-7.5-3.4-7.5-7.5S245.9,42.5,250,42.5z"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M0,0v470h190c0-33.1,26.9-60,60-60s60,26.9,60,60h190V0H0z"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M250,410c-33.1,0-60,26.9-60,60h40c0-11,9-20,20-20s20,9,20,20h40C310,436.9,283.1,410,250,410z"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M250,450c-11,0-20,9-20,20h40C270,459,261,450,250,450z"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M310,190c0,33.1-26.9,60-60,60s-60-26.9-60-60c0,33.1,26.9,60,60,60S310,223.1,310,190z"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M310,190c0-33.1-26.9-60-60-60s-60,26.9-60,60c0-33.1,26.9-60,60-60S310,156.9,310,190z"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M290,50c0,22.1-17.9,40-40,40s-40-17.9-40-40c0,22.1,17.9,40,40,40S290,72.1,290,50z"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M469.8,139.9c-49.7,121.4-188.3,179.6-309.7,129.9c-59-24.1-105.8-70.9-129.9-129.9 c49.7,121.4,188.3,179.6,309.7,129.9C398.9,245.7,445.7,198.9,469.8,139.9z"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M140,0v5"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M359.9,0v5"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M470,281.6h30"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M0,286.7h30"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M170,69.8h-10"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M170,79.9h-10"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M170,109.9h-10"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M170,140h-10"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M340,69.8h-10"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M340,79.9h-10"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M340,109.9h-10"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M0,140h30"
          ></path>
          <path
            className="mark"
            fill="none"
            stroke="#3C414A"
            d="M470,139.9h30"
          ></path>
        </g> */}
        <g className="shot">
          <title>
            Dort 12' Pullup Jump Shot (2 PTS) (Gilgeous-Alexander 1 AST) Q1 -
            11:29
          </title>
          <path
            transform="translate(312, 158)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 18' Step Back Jump Shot (2 PTS) Q1 - 10:21
          </title>
          <path
            transform="translate(426, 58.99999999999999)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Jal. Williams 15' Pullup Jump Shot (2 PTS) Q1 - 09:57</title>
          <path
            transform="translate(353, 154)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 11' Step Back Jump Shot (4 PTS) Q1 - 09:22
          </title>
          <path
            transform="translate(145, 59.99999999999999)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams 9' Fadeaway Jumper Q1 - 07:46</title>
          <path
            transform="translate(175, 97)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Hartenstein 13' Driving Floating Jump Shot (2 PTS) (Dort 1 AST) Q1 -
            07:23
          </title>
          <path
            transform="translate(213, 177)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Jay. Williams 25' 3PT Jump Shot (3 PTS) (Dort 2 AST) Q1 - 06:48
          </title>
          <path
            transform="translate(246.00000000000003, 296)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 4' Running Layup Q1 - 06:28</title>
          <path
            transform="translate(212, 32)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 3PT Jump Shot Q1 - 05:27</title>
          <path
            transform="translate(483, 51.00000000000001)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Mitchell 1' Driving Layup (2 PTS) (McCain 1 AST) Q1 - 04:57
          </title>
          <path
            transform="translate(244, 42)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Dort 3PT Jump Shot (6 PTS) (Jay. Williams 1 AST) Q1 - 04:17
          </title>
          <path
            transform="translate(480, 65)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jay. Williams 25' 3PT Jump Shot Q1 - 03:53</title>
          <path
            transform="translate(256, 298)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 5' Driving Finger Roll Layup Q1 - 02:47</title>
          <path
            transform="translate(290, 72)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams 15' Pullup Jump Shot Q1 - 02:23</title>
          <path
            transform="translate(353, 155)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Jal. Williams 1' Running Alley Oop Dunk Shot (4 PTS) (McCain 2 AST)
            Q1 - 02:13
          </title>
          <path
            transform="translate(263, 46.00000000000001)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Holmgren 23' Jump Shot (2 PTS) (Wallace 1 AST) Q1 - 01:45
          </title>
          <path
            transform="translate(208.00000000000003, 277)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wallace 3PT Jump Shot (3 PTS) (Gilgeous-Alexander 2 AST) Q1 - 01:16
          </title>
          <path
            transform="translate(21.999999999999993, 35)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            McCain 13' Pullup Jump Shot (3 PTS) (Gilgeous-Alexander 3 AST) Q1 -
            00:47
          </title>
          <path
            transform="translate(259, 181.00000000000003)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 25' 3PT Jump Shot Q1 - 00:16</title>
          <path
            transform="translate(441, 214)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jay. Williams 25' 3PT Jump Shot Q1 - 00:00</title>
          <path
            transform="translate(237.99999999999997, 298)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Mitchell 6' Driving Floating Bank Jump Shot Q2 - 11:41
          </title>
          <path
            transform="translate(190, 66)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 3PT Jump Shot (5 PTS) (Gilgeous-Alexander 4 AST) Q2 - 10:59
          </title>
          <path
            transform="translate(21.999999999999993, 21.999999999999996)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 13' Pullup Jump Shot (8 PTS) Q2 - 10:09
          </title>
          <path
            transform="translate(308, 171)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 19' Pullup Jump Shot Q2 - 09:45</title>
          <path
            transform="translate(240, 237)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Caruso 14' Pullup Jump Shot (7 PTS) Q2 - 09:31</title>
          <path
            transform="translate(112.00000000000001, 85)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Joe 22' Running Jump Shot Q2 - 09:14</title>
          <path
            transform="translate(43.999999999999986, 134)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 15' Pullup Jump Shot Q2 - 08:52</title>
          <path
            transform="translate(325, 175.99999999999997)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Hartenstein 13' Driving Floating Jump Shot Q2 - 08:36
          </title>
          <path
            transform="translate(254, 179)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wallace 3PT Jump Shot (6 PTS) (Gilgeous-Alexander 5 AST) Q2 - 07:59
          </title>
          <path
            transform="translate(478, 67)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 1' Running Dunk (11 PTS) (Caruso 1 AST) Q2 -
            07:38
          </title>
          <path
            transform="translate(251, 40)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 1' Driving Layup Q2 - 07:12</title>
          <path
            transform="translate(237, 46.00000000000001)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Hartenstein 1' Putback Layup Q2 - 07:09</title>
          <path
            transform="translate(261, 56)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wallace 25' 3PT Jump Shot Q2 - 06:47</title>
          <path
            transform="translate(100, 251.00000000000003)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Joe 3PT Jump Shot Q2 - 06:38</title>
          <path
            transform="translate(16.999999999999993, 43)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 10' Step Back Jump Shot Q2 - 06:16
          </title>
          <path
            transform="translate(185, 132)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wallace 25' 3PT Jump Shot (9 PTS) (Mitchell 1 AST) Q2 - 05:19
          </title>
          <path
            transform="translate(439, 206)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jay. Williams 24' 3PT Jump Shot Q2 - 04:53</title>
          <path
            transform="translate(482, 100)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Holmgren 1' Driving Layup (4 PTS) (Jay. Williams 2 AST) Q2 - 04:29
          </title>
          <path
            transform="translate(243, 45)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 13' Running Pull-Up Jump Shot (13 PTS) Q2 - 03:47
          </title>
          <path
            transform="translate(292, 171)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Holmgren 14' Jump Shot Q2 - 03:04</title>
          <path
            transform="translate(363, 140)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 8' Fadeaway Jumper (15 PTS) (Dort 3 AST) Q2 -
            02:35
          </title>
          <path
            transform="translate(168, 43)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Holmgren 3PT Jump Shot Q2 - 01:51</title>
          <path
            transform="translate(483, 59.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Holmgren 2' Cutting Layup Shot Q2 - 01:34</title>
          <path
            transform="translate(266, 58)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Hartenstein Cutting Dunk Shot (4 PTS) (Holmgren 1 AST) Q2 - 01:06
          </title>
          <path
            transform="translate(250, 46.00000000000001)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Mitchell 7' Driving Floating Jump Shot (6 PTS) Q2 - 00:34
          </title>
          <path
            transform="translate(196.99999999999997, 97)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Dort 10' Pullup Jump Shot (8 PTS) (Hartenstein 1 AST) Q3 - 11:44
          </title>
          <path
            transform="translate(240, 154)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Holmgren 26' 3PT Jump Shot Q3 - 11:07</title>
          <path
            transform="translate(371, 276)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Hartenstein 12' Floating Jump Shot (6 PTS) (Wallace 2 AST) Q3 -
            10:24
          </title>
          <path
            transform="translate(135, 62)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Hartenstein 11' Floating Jump Shot Q3 - 09:35</title>
          <path
            transform="translate(214, 159)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wallace 3PT Jump Shot Q3 - 09:31</title>
          <path
            transform="translate(20, 40)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jay. Williams 3PT Jump Shot Q3 - 08:52</title>
          <path
            transform="translate(21.999999999999993, 34)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 3' Driving Finger Roll Layup Q3 - 08:26</title>
          <path
            transform="translate(226.99999999999997, 62)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Dort 26' 3PT Jump Shot Q3 - 08:22</title>
          <path
            transform="translate(21.000000000000014, 163)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Jay. Williams 3PT Jump Shot (6 PTS) (Gilgeous-Alexander 6 AST) Q3 -
            07:56
          </title>
          <path
            transform="translate(478, 36)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 26' 3PT Jump Shot (10 PTS) (Gilgeous-Alexander 7 AST) Q3 -
            07:18
          </title>
          <path
            transform="translate(317, 304)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Caruso 2' Cutting Layup Shot Q3 - 06:45</title>
          <path
            transform="translate(237, 61)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 3PT Jump Shot (13 PTS) (Holmgren 2 AST) Q3 - 06:15
          </title>
          <path
            transform="translate(478, 65)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 17' Step Back Jump Shot (17 PTS) Q3 - 05:38
          </title>
          <path
            transform="translate(360, 181.00000000000003)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 4' Running Pull-Up Jump Shot Q3 - 05:16</title>
          <path
            transform="translate(243, 94)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 26' 3PT Running Jump Shot Q3 - 05:03</title>
          <path
            transform="translate(21.000000000000014, 178)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 6' Driving Floating Jump Shot Q3 - 04:51
          </title>
          <path
            transform="translate(241, 113)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 2' Driving Floating Bank Jump Shot (19 PTS) Q3 -
            04:19
          </title>
          <path
            transform="translate(251, 68)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Holmgren 4' Driving Hook Shot (7 PTS) (Caruso 2 AST) Q3 - 03:56
          </title>
          <path
            transform="translate(222, 77)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 20' Pullup Jump Shot (22 PTS) Q3 - 03:23
          </title>
          <path
            transform="translate(289, 243)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Holmgren 2' Driving Dunk (10 PTS) (Gilgeous-Alexander 8 AST) Q3 -
            02:57
          </title>
          <path
            transform="translate(262, 63)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Holmgren 1' Alley Oop Dunk (12 PTS) (Caruso 3 AST) Q3 - 02:29
          </title>
          <path
            transform="translate(250, 56)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Mitchell 2' Reverse Layup (8 PTS) (Caruso 4 AST) Q3 - 01:49
          </title>
          <path
            transform="translate(239, 63)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 3PT Jump Shot Q3 - 01:21</title>
          <path
            transform="translate(480, 36)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Mitchell 3PT Jump Shot Q3 - 01:02</title>
          <path
            transform="translate(482, 37)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 13' Pullup Jump Shot (24 PTS) Q3 - 00:30
          </title>
          <path
            transform="translate(363, 107)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            McCain 25' 3PT Jump Shot (6 PTS) (Gilgeous-Alexander 9 AST) Q3 -
            00:05
          </title>
          <path
            transform="translate(452, 205)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 3PT Jump Shot Q4 - 11:29</title>
          <path
            transform="translate(20, 62)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 25' 3PT Step Back Jump Shot Q4 - 10:55</title>
          <path
            transform="translate(45, 201)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Joe 3PT Jump Shot Q4 - 10:16</title>
          <path
            transform="translate(474, 50)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>McCain 24' 3PT Jump Shot (9 PTS) (Joe 1 AST) Q4 - 10:09</title>
          <path
            transform="translate(477, 123)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 4' Running Finger Roll Layup Q4 - 09:41</title>
          <path
            transform="translate(213, 65)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Hartenstein 16' Driving Floating Jump Shot Q4 - 09:16
          </title>
          <path
            transform="translate(311, 195.99999999999997)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Caruso 30' 3PT Pullup Jump Shot Q4 - 08:32</title>
          <path
            transform="translate(364, 327.99999999999994)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wallace 26' 3PT Jump Shot (12 PTS) (Hartenstein 2 AST) Q4 - 08:24
          </title>
          <path
            transform="translate(324, 301)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            McCain 26' 3PT Jump Bank Shot (12 PTS) (Hartenstein 3 AST) Q4 -
            08:01
          </title>
          <path
            transform="translate(243, 309)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 26' 3PT Pullup Jump Shot Q4 - 07:04
          </title>
          <path
            transform="translate(325, 299)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 27' 3PT Jump Shot Q4 - 06:59</title>
          <path
            transform="translate(239, 318)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Holmgren 13' Turnaround Jump Shot Q4 - 05:56</title>
          <path
            transform="translate(185, 160)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Hartenstein 7' Floating Jump Shot (10 PTS) (Wallace 3 AST) Q4 -
            05:44
          </title>
          <path
            transform="translate(324, 62)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 4' Driving Floating Jump Shot (26 PTS) (Mitchell
            2 AST) Q4 - 05:00
          </title>
          <path
            transform="translate(250, 86)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Mitchell 29' 3PT Pullup Jump Shot Q4 - 04:16</title>
          <path
            transform="translate(385, 307)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 26' 3PT Pullup Jump Shot Q4 - 04:07
          </title>
          <path
            transform="translate(357, 282)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 20' Pullup Jump Shot Q4 - 03:55</title>
          <path
            transform="translate(46.99999999999999, 55)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Mitchell 4' Driving Hook Shot Q4 - 03:19</title>
          <path
            transform="translate(218, 66)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 19' Step Back Jump Shot Q4 - 02:38
          </title>
          <path
            transform="translate(108.00000000000001, 183)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Mitchell 11' Pullup Jump Shot (10 PTS) (Caruso 5 AST) Q4 - 02:12
          </title>
          <path
            transform="translate(273, 159)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 18' Pullup Jump Shot Q4 - 01:37</title>
          <path
            transform="translate(96, 146)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 19' Step Back Jump Shot (30 PTS) (McCain 3 AST)
            Q4 - 00:43
          </title>
          <path
            transform="translate(102, 162)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 2' Driving Layup (17 PTS) (Wallace 4 AST) Q4 - 00:20
          </title>
          <path
            transform="translate(237.99999999999997, 63)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
      </g>
    </svg>
  );
}
