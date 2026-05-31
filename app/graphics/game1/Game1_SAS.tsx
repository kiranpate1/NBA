export default function Game1_SAS() {
  return (
    <svg
      className="absolute"
      viewBox="0,0,540,570"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* <g className="title" transform="translate(5, 21)">
        <text>SAS vs OKC on 05/18/2026</text>
      </g>
      <g className="footer" transform="translate(10, 560)">
        <text>
          <tspan>FG%: </tspan>
          <tspan>42.7%</tspan>
          <tspan> (41/96)</tspan>
        </text>
      </g>
      <g>
        <g className="legend" transform="translate(520, 560)">
          <text text-anchor="end">Miss</text>
          <path
            transform="translate(-44, -6)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
          <text transform="translate(-80, 0)" text-anchor="end">
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
            Castle 26' 3PT Jump Shot (3 PTS) (Harper 1 AST) Q1 - 11:42
          </title>
          <path
            transform="translate(388.00000000000006, 273)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 26' 3PT Running Jump Shot Q1 - 10:42</title>
          <path
            transform="translate(40, 207.99999999999997)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama Tip Layup Shot Q1 - 10:37</title>
          <path
            transform="translate(250, 50)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama Tip Layup Shot Q1 - 10:36</title>
          <path
            transform="translate(250, 50)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Wembanyama Tip Layup Shot (4 PTS) Q1 - 10:35</title>
          <path
            transform="translate(250, 50)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 3PT Jump Shot Q1 - 09:33</title>
          <path
            transform="translate(479, 79)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Champagnie 26' 3PT Step Back Jump Shot (3 PTS) (Castle 1 AST) Q1 -
            08:27
          </title>
          <path
            transform="translate(85, 257)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 27' 3PT Running Jump Shot Q1 - 08:09</title>
          <path
            transform="translate(87.99999999999997, 270)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 26' 3PT Jump Shot Q1 - 07:47</title>
          <path
            transform="translate(80, 252)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 3' Alley Oop Layup Q1 - 06:34</title>
          <path
            transform="translate(223, 63)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Johnson 25' 3PT Jump Shot (3 PTS) (Castle 2 AST) Q1 - 06:06
          </title>
          <path
            transform="translate(353, 283)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson 2' Running Layup Q1 - 05:46</title>
          <path
            transform="translate(260, 65)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 9' Pullup Jump Shot Q1 - 05:15</title>
          <path
            transform="translate(342, 39)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson 3PT Jump Shot Q1 - 04:42</title>
          <path
            transform="translate(472, 31)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 29' 3PT Jump Shot Q1 - 03:49</title>
          <path
            transform="translate(154, 319)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 25' 3PT Step Back Jump Shot Q1 - 02:50</title>
          <path
            transform="translate(375, 268)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Castle 2' Driving Bank Hook Shot (9 PTS) Q1 - 02:21</title>
          <path
            transform="translate(259, 63)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Castle 5' Driving Floating Jump Shot (11 PTS) Q1 - 01:58
          </title>
          <path
            transform="translate(218.99999999999997, 87.99999999999999)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 1' Turnaround Jump Shot Q1 - 00:56</title>
          <path
            transform="translate(248, 63)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Wembanyama Tip Layup Shot (6 PTS) Q1 - 00:55</title>
          <path
            transform="translate(250, 50)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Harper 3' Driving Layup (4 PTS) Q1 - 00:16</title>
          <path
            transform="translate(234, 72)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson 3PT Jump Shot Q2 - 11:20</title>
          <path
            transform="translate(477, 25.999999999999996)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Bryant 27' 3PT Pullup Jump Shot Q2 - 10:39</title>
          <path
            transform="translate(348, 306)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Johnson 27' 3PT Jump Shot (6 PTS) (Harper 2 AST) Q2 - 10:17
          </title>
          <path
            transform="translate(271, 317)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 27' 3PT Jump Shot Q2 - 09:47</title>
          <path
            transform="translate(385, 282)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Bryant 26' 3PT Jump Shot (3 PTS) (Harper 3 AST) Q2 - 09:34
          </title>
          <path
            transform="translate(31.000000000000014, 186)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Harper 26' 3PT Jump Shot (7 PTS) (Wembanyama 1 AST) Q2 - 09:11
          </title>
          <path
            transform="translate(439, 230.99999999999997)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 8' Fadeaway Jumper Q2 - 08:23</title>
          <path
            transform="translate(305, 112)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson 2' Driving Layup Q2 - 07:49</title>
          <path
            transform="translate(261, 62)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Wembanyama Tip Layup Shot (8 PTS) Q2 - 07:48</title>
          <path
            transform="translate(250, 50)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wembanyama 2' Cutting Dunk Shot (10 PTS) (Castle 3 AST) Q2 - 07:20
          </title>
          <path
            transform="translate(246.00000000000003, 67)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 27' 3PT Jump Shot Q2 - 06:22</title>
          <path
            transform="translate(344, 302)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Johnson 4' Driving Finger Roll Layup (8 PTS) (Vassell 1 AST) Q2 -
            06:00
          </title>
          <path
            transform="translate(248, 87)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Kornet 2' Cutting Layup Shot Q2 - 05:07</title>
          <path
            transform="translate(235, 58)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Barnes 3' Layup Q2 - 05:02</title>
          <path
            transform="translate(273, 72)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 4' Driving Layup Q2 - 04:31</title>
          <path
            transform="translate(287, 63)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Vassell 15' Turnaround Jump Shot (2 PTS) (Kornet 1 AST) Q2 - 04:16
          </title>
          <path
            transform="translate(261, 201)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 6' Driving Floating Jump Shot Q2 - 03:51</title>
          <path
            transform="translate(299, 87.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 3PT Step Back Jump Shot Q2 - 03:09</title>
          <path
            transform="translate(20, 63)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Wembanyama 5' Turnaround Jump Shot (12 PTS) Q2 - 02:33</title>
          <path
            transform="translate(234, 97)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wembanyama 3' Driving Dunk (14 PTS) (Castle 4 AST) Q2 - 01:33
          </title>
          <path
            transform="translate(250, 81.99999999999999)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Vassell 28' 3PT Jump Shot (5 PTS) (Harper 4 AST) Q2 - 00:54
          </title>
          <path
            transform="translate(241, 331.00000000000006)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 16' Turnaround Fadeaway Shot Q2 - 00:19</title>
          <path
            transform="translate(246.00000000000003, 209)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Harper 2' Running Layup (9 PTS) Q3 - 11:38</title>
          <path
            transform="translate(246.00000000000003, 35)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 3PT Jump Shot Q3 - 11:13</title>
          <path
            transform="translate(25, 24)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 28' 3PT Jump Shot Q3 - 11:03</title>
          <path
            transform="translate(429, 268)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 3PT Jump Shot Q3 - 10:32</title>
          <path
            transform="translate(483, 74)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Castle 2' Driving Layup (13 PTS) Q3 - 10:02</title>
          <path
            transform="translate(266, 48)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 3PT Jump Shot Q3 - 09:31</title>
          <path
            transform="translate(478, 58)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Champagnie 1' Driving Layup (5 PTS) (Wembanyama 2 AST) Q3 - 08:48
          </title>
          <path
            transform="translate(251, 56)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Champagnie 26' 3PT Jump Shot (8 PTS) (Bryant 1 AST) Q3 - 07:01
          </title>
          <path
            transform="translate(322, 297)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Harper 2' Running Layup (11 PTS) Q3 - 04:46</title>
          <path
            transform="translate(244, 34)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Harper 2' Driving Layup (13 PTS) Q3 - 04:20</title>
          <path
            transform="translate(229, 46.00000000000001)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 25' 3PT Jump Shot Q3 - 02:27</title>
          <path
            transform="translate(358, 276)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 7' Turnaround Jump Shot Q3 - 02:21</title>
          <path
            transform="translate(315, 34)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Vassell 12' Pullup Jump Shot (7 PTS) (Castle 5 AST) Q3 - 01:43
          </title>
          <path
            transform="translate(135, 58)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 25' 3PT Jump Shot Q3 - 00:47</title>
          <path
            transform="translate(467, 166.99999999999997)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Vassell 24' 3PT Jump Shot (10 PTS) (Castle 6 AST) Q3 - 00:09
          </title>
          <path
            transform="translate(480, 100)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 8' Turnaround Jump Shot Q4 - 11:40</title>
          <path
            transform="translate(175, 77)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Johnson 3PT Jump Shot (13 PTS) (Castle 7 AST) Q4 - 11:14
          </title>
          <path
            transform="translate(20, 19.000000000000004)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 28' 3PT Jump Shot Q4 - 10:48</title>
          <path
            transform="translate(243, 332)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Wembanyama 2' Driving Layup (23 PTS) Q4 - 09:49</title>
          <path
            transform="translate(270, 58)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wembanyama 2' Alley Oop Dunk (25 PTS) (Vassell 2 AST) Q4 - 09:10
          </title>
          <path
            transform="translate(261, 37)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 6' Fadeaway Jumper Q4 - 08:37</title>
          <path
            transform="translate(300, 90)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson 3PT Jump Shot Q4 - 08:09</title>
          <path
            transform="translate(23.000000000000007, 17.999999999999996)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Harper 8' Fadeaway Jumper (15 PTS) Q4 - 07:31</title>
          <path
            transform="translate(321, 93)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 30' 3PT Pullup Jump Shot Q4 - 06:33</title>
          <path
            transform="translate(341, 339)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 3PT Jump Shot Q4 - 06:20</title>
          <path
            transform="translate(475, 105)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 11' Turnaround Fadeaway Shot Q4 - 05:44</title>
          <path
            transform="translate(288, 149)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Harper 2' Driving Layup (17 PTS) (Wembanyama 3 AST) Q4 - 05:00
          </title>
          <path
            transform="translate(266, 42)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 6' Driving Layup Q4 - 04:36</title>
          <path
            transform="translate(311, 70)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 17' Jump Shot Q4 - 04:34</title>
          <path
            transform="translate(419, 42)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 26' 3PT Jump Shot Q4 - 04:02</title>
          <path
            transform="translate(123.00000000000001, 281)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 24' 3PT Jump Shot Q4 - 03:54</title>
          <path
            transform="translate(477, 120.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 3' Driving Dunk Q4 - 03:38</title>
          <path
            transform="translate(224.00000000000003, 43.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 3PT Jump Shot Q4 - 03:00</title>
          <path
            transform="translate(25, 110.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Vassell 3PT Jump Shot (13 PTS) (Champagnie 1 AST) Q4 - 02:25
          </title>
          <path
            transform="translate(479, 91)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Champagnie 24' 3PT Jump Shot (11 PTS) (Castle 8 AST) Q4 - 01:26
          </title>
          <path
            transform="translate(488, 67)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Wembanyama 4' Turnaround Jump Shot (27 PTS) Q4 - 00:12</title>
          <path
            transform="translate(249, 85)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 4' Floating Jump Shot Q4 - 00:00</title>
          <path
            transform="translate(214, 63)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 27' 3PT Jump Shot OT1 - 04:48</title>
          <path
            transform="translate(447, 230)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Castle 1' Driving Dunk (17 PTS) OT1 - 03:46</title>
          <path
            transform="translate(257, 45)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 28' 3PT Jump Shot OT1 - 02:51</title>
          <path
            transform="translate(449, 251.00000000000003)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Wembanyama 2' Putback Layup (29 PTS) OT1 - 02:47</title>
          <path
            transform="translate(265, 58)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 3PT Jump Shot OT1 - 01:15</title>
          <path
            transform="translate(478, 53)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama Tip Layup Shot OT1 - 01:10</title>
          <path
            transform="translate(250, 50)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 25' 3PT Jump Shot OT1 - 00:51</title>
          <path
            transform="translate(77, 230)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wembanyama 28' 3PT Running Jump Shot (32 PTS) (Castle 9 AST) OT1 -
            00:27
          </title>
          <path
            transform="translate(142, 307)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 3' Driving Floating Jump Shot OT2 - 04:46</title>
          <path
            transform="translate(217, 58.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 1' Putback Layup OT2 - 04:44</title>
          <path
            transform="translate(241, 43)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wembanyama 1' Driving Dunk (34 PTS) (Harper 5 AST) OT2 - 03:40
          </title>
          <path
            transform="translate(262, 53)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 31' 3PT Pullup Jump Shot OT2 - 02:34</title>
          <path
            transform="translate(145, 345)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Harper 1' Driving Finger Roll Layup (21 PTS) (Castle 10 AST) OT2 -
            02:04
          </title>
          <path
            transform="translate(260, 61)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 3' Driving Layup OT2 - 01:30</title>
          <path
            transform="translate(279, 67)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Wembanyama Dunk (38 PTS) (Harper 6 AST) OT2 - 01:01</title>
          <path
            transform="translate(251, 50)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wembanyama 2' Alley Oop Dunk (41 PTS) (Castle 11 AST) OT2 - 00:22
          </title>
          <path
            transform="translate(267, 48.99999999999999)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
      </g>
      {/* <g className="watermark" transform="translate(520, 520)">
        <text text-anchor="end" dy="-5" dx="-5" font-size="22px">
          NBA.com
        </text>
      </g> */}
    </svg>
  );
}
