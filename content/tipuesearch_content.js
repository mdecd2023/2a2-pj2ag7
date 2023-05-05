var tipuesearch = {"pages": [{'title': 'About', 'text': 'pj2第七組 \n 組長：洪偉陞 41023146 \n 組員：施建菖 41023143 紀閔翔 41023147 夏進源 41023148 \n 網頁: https://mdecd2023.github.io/2a2-pj2ag7/content/index.html \xa0 \n 倉儲: https://github.com/mdecd2023/2a2-pj2ag7 \xa0 \n cdtemplate \n https://mde.tw/pjcopsim \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'w9', 'text': '1.zmq四人連線( zmq_bubbleRob.7z ) \n \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': "有關 CoppeliaSim zmqRemoteAPI 問題 \n \n 1.What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n ans: zmqRemoteAPI 是一個高效能的通訊介面，可以使用程式語言如 Python、C++ 和 Lua 遠端控制 CoppeliaSim 模擬。它基於 ZeroMQ，是一種輕量級且低延遲的消息傳遞庫。zmqRemoteAPI 提供了一種靈活且高效的方式，在遠端客戶端和 CoppeliaSim 實例之間交換資料和指令。 \n 2.How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI? \n ans: 要使用 zmqRemoteAPI 在 Python 腳本和 CoppeliaSim 之間建立連接，首先需要在 CoppeliaSim 中啟用遠端 API 伺服器，通過勾選仿真選單中的 Remote API 選項。然後，在 Python 腳本中，您可以使用 PyZMQ 函式庫創建一個 socket，並使用 CoppeliaSim 執行的電腦的 IP 地址和端口號連接到遠端 API 伺服器。一旦建立了連接，您就可以使用遠端 API 函數與模擬進行交互。 \n 3.What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n ans: zmqRemoteAPI是一種用於在CoppeliaSim和其他程序之間傳輸數據的協議。它可以用於遠程控制場景、傳輸數據、腳本自動化和多機器人協調等方面。它提供了一個靈活且易於使用的界面，用於與CoppeliaSim的場景交互。 \n 4.What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n ans: 相較於其他 Python 和 CoppeliaSim 之間通訊方法，使用 zmqRemoteAPI 的優點包括高性能、低延遲和靈活性。zmqRemoteAPI 允許客戶端和模擬之間進行高效實時的通訊，並支援多種程式語言。然而，使用 zmqRemoteAPI 需要一定的網路程式設計知識，可能不像其他通訊方法（例如 ROS）那麼簡單易用。\n 5.Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? \n ans: \n from zmqRemoteApi import RemoteAPIClient\nimport keyboard\n\nclient = RemoteAPIClient('localhost', 23000)\n\nprint('Program started')\nsim = client.getObject('sim')\n\n# Define the size and position of the cuboid\nsize = [1, 1, 1]\nposition = [0, 0, 0.5]\n\n# Create the cuboid\ncuboid = sim.createPureShape(0, 8, size, 1, None)\nsim.setObjectPosition(cuboid, -1, position) \n 這個程式可以在coppeliasim環境中生成一個邊長為1的正方形，localhost要換成要操控的計算機的ip位址，若要操控本地則不用改，用localhost就好。 \n", 'tags': '', 'url': 'w10.html'}, {'title': 'jitsi', 'text': 'jitsi使用說明: \n Jitsi 是一個開源的視訊會議軟體，可用於視訊會議、網路電話、即時通訊等功能。它支援多種平台，包括Windows、Linux、MacOS等，也提供了各種客戶端應用程式和瀏覽器插件，方便用戶在不同的設備上使用。 Jitsi 最大的優點是可自建私有伺服器，因此可以保證通訊的安全性和私密性。此外，Jitsi 還提供了加密通訊和自我主持的選項，進一步保護用戶隱私和數據安全。 Jitsi 界面簡潔易用，支援多種語言，可以設定多種設定，例如畫質、音質、是否開啟麥克風和攝像頭等，適合不同用戶的需求。 \n', 'tags': '', 'url': 'jitsi.html'}, {'title': 'pj1', 'text': '', 'tags': '', 'url': 'pj1.html'}, {'title': 'ag2', 'text': '2a-pj1ag2組員:41023146洪偉陞、41023148夏進源 \n pj1倉儲: https://github.com/mdecd2023/2a-pj1ag2 \n pj1網頁: https://mdecd2023.github.io/2a-pj1ag2/content/index.html \n bubbleRob足球遊戲 \n 1.先繪製球框( ball frame.7z ) \n \n 2.使用鍵盤控制 bubbleRob \n \n function sysCall_init()  \n    right_wheel= sim.getObjectHandle(\'joint1\') \n    left_wheel= sim.getObjectHandle(\'joint2\') \n    right_velocity=0 \n    left_velocity=0\n    speed=5\n    sim.setJointTargetVelocity(right_wheel,0)\n    sim.setJointTargetVelocity(left_wheel,0)\n \nend\n  \nfunction sysCall_actuation()  \n    message,auxiliaryData=sim.getSimulatorMessage() \n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            \n            if (auxiliaryData[1]==32) then\n\n                right_velocity=0 \n                left_velocity=0 \n                sim.setJointMaxForce(right_wheel, 0) \n                sim.setJointMaxForce(left_wheel, 0) \n                break\n            else\n                sim.setJointMaxForce(right_wheel, 10) \n                sim.setJointMaxForce(left_wheel, 10)\n            \n            \n                if (auxiliaryData[1]==2007) then -- up key\n                    \n                    sim.setJointTargetVelocity(right_wheel,speed)\n                    sim.setJointTargetVelocity(left_wheel,speed)\n                end\n                if (auxiliaryData[1]==2008) then -- down key\n                    \n                    sim.setJointTargetVelocity(right_wheel,-speed/2)\n                    sim.setJointTargetVelocity(left_wheel,-speed/2)\n                    \n                end\n                if (auxiliaryData[1]==2009) then -- left key\n                    sim.setJointTargetVelocity(right_wheel,speed)\n                    sim.setJointTargetVelocity(left_wheel,speed/2)\n                   \n                end\n                if (auxiliaryData[1]==2010) then -- right key\n                    sim.setJointTargetVelocity(right_wheel,speed/2)\n                    sim.setJointTargetVelocity(left_wheel,speed)\n                    \n                end\n\n            end\n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\nend \n \n 3.加入球框感測器和記分板( newbubbleRob.ttt ) \n \n 感測器lua腳本 \n function sysCall_init()\n    score1 = 0\n    \n    sensor = sim.getObject(\'./sensor\')\n    xml = [[\n        <ui title="Scoreboard" closeable="false" resizable="false" style="plastique">\n        <label text="Score:" style="* {background-color: #808080; color: #000000; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px; }" id="10"/>\n        <label text="0" style="* {background-color: #FFF; color: #000000; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px;}" id="30"/>\n     \n        </ui>\n    ]]\n    ui = simUI.create(xml)\n    simUI.setPosition(ui, 0,0, true)\n    bubbleRob = sim.getObject(\'/bubbleRob\')\n    ball = sim.getObject(\'/ball\')\n    bubbleRob2 = sim.getObject(\'/bubbleRob2\')\n    initialPosition = sim.getObjectPosition(bubbleRob, -1)\n    initialOrientation = sim.getObjectOrientation(bubbleRob, -1)\n    initialPosition2 = sim.getObjectPosition(bubbleRob2, -1)\n    initialOrientation2 = sim.getObjectOrientation(bubbleRob2, -1)\n    initialballPosition = sim.getObjectPosition(ball, -1)\n    initialballOrientation = sim.getObjectOrientation(ball, -1)\n\nend\n\n\nfunction sysCall_actuation()\n    --simUI.setLabelText(ui, 30, tostring(sim.getFloatSignal("myVariable")))\n    result=sim.readProximitySensor(sensor)\n    if(score1<5)then\n        if(result>0)then\n            score2 = score1+1\n            simUI.setLabelText(ui, 30, tostring(score2))\n\n            sim.setObjectPosition(bubbleRob, -1, initialPosition)\n            sim.setObjectOrientation(bubbleRob, -1, initialOrientation)\n            sim.setObjectPosition(bubbleRob2, -1, initialPosition2)\n            sim.setObjectOrientation(bubbleRob2, -1, initialOrientation2)\n            sim.setObjectPosition(ball, -1, initialballPosition)\n            sim.setObjectOrientation(ball, -1, initialballOrientation)\n            score1=score2\n        end\n    else\n        sim.pauseSimulation()\n    end\nend \n \n 4.改成用遠端api操控bubbleRob前後左右移動( bubbleRob.7z ) \n \n <<<<<<< HEAD \n 5.RemoteAPI操控 \n', 'tags': '', 'url': 'ag2.html'}, {'title': 'pj2', 'text': '1.製作實體記分板 \n \n 記分板檔案 \n \n 2.記分板程式( scoreboard ) \n \n 3.用python生成球並開啟Detectable \n size = [0.2, 0.2, 0.2]\nposition = [0, 0, 0.5]\noptions = 8\nball = sim.createPureShape(1, options, size, 1, None)\nsim.setObjectPosition(ball, -1, position)\nball = sim.getObject(\'/Sphere\')\nsim.setObjectSpecialProperty(ball, sim.objectspecialproperty_detectable)\n \n \n 4.第一版實體記分板足球遊戲( pj2ag7_zmq_bubbleRob.7z ) \n \xa0 \xa0 1.目前的足球遊戲的球還是採用回到中心的方法 \n \xa0 \xa0 2.球員則改成不會回到原來的地方(如果球員在中心得分會被回到中心的球撞飛) \n 5.第二版足球遊戲(足球隨機生成)( pj2ag7_zmq_bubbleRob2.7z ) \n \xa0 \xa0 1.將上一坂的球改成進球刪除並隨機生成(場景中原還沒有球，由zmq_bubbleRob程式生成) \n \xa0 \xa0 2.球員依然有可能被撞飛，如果球剛好隨機到球員的位置 \n \xa0 \xa0 3.球員1(zmq_bubbleRob1)必須要先執行，因為只需要一顆球不用生成兩次，但球不先生成程式取不到東西也就是\xa0sim.getObject(\'/Sphere\')但沒有物件叫做Sphere就會出錯 \n \xa0 \xa0 4.因為我是zmq加coppeliasim lua的寫法，若是像上一版本一樣計分板跟球的程式都用lua寫，就沒有問題，但這個版本我將球的控制用 zmq，所以我在刪除球時發現zmq有一點延遲，就是記分板已經得了五六分了球才刪除，所以我在lua中加入 \n sim.setObjectSpecialProperty(ball, sim.modelproperty_not_detectable) \n 在得分後將可偵測關掉，然後再刪除重新生成球，這樣就只會得一分，而且可以決定在球框裡再刪除，這樣就會有進球的感覺，不會像之前一樣碰到感測器就消失 \n 6.修改第五點第三項之問題，利以下程式判斷Sphere是否存在，若不存在則exist值為 1 \n try:\n\xa0 \xa0 Sphere= sim.getObject(\'/Sphere\')\nexcept Exception as e:\n\xa0 \xa0 print("Failed to get object: ", e)\n\xa0 \xa0 exist=1 \n \n 因此可用if迴圈來判定是否生成物件Sphere，如下: \n size = [0.2, 0.2, 0.2]\nposition = [0, 0, 0.5]\noptions = 8\nexist=0\ntry:\n    Sphere= sim.getObject(\'/Sphere\')\nexcept Exception as e:\n    print("Failed to get object: ", e)\n    exist=1\nif exist==1:\t\n\tball = sim.createPureShape(1, options, size, 1, None)\n\tsim.setObjectPosition(ball, -1, position)\n\tball = sim.getObject(\'/Sphere\')\n\tsim.setObjectSpecialProperty(ball, sim.objectspecialproperty_detectable) \n \n \n \xa0 \n \n \xa0 \xa0\xa0 \n', 'tags': '', 'url': 'pj2.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n STL part viewer \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n', 'tags': '', 'url': 'Brython_ex2.html'}]};