export default function Game1_OKC() {
  return (
    <svg
      className="absolute"
      viewBox="0,0,540,570"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* <g className="title" transform="translate(5, 21)">
        <text font-family="Roboto">SAS vs OKC on 05/18/2026</text>
      </g>
      <g className="footer" transform="translate(10, 560)">
        <text font-family="Roboto">
          <tspan>FG%: </tspan>
          <tspan font-weight="800">40.6%</tspan>
          <tspan> (41/101)</tspan>
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
          <title>MISS Hartenstein 9' Floating Jump Shot Q1 - 11:17</title>
          <path
            transform="translate(252, 138)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 7' Pullup Jump Shot Q1 - 10:21</title>
          <path
            transform="translate(185, 81)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Dort 3PT Jump Shot Q1 - 09:54</title>
          <path
            transform="translate(478, 71)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 25' 3PT Step Back Jump Shot Q1 - 09:08
          </title>
          <path
            transform="translate(363, 275)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 25' 3PT Jump Shot (3 PTS) (Gilgeous-Alexander 1 AST) Q1 -
            08:46
          </title>
          <path
            transform="translate(251, 297)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Caruso 25' 3PT Jump Shot Q1 - 07:58</title>
          <path
            transform="translate(294, 295)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams 7' Running Layup Q1 - 07:40</title>
          <path
            transform="translate(315, 58.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 2' Driving Layup (5 PTS) (Mitchell 1 AST) Q1 - 07:11
          </title>
          <path
            transform="translate(246.00000000000003, 67)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Caruso 1' Running Finger Roll Layup (7 PTS) Q1 - 06:48</title>
          <path
            transform="translate(261, 46.00000000000001)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 15' Running Pull-Up Jump Shot (2 PTS) Q1 - 06:27
          </title>
          <path
            transform="translate(331, 180)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 13' Fadeaway Jumper Q1 - 05:52</title>
          <path
            transform="translate(379, 86)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Dort 25' 3PT Jump Shot Q1 - 05:35</title>
          <path
            transform="translate(50, 193.00000000000003)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 24' 3PT Jump Shot (10 PTS) (Gilgeous-Alexander 2 AST) Q1 -
            04:55
          </title>
          <path
            transform="translate(16.999999999999993, 19.000000000000004)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Dort 25' 3PT Jump Shot Q1 - 04:26</title>
          <path
            transform="translate(97.00000000000001, 250)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Jal. Williams 2' Driving Finger Roll Layup (2 PTS) (Hartenstein 1
            AST) Q1 - 04:03
          </title>
          <path
            transform="translate(260, 35)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams 13' Pullup Jump Shot Q1 - 03:39</title>
          <path
            transform="translate(283, 179)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Jal. Williams 5' Driving Floating Jump Shot (4 PTS) Q1 - 03:35
          </title>
          <path
            transform="translate(210, 84)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Jal. Williams 1' Running Dunk (6 PTS) (Mitchell 2 AST) Q1 - 03:11
          </title>
          <path
            transform="translate(255, 45)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>McCain 1' Running Finger Roll Layup (2 PTS) Q1 - 02:43</title>
          <path
            transform="translate(260, 46.00000000000001)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Jal. Williams 2' Driving Layup (8 PTS) Q1 - 02:13</title>
          <path
            transform="translate(266, 50)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 26' 3PT Pullup Jump Shot Q1 - 01:48</title>
          <path
            transform="translate(147, 289)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wallace 25' 3PT Jump Shot (3 PTS) (Gilgeous-Alexander 3 AST) Q1 -
            01:17
          </title>
          <path
            transform="translate(406, 251.00000000000003)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams 3PT Jump Shot Q1 - 00:39</title>
          <path
            transform="translate(477, 72)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wallace 25' 3PT Jump Shot Q2 - 11:41</title>
          <path
            transform="translate(441, 213)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Caruso 3PT Jump Shot Q2 - 11:03</title>
          <path
            transform="translate(479, 19.000000000000004)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wiggins 24' 3PT Running Jump Shot Q2 - 10:33</title>
          <path
            transform="translate(13.000000000000007, 34)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wiggins 3PT Jump Shot Q2 - 09:20</title>
          <path
            transform="translate(26.999999999999993, 14.000000000000004)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wiggins 3PT Pullup Jump Shot Q2 - 08:49</title>
          <path
            transform="translate(21.999999999999993, 50)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wallace 25' 3PT Jump Shot Q2 - 08:10</title>
          <path
            transform="translate(153, 280)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 25' 3PT Jump Shot (13 PTS) (Gilgeous-Alexander 4 AST) Q2 -
            07:37
          </title>
          <path
            transform="translate(230, 297)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Caruso 3' Driving Layup Q2 - 07:08</title>
          <path
            transform="translate(275, 58.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 25' 3PT Jump Shot (16 PTS) (Gilgeous-Alexander 5 AST) Q2 -
            06:42
          </title>
          <path
            transform="translate(407, 239)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Caruso 3PT Jump Shot Q2 - 05:40</title>
          <path
            transform="translate(480, 75)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 25' 3PT Jump Shot Q2 - 04:54</title>
          <path
            transform="translate(48.00000000000001, 190)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Jal. Williams 7' Driving Floating Bank Jump Shot Q2 - 04:01
          </title>
          <path
            transform="translate(308, 85)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Jal. Williams 2' Running Layup (12 PTS) (McCain 1 AST) Q2 - 03:47
          </title>
          <path
            transform="translate(266, 43)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>McCain 1' Running Layup (4 PTS) Q2 - 03:30</title>
          <path
            transform="translate(261, 48.99999999999999)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 18' Step Back Jump Shot Q2 - 02:56
          </title>
          <path
            transform="translate(229, 230)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Mitchell 9' Pullup Jump Shot Q2 - 01:54</title>
          <path
            transform="translate(316, 117.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams 2' Driving Layup Q2 - 01:08</title>
          <path
            transform="translate(268, 48.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wallace 24' 3PT Jump Shot Q2 - 01:02</title>
          <path
            transform="translate(26.000000000000014, 142)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Holmgren 3PT Jump Shot (5 PTS) (Jal. Williams 1 AST) Q2 - 00:42
          </title>
          <path
            transform="translate(21.999999999999993, 29)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams 13' Step Back Jump Shot Q2 - 00:02</title>
          <path
            transform="translate(299, 175)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Holmgren 2' Tip Layup Shot Q2 - 00:01</title>
          <path
            transform="translate(245, 70)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 13' Fadeaway Jumper Q3 - 11:29</title>
          <path
            transform="translate(118.99999999999999, 24)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Jal. Williams 12' Pullup Jump Shot (14 PTS) Q3 - 10:50</title>
          <path
            transform="translate(163, 128)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Holmgren 26' 3PT Jump Shot (8 PTS) (Dort 1 AST) Q3 - 10:18
          </title>
          <path
            transform="translate(353, 291)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Wallace 2' Driving Layup (5 PTS) Q3 - 09:48</title>
          <path
            transform="translate(234, 68)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Dort 26' 3PT Jump Shot Q3 - 09:17</title>
          <path
            transform="translate(93.00000000000001, 261)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 15' Step Back Jump Shot Q3 - 09:03
          </title>
          <path
            transform="translate(373, 133)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 24' 3PT Jump Shot (7 PTS) (Jal. Williams 2 AST)
            Q3 - 08:20
          </title>
          <path
            transform="translate(484, 77)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 27' 3PT Step Back Jump Shot Q3 - 07:55
          </title>
          <path
            transform="translate(114, 285)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Dort 24' 3PT Jump Shot (3 PTS) (Jal. Williams 3 AST) Q3 - 07:50
          </title>
          <path
            transform="translate(13.000000000000007, 50)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Holmgren 13' Fadeaway Jumper Q3 - 07:18</title>
          <path
            transform="translate(256, 175.99999999999997)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Holmgren 25' 3PT Jump Shot Q3 - 06:35</title>
          <path
            transform="translate(447, 207.00000000000003)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            McCain 3PT Jump Shot (7 PTS) (Mitchell 3 AST) Q3 - 05:30
          </title>
          <path
            transform="translate(21.999999999999993, 58)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Jal. Williams 6' Driving Floating Jump Shot Q3 - 04:29
          </title>
          <path
            transform="translate(254, 112)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Mitchell 16' Pullup Jump Shot (2 PTS) Q3 - 04:09</title>
          <path
            transform="translate(185, 193.00000000000003)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Mitchell 2' Driving Reverse Layup Q3 - 03:37</title>
          <path
            transform="translate(263, 62)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Jal. Williams 1' Cutting Dunk Shot (17 PTS) (Hartenstein 2 AST) Q3 -
            03:05
          </title>
          <path
            transform="translate(254, 63)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams 3' Driving Hook Shot Q3 - 02:35</title>
          <path
            transform="translate(217, 61)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McCain 13' Step Back Jump Shot Q3 - 01:58</title>
          <path
            transform="translate(262, 183)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams Tip Layup Shot Q3 - 01:57</title>
          <path
            transform="translate(250, 50)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 27' 3PT Step Back Jump Shot (10 PTS) Q3 - 01:25
          </title>
          <path
            transform="translate(120, 285)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 3PT Jump Shot (19 PTS) (Gilgeous-Alexander 6 AST) Q3 - 00:34
          </title>
          <path
            transform="translate(473, 21)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Caruso 27' 3PT Pullup Jump Shot Q3 - 00:02</title>
          <path
            transform="translate(68.99999999999999, 250)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Mitchell 23' Pullup Jump Shot (4 PTS) Q4 - 11:02</title>
          <path
            transform="translate(266, 283)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 13' Pullup Jump Shot Q4 - 10:39</title>
          <path
            transform="translate(164.00000000000003, 154)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 3PT Jump Shot (22 PTS) (Gilgeous-Alexander 7 AST) Q4 - 08:53
          </title>
          <path
            transform="translate(482, 34)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 7' Jump Shot Q4 - 08:26</title>
          <path
            transform="translate(192, 84)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 2' Running Layup Q4 - 07:58</title>
          <path
            transform="translate(244, 67)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Dort 2' Cutting Dunk Shot (5 PTS) (Mitchell 4 AST) Q4 - 07:08
          </title>
          <path
            transform="translate(243, 65)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 11' Step Back Jump Shot Q4 - 06:06
          </title>
          <path
            transform="translate(353, 72)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Gilgeous-Alexander 2' Driving Layup (14 PTS) Q4 - 05:26</title>
          <path
            transform="translate(233, 63)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Jal. Williams 10' Pullup Jump Shot (19 PTS) Q4 - 04:19</title>
          <path
            transform="translate(191, 125)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 1' Cutting Layup Shot (24 PTS) (Gilgeous-Alexander 8 AST) Q4
            - 03:23
          </title>
          <path
            transform="translate(260, 59.99999999999999)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 25' 3PT Running Pull-Up Jump Shot Q4 - 02:51
          </title>
          <path
            transform="translate(41.99999999999999, 193.00000000000003)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 11' Step Back Jump Shot (18 PTS) Q4 - 02:10
          </title>
          <path
            transform="translate(317, 135)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 26' 3PT Jump Shot (27 PTS) (Gilgeous-Alexander 9 AST) Q4 -
            01:51
          </title>
          <path
            transform="translate(273, 308)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Jal. Williams 11' Driving Floating Jump Shot (21 PTS) (Caruso 1 AST)
            Q4 - 01:12
          </title>
          <path
            transform="translate(168, 130)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Gilgeous-Alexander 5' Running Layup Q4 - 00:59</title>
          <path
            transform="translate(210.99999999999997, 84)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Gilgeous-Alexander 2' Driving Finger Roll Layup (22 PTS) (Mitchell 5
            AST) Q4 - 00:03
          </title>
          <path
            transform="translate(229, 57.00000000000001)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 28' 3PT Step Back Jump Shot OT1 - 04:14
          </title>
          <path
            transform="translate(72, 270)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 5' Driving Floating Jump Shot OT1 - 03:27
          </title>
          <path
            transform="translate(248, 103)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams 2' Running Layup OT1 - 03:13</title>
          <path
            transform="translate(233, 68)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Caruso 26' 3PT Jump Shot OT1 - 02:32</title>
          <path
            transform="translate(319, 304)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Caruso 3PT Jump Shot (30 PTS) (Gilgeous-Alexander 10 AST) OT1 -
            02:21
          </title>
          <path
            transform="translate(21.000000000000014, 40)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Jal. Williams 2' Running Dunk (23 PTS) OT1 - 01:52</title>
          <path
            transform="translate(255, 68)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Mitchell 27' 3PT Running Jump Shot OT1 - 01:31</title>
          <path
            transform="translate(16.999999999999993, 188)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Gilgeous-Alexander 2' Driving Dunk (24 PTS) OT1 - 00:58</title>
          <path
            transform="translate(250, 66)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams 14' Pullup Jump Shot OT1 - 00:34</title>
          <path
            transform="translate(163, 155)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams 27' 3PT Jump Shot OT1 - 00:04</title>
          <path
            transform="translate(428, 250)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Holmgren 3PT Step Back Jump Shot OT2 - 03:51</title>
          <path
            transform="translate(475, 86)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Gilgeous-Alexander 25' 3PT Step Back Jump Shot OT2 - 03:23
          </title>
          <path
            transform="translate(48.00000000000001, 204.00000000000003)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Caruso 3PT Step Back Jump Shot OT2 - 02:57</title>
          <path
            transform="translate(18.000000000000007, 50)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wallace 27' 3PT Jump Shot (8 PTS) (Gilgeous-Alexander 11 AST) OT2 -
            02:24
          </title>
          <path
            transform="translate(82.00000000000003, 262)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Jal. Williams 28' 3PT Jump Shot (26 PTS) (Gilgeous-Alexander 12 AST)
            OT2 - 01:21
          </title>
          <path
            transform="translate(303, 323)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Caruso 1' Driving Reverse Layup OT2 - 00:46</title>
          <path
            transform="translate(239, 59.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Holmgren 2' Putback Layup OT2 - 00:44</title>
          <path
            transform="translate(233, 51.00000000000001)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Jal. Williams 3' Putback Layup OT2 - 00:40</title>
          <path
            transform="translate(218, 56)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Jal. Williams 1' Driving Finger Roll Layup OT2 - 00:18
          </title>
          <path
            transform="translate(244, 56)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
      </g>
      {/* <g className="watermark" transform="translate(520, 520)">
        <text
          text-anchor="end"
          dy="-5"
          dx="-5"
          font-size="22px"
          font-weight="600"
          font-family="Roboto"
        >
          NBA.com
        </text>
      </g> */}
    </svg>
  );
}
