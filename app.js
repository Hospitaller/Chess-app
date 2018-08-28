function init() { // Инициализирует поле с игрой
    //Обертка для числовых полей
    $(".wraperChess").css(paramWraper);

    //верхняя строка букв
    var sideUp = "<div class='sideUp'>HGFEDCBA</div>";
    $(".wraperChess").append(sideUp);
    $(".sideUp").css(paramSideUp);

    //левая сторона чисел
    var sideLeft = "<div class='sideLeft'>8<br>7<br>6<br>5<br>4<br>3<br>2<br>1</div>";
    $(".wraperChess").append(sideLeft);
    $(".sideLeft").css(paramSideL);

    //доска
    var chessBoard = "<div class='chessBoard'></div>";
    $(".wraperChess").append(chessBoard);
    $(".chessBoard").css(paramBoard);

    //правая сторона чисел
    var sideRight = "<div class='sideRight'>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8</div>";
    $(".wraperChess").append(sideRight);
    $(".sideRight").css(paramSideR);

    //нижняя строка букв
    var sideBottom = "<div class='sideBottom'>ABCDEFGH</div>";
    $(".wraperChess").append(sideBottom);
    $(".sideBottom").css(paramSideBottom);
}

function drawWhite() { //Рисует белые поля
    var elem = "<div class = 'chessElemWhite cell'></div> "
    $(".chessBoard").append(elem);
    $(".chessElemWhite").css(paramDrawWhite);
    $(".cell").attr('id', function (index) { //Генерирует id для ячеек
        return (index + 1);
    });
}

function drawBlack() { //Рисует черные поля
    var elem = "<div class = 'chessElemBlack cell'></div> "
    $(".chessBoard").append(elem);
    $(".chessElemBlack").css(paramDrawBlack);
}

function getFigure() { //Расставляет фигуры на готовое игровое поле
    //черные
    $("#1").html("&#9820"); //ладья
    $("#2").html("&#9822"); //конь
    $("#3").html("&#9821"); //слон
    $("#4").html("&#9819"); //ферзь
    $("#5").html("&#9818"); //король
    $("#6").html("&#9821"); //слон
    $("#7").html("&#9822"); //конь
    $("#8").html("&#9820"); //ладья
    /////
    $("#9").html("&#9823"); //пешка
    $("#10").html("&#9823");
    $("#11").html("&#9823");
    $("#12").html("&#9823");
    $("#13").html("&#9823");
    $("#14").html("&#9823");
    $("#15").html("&#9823");
    $("#16").html("&#9823");
    //белые
    $("#49").html("&#9817"); //пешка
    $("#50").html("&#9817");
    $("#51").html("&#9817");
    $("#52").html("&#9817");
    $("#53").html("&#9817");
    $("#54").html("&#9817");
    $("#55").html("&#9817");
    $("#56").html("&#9817");
    ///
    $("#57").html("&#9820"); //ладья
    $("#58").html("&#9822"); //конь
    $("#59").html("&#9821"); //слон
    $("#60").html("&#9819"); //ферзь
    $("#61").html("&#9818"); //король
    $("#62").html("&#9821"); //слон
    $("#63").html("&#9822"); //конь
    $("#64").html("&#9820"); //ладья
    ///
    $(".cell").css(paramFigure);
}



init();

//Циклы генерируют и собирают поля черный/белый
for (var j = 0; j < 8; j++) {

    if (j % 2 == 0) {

        for (var i = 0; i < 8; i++) {

            if (i % 2 == 0) {
                drawWhite();
            } else {
                drawBlack();
            }
        }
    } else {
        for (var i = 0; i < 8; i++) {

            if (i % 2 == 0) {
                drawBlack();
            } else {
                drawWhite();
            }
        }
    }
}

getFigure();