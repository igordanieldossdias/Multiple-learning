function revisar(){
    alert("redirecionando para o quiz");
    window.location.href = "https://wordwall.net/pt/embed/7060c422887d46d6b5f0257315f4579a?themeId=1&templateId=5&fontStackId=0%22"

    $('.nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
          
        $('html, body').animate({ 
          scrollTop: targetOffset - 100
        }, 500);
      });
      
}

