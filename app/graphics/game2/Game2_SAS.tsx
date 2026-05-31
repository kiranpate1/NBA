export default function Game2_SAS() {
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
          <tspan font-weight="800">48.8%</tspan>
          <tspan> (41/84)</tspan>
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
            style="stroke-dasharray:5,10"
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
          <title>MISS Vassell 27' 3PT Jump Shot Q1 - 11:43</title>
          <path
            transform="translate(358, 301)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 25' 3PT Jump Shot Q1 - 11:05</title>
          <path
            transform="translate(21.000000000000014, 142)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Vassell 3PT Pullup Jump Shot (3 PTS) (Harper 1 AST) Q1 - 10:12
          </title>
          <path
            transform="translate(483, 21)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wembanyama 26' 3PT Jump Shot (3 PTS) (Harper 2 AST) Q1 - 09:46
          </title>
          <path
            transform="translate(380, 276)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Harper 3' Driving Layup (2 PTS) Q1 - 09:09</title>
          <path
            transform="translate(244, 77)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 11' Pullup Jump Shot Q1 - 08:36</title>
          <path
            transform="translate(363, 34)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 27' 3PT Jump Shot Q1 - 07:56</title>
          <path
            transform="translate(344, 299)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson 26' 3PT Jump Shot Q1 - 06:20</title>
          <path
            transform="translate(45, 214)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 4' Jump Shot Q1 - 06:15</title>
          <path
            transform="translate(225, 83)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Kornet 1' Cutting Dunk Shot (2 PTS) (Castle 1 AST) Q1 - 05:50
          </title>
          <path
            transform="translate(244, 59.99999999999999)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Castle 15' Pullup Jump Shot (6 PTS) Q1 - 05:17</title>
          <path
            transform="translate(300, 189)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson 2' Driving Hook Shot Q1 - 04:28</title>
          <path
            transform="translate(268, 57.00000000000001)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Castle 11' Driving Floating Jump Shot (8 PTS) Q1 - 04:03
          </title>
          <path
            transform="translate(254, 156)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 27' 3PT Jump Shot Q1 - 03:25</title>
          <path
            transform="translate(41.99999999999999, 215)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Johnson 24' 3PT Jump Shot (3 PTS) (Champagnie 1 AST) Q1 - 03:07
          </title>
          <path
            transform="translate(13.000000000000007, 23.000000000000004)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson 3' Driving Layup Q1 - 02:40</title>
          <path
            transform="translate(228, 67)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson Tip Layup Shot Q1 - 02:37</title>
          <path
            transform="translate(250, 50)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Kornet 2' Putback Layup (4 PTS) Q1 - 02:35</title>
          <path
            transform="translate(259, 67)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 16' Step Back Jump Shot Q1 - 01:59</title>
          <path
            transform="translate(409, 81.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            McLaughlin 27' 3PT Step Back Jump Shot (3 PTS) (Champagnie 2 AST) Q1
            - 01:02
          </title>
          <path
            transform="translate(428, 254)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson 1' Driving Layup Q1 - 00:42</title>
          <path
            transform="translate(252, 59.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Champagnie 27' 3PT Jump Shot (5 PTS) (Harper 3 AST) Q1 - 00:29
          </title>
          <path
            transform="translate(360, 301)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Wembanyama 7' Driving Floating Bank Jump Shot Q2 - 10:20
          </title>
          <path
            transform="translate(312, 83)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Wembanyama Tip Layup Shot (5 PTS) Q2 - 10:19</title>
          <path
            transform="translate(250, 50)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Harper 2' Driving Finger Roll Layup (4 PTS) Q2 - 09:58</title>
          <path
            transform="translate(255, 66)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Castle 1' Running Layup (10 PTS) (Wembanyama 1 AST) Q2 - 09:05
          </title>
          <path
            transform="translate(240, 58)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Castle 2' Driving Dunk (12 PTS) (Wembanyama 2 AST) Q2 - 08:15
          </title>
          <path
            transform="translate(237.99999999999997, 70)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Harper 1' Driving Finger Roll Layup (6 PTS) Q2 - 07:27</title>
          <path
            transform="translate(257, 63)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 25' 3PT Running Jump Shot Q2 - 07:05</title>
          <path
            transform="translate(60, 218.99999999999997)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 4' Running Finger Roll Layup Q2 - 06:09</title>
          <path
            transform="translate(233, 83)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 29' 3PT Jump Shot Q2 - 05:45</title>
          <path
            transform="translate(76.00000000000001, 283)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 27' 3PT Jump Shot Q2 - 05:38</title>
          <path
            transform="translate(342, 302)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Castle 2' Driving Floating Bank Jump Shot (14 PTS) Q2 - 04:39
          </title>
          <path
            transform="translate(259, 67)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Castle 16' Step Back Jump Shot (16 PTS) Q2 - 04:17</title>
          <path
            transform="translate(278, 205)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 3PT Jump Shot Q2 - 03:54</title>
          <path
            transform="translate(475, 39)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 18' Step Back Jump Shot Q2 - 03:30</title>
          <path
            transform="translate(376, 172.99999999999997)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 2' Running Layup Q2 - 01:46</title>
          <path
            transform="translate(234, 68)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 27' 3PT Jump Shot Q2 - 01:21</title>
          <path
            transform="translate(228, 315)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Barnes 24' 3PT Jump Shot Q2 - 00:50</title>
          <path
            transform="translate(486.99999999999994, 28)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 16' Pullup Jump Shot Q2 - 00:15</title>
          <path
            transform="translate(333, 182)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wembanyama 12' Turnaround Fadeaway (9 PTS) (Castle 2 AST) Q3 - 11:21
          </title>
          <path
            transform="translate(194.00000000000003, 156)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Harper 1' Driving Layup (10 PTS) Q3 - 10:51</title>
          <path
            transform="translate(237, 54.00000000000001)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 26' 3PT Jump Shot Q3 - 10:05</title>
          <path
            transform="translate(374, 279)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Wembanyama 25' 3PT Pullup Jump Shot (12 PTS) Q3 - 09:57</title>
          <path
            transform="translate(104.00000000000001, 250)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Vassell 3PT Jump Shot (8 PTS) (Wembanyama 3 AST) Q3 - 09:12
          </title>
          <path
            transform="translate(21.999999999999993, 48.99999999999999)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Harper Driving Finger Roll Layup (12 PTS) Q3 - 08:42</title>
          <path
            transform="translate(248, 51.00000000000001)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wembanyama 27' 3PT Pullup Jump Shot (15 PTS) (Castle 3 AST) Q3 -
            08:11
          </title>
          <path
            transform="translate(262, 317)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Vassell 24' 3PT Jump Shot (11 PTS) (Wembanyama 4 AST) Q3 - 07:40
          </title>
          <path
            transform="translate(16.999999999999993, 17.999999999999996)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Wembanyama 6' Driving Floating Jump Shot Q3 - 07:04
          </title>
          <path
            transform="translate(304, 64)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Wembanyama Tip Dunk Shot (17 PTS) Q3 - 07:02</title>
          <path
            transform="translate(250, 50)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 3PT Jump Shot Q3 - 06:30</title>
          <path
            transform="translate(484, 51.00000000000001)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Castle 2' Driving Layup (18 PTS) Q3 - 06:00</title>
          <path
            transform="translate(266, 43.99999999999999)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Harper 3' Driving Layup Q3 - 05:25</title>
          <path
            transform="translate(218, 61)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 26' 3PT Step Back Jump Shot Q3 - 04:28</title>
          <path
            transform="translate(163, 290)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson 1' Driving Layup Q3 - 04:08</title>
          <path
            transform="translate(257, 48)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson 1' Putback Layup Q3 - 04:06</title>
          <path
            transform="translate(241, 46.00000000000001)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Johnson Tip Layup Shot (5 PTS) Q3 - 04:05</title>
          <path
            transform="translate(250, 50)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Vassell 14' Pullup Jump Shot (13 PTS) Q3 - 03:39</title>
          <path
            transform="translate(281, 188)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            McLaughlin 24' 3PT Jump Shot (6 PTS) (Wembanyama 5 AST) Q3 - 02:08
          </title>
          <path
            transform="translate(480, 125)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Champagnie 3' Driving Floating Jump Shot (7 PTS) (Vassell 1 AST) Q3
            - 01:33
          </title>
          <path
            transform="translate(278, 58)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Vassell 28' 3PT Running Jump Shot (16 PTS) (McLaughlin 1 AST) Q3 -
            00:55
          </title>
          <path
            transform="translate(357, 311)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS McLaughlin 23' Pullup Jump Shot Q3 - 00:00</title>
          <path
            transform="translate(145, 249.00000000000003)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Castle 1' Reverse Layup (20 PTS) (Wembanyama 6 AST) Q4 - 11:44
          </title>
          <path
            transform="translate(237, 48)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 3PT Jump Shot Q4 - 11:19</title>
          <path
            transform="translate(21.999999999999993, 105)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Castle 2' Driving Layup (22 PTS) Q4 - 10:38</title>
          <path
            transform="translate(268, 45)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 3' Driving Layup Q4 - 09:36</title>
          <path
            transform="translate(276, 35)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Wembanyama Tip Layup Shot (19 PTS) Q4 - 09:34</title>
          <path
            transform="translate(250, 50)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>Barnes 3PT Jump Shot (5 PTS) (Castle 4 AST) Q4 - 09:06</title>
          <path
            transform="translate(21.999999999999993, 35)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 25' 3PT Jump Shot Q4 - 08:10</title>
          <path
            transform="translate(205, 296)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Johnson 3PT Jump Shot Q4 - 07:43</title>
          <path
            transform="translate(21.999999999999993, 23.000000000000004)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Wembanyama 27' 3PT Jump Shot Q4 - 06:39</title>
          <path
            transform="translate(306, 314)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Vassell 25' 3PT Jump Shot (19 PTS) (Castle 5 AST) Q4 - 06:30
          </title>
          <path
            transform="translate(479, 151)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Castle 26' 3PT Running Jump Shot (25 PTS) (Johnson 1 AST) Q4 - 06:12
          </title>
          <path
            transform="translate(466, 203)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 27' 3PT Pullup Jump Shot Q4 - 05:17</title>
          <path
            transform="translate(379, 289)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>Johnson Putback Layup (7 PTS) Q4 - 05:14</title>
          <path
            transform="translate(248, 46.00000000000001)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 26' 3PT Jump Bank Shot Q4 - 04:40</title>
          <path
            transform="translate(145, 289)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Johnson 3PT Jump Shot (10 PTS) (Castle 6 AST) Q4 - 03:45
          </title>
          <path
            transform="translate(21.999999999999993, 9.000000000000004)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Champagnie 3PT Jump Shot Q4 - 03:06</title>
          <path
            transform="translate(20, 17)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            MISS Wembanyama 14' Running Pull-Up Jump Shot Q4 - 02:31
          </title>
          <path
            transform="translate(341, 150)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Vassell 26' 3PT Pullup Jump Shot (22 PTS) (Castle 7 AST) Q4 - 01:56
          </title>
          <path
            transform="translate(78.00000000000001, 239)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>
            Wembanyama 1' Driving Layup (21 PTS) (Castle 8 AST) Q4 - 01:25
          </title>
          <path
            transform="translate(245, 55)"
            d="M -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--make)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 3PT Jump Shot Q4 - 01:06</title>
          <path
            transform="translate(23.000000000000007, 33)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Castle 3PT Jump Shot Q4 - 00:32</title>
          <path
            transform="translate(478, 97.99999999999999)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
        <g className="shot">
          <title>MISS Vassell 27' 3PT Jump Shot Q4 - 00:16</title>
          <path
            transform="translate(430, 247.00000000000003)"
            d="M -5,-5 L 5,5 M 5,-5 L -5,5"
            fill="rgba(255,255,255, 0.1)"
            stroke="var(--miss)"
          ></path>
        </g>
      </g>
    </svg>
  );
}
