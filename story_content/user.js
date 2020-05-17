function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Bn8FmpnOvu":
        Script1();
        break;
      case "6ON9bmpCtHW":
        Script2();
        break;
      case "6gg4XAqOh1A":
        Script3();
        break;
      case "6LYhm4aRhbv":
        Script4();
        break;
      case "5YAcfqRxB3M":
        Script5();
        break;
      case "5nSYkd2mM2b":
        Script6();
        break;
      case "5hwRJD0Pyqy":
        Script7();
        break;
      case "5bVo8tBSBIu":
        Script8();
        break;
      case "6MXVEm6kdZt":
        Script9();
        break;
      case "66RKqHd2MUh":
        Script10();
        break;
      case "5d66umJzZeU":
        Script11();
        break;
      case "6o8Y1OudDji":
        Script12();
        break;
      case "61WWik3SyvN":
        Script13();
        break;
      case "5gyl90SMwB6":
        Script14();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script13()
{
  $("#tab-customlink").show();
}

function Script14()
{
  window.print();
}

