var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/9/97/BarbieEscola.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/7/70/Barbie_as_the_Princess_and_the_Pauper_poster.jpg/250px-Barbie_as_the_Princess_and_the_Pauper_poster.jpg", "https://i.pinimg.com/550x/d9/ee/de/d9eede5be6963701f136bc622f1f2b96.jpg"];

listaFilmes.push('https://media.fstatic.com/Ckc72PAdOjYKUY-x5w2g_Py7Bbc=/210x312/smart/filters:format(webp)/media/movies/covers/2009/09/9a188a78d64d4e33dca5ce8795d2cfa4.jpg','https://upload.wikimedia.org/wikipedia/pt/d/d7/Barbie_Rapunzel.jpg', 'https://br.web.img3.acsta.net/pictures/22/04/01/21/03/4875810.jpg', 'https://s2.glbimg.com/9L0bRRwh03yb_O7MlMB3Q4Z9GMc=/362x536/https://s2.glbimg.com/CMIeUP4xKs7nfIzK0x0mU2DHndY=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2021/5/7/xkxc8HRVyqRmzvzF0gjg/2021-2207-barbie-lago-dos-cisnes-poster.jpg', 'https://http2.mlstatic.com/D_NQ_NP_380425-MLM25418147412_032017-O.jpg','https://m.media-amazon.com/images/I/71saOI89WrL._AC_SY550_.jpg','https://s2.glbimg.com/3CGhQEENFoFHCpF689UMGAkz7XA=/362x536/https://s2.glbimg.com/zMMZsNiy-RDfyNYkzPh8Dw6wp4c=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2021/j/D/rjq4dYSFCAYX8WAQwXUA/2021-2179-barbie-fairytopia-magic-rainbow-poster.jpg','https://filmestipo.com/img_pt/movie/thumb/0a/17276.jpg', 'https://assetsgn.nowonline.com.br/assets/p8880172_v_v12_ai.jpg','https://i.postimg.cc/MK08kd3P/Barbie-as-the-Island-Princess.png','https://i.postimg.cc/SsWX3jjY/20230209-113932.jpg','https://i.postimg.cc/gknnvMdT/images-60.jpg','https://br.web.img3.acsta.net/pictures/21/11/23/17/29/5113720.jpg')

var nomeFilmes = ['Barbie: Escola de Princesas', 'Barbie em a Princesa e a Plebéia', 'Barbie e o castelo de diamantes', 'Barbie e as Três Mosqueteiras', 'Barbie como Rapunzel', 'Barbie em as 12 Princesas Bailarinas', 'Barbie: Lago dos Cisnes', 'Barbie e a Magia de Aladus','Diário da Barbie','Barbie e a Magia do Arco-Íris','Barbie em A Canção de Natal', 'Barbie: Um Natal Perfeito','Barbie em A Princesa da Ilha','Barbie em Vida de Sereia','Barbie: A Princesa e a Pop Star','Barbie Butterfly e a Princesa Fairy']

var listaLinkFilme = ["https://drive.google.com/file/d/1-vseASC0sYBKk4MI5qM6H4YqSyooYSDi/view?usp=drivesdk", "https://drive.google.com/file/d/1-cFep_X_Sc2eF1g__KLWKEFy3G5t4lHz/view?usp=drivesdk", "https://drive.google.com/file/d/1ZwtgNs5wnMFfhFZij0JRDC-gkIbuFpcG/view?usp=drivesdk", "https://drive.google.com/file/d/12KOR8PuFpvLeYTx71fIHB4MozFeVixHH/view?usp=drivesdk", "https://drive.google.com/file/d/15lYhN_jTurhqWQewYgG_vskYeGfIj0oM/view?usp=drivesdk", "https://drive.google.com/file/d/1-0wz2PQXHHukISA9MMNGhoinffvcOZOi/view?usp=drivesdk", "https://drive.google.com/file/d/17FsAQTZvau3dOmvQsE2cwnpqwdd2EffF/view?usp=drivesdk", "https://drive.google.com/file/d/122J19ZFSSMv7IMcJf50dEESX1-v9bEHs/view?usp=drivesdk", "https://drive.google.com/file/d/1-knNiyvCdU5ZNCy5ACigBGVKS7lwHc7u/view?usp=drivesdk","https://drive.google.com/file/d/1aaO0kzWGKw2ksjpY_bRRuaz-BF0wAzhc/view?usp=drivesdk", "https://drive.google.com/file/d/120uqmVDIyy6mtWSnzawhIXeIXXORT6MQ/view?usp=drivesdk","https://drive.google.com/file/d/1011RGyMFCpxNMEZ6v_tpV1XapVFvku3o/view?usp=drivesdk"]

listaLinkFilme.push('https://drive.google.com/file/d/1ndQzr3wBXdg7H9OwgudlVQ-LQlNtsimr/view?usp=drivesdk','https://drive.google.com/file/d/12JtfbIiHxT3yusEz0fBCYSrZ5QR0derc/view?usp=drivesdk','https://drive.google.com/file/d/1iDEButKIdcbVFWsG3PbU593zgB7MiXZ4/view?usp=drivesdk','https://drive.google.com/file/d/1-7FiehfBugVnllSujKrXEN11CdkIne8I/view?usp=drivesdk')

document.write('<div class="container_todosFilmes">')

var i = 0;
while (i < listaFilmes.length) {

  if ((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg')) || (listaFilmes[i].endsWith('png')))  {
    document.write('<div class="container_filme">')
    document.write(`<a href=${listaLinkFilme[i]}>`);
    document.write('<img src=' + listaFilmes[i] + '>');
    document.write('<p>' + nomeFilmes[i] + '</p>');
    document.write('</a>');
    
    document.write('</div>');

  } else {
    document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
  }
  i++;

   }
document.write('</div>')

