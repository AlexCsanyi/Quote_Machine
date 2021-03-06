function randomQuote() {
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(quoteData) {
      if (quoteData.quoteAuthor === "") {
        quoteData.quoteAuthor = "Unknown";
      }

      $("#text").html(
        '<i class="fa fa-quote-left"></i>    ' +
          quoteData.quoteText +
          '<i class="fa fa-quote-right"></i>'
      );
      $("#target").html(
        '<p id="author" class="text-right"> ‐' + quoteData.quoteAuthor + "</p>"
      );
    }
  });
}

$(function() {
  randomQuote();
});

$("#new-quote").click(function() {
  randomQuote();
});
