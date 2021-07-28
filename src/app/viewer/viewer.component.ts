import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from './session.service';
import * as THREE from 'three';

import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';

import Stats from 'three/examples/jsm/libs/stats.module.js';

import CameraControls from 'camera-controls';
CameraControls.install({ THREE: THREE });

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  public id;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private sess: SessionService
  ) {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    sess.getData(this.id).subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnInit() {
    // Find the latest version by visiting https://unpkg.com/three.
    let camera, scene, renderer, actor, sessao, floor, cameraControls, clock;

    let stats;
    let gui;

    let frameConfig;
    let framePointsCount;
    let currentPoints = [];
    let play = true;
    let paused = false;
    let fps = 1;
    let factor = 100;
    let currentFrame = 0;
    let maxFrames;
    //Frames
    var frame, data;
    data = {
      frameConfig: {
        x: 640,
        y: 480,
        z: 5,
        bedW: 120,
        bedD: 200,
        bedH: 50,
        camY: -300,
        camRX: -36,
        minP: 0,
        mode: '3d',
        framePointsCount: 18,
        maxMovement: 5
      },
      actores: [
        [
          [-0.7451618313789368, -0.2734871208667755, 2.625, 0.79920286],
          [
            -0.7214025855064392,
            -0.29989492893218994,
            2.6070001125335693,
            0.75817114
          ],
          [
            -0.7661328315734863,
            -0.3014456331729889,
            2.5840001106262207,
            0.7414771
          ],
          [
            -0.6944602131843567,
            -0.32328033447265625,
            2.61299991607666,
            0.6112514
          ],
          [
            -0.8248305916786194,
            -0.3093123435974121,
            2.61299991607666,
            0.55100685
          ],
          [
            -0.6332476139068604,
            -0.23663222789764404,
            2.8289999961853027,
            0.9828153
          ],
          [
            -0.9432501196861267,
            -0.19570082426071167,
            2.8570001125335693,
            0.9305328
          ],
          [
            -0.4462316334247589,
            -0.17072787880897522,
            2.8499999046325684,
            0.97795343
          ],
          [
            -0.9942319393157959,
            -0.030445313081145287,
            3.01200008392334,
            0.7400822
          ],
          [
            -0.2876153588294983,
            -0.050045792013406754,
            2.7750000953674316,
            0.9276742
          ],
          [
            -0.9117469191551208,
            -0.04813171550631523,
            2.944000005722046,
            0.5409222
          ],
          [
            -0.6328862309455872,
            0.2165279984474182,
            3.059999942779541,
            0.95203125
          ],
          [
            -0.8263293504714966,
            0.2519097328186035,
            3.125999927520752,
            0.9719331
          ],
          [
            -0.6747876405715942,
            0.4990856945514679,
            3.239000082015991,
            0.72203296
          ],
          [
            -0.8048393130302429,
            0.5307835340499878,
            3.312999963760376,
            0.7035256
          ],
          [
            -0.7432705760002136,
            0.8777228593826294,
            3.690999984741211,
            0.56412387
          ],
          [
            -0.7407260537147522,
            0.8742254972457886,
            3.703000068664551,
            0.5114131
          ],
          [-0.7497298717498779, -0.30627644062042236, 2.5950000286102295],

          [
            -0.7342780232429504,
            -0.25843214988708496,
            2.61299991607666,
            0.7135487
          ],
          [
            -0.7170737385749817,
            -0.28988131880760193,
            2.6070001125335693,
            0.5692422
          ],
          [
            -0.7615067362785339,
            -0.29205137491226196,
            2.578000068664551,
            0.53830695
          ],
          [
            -0.7015312314033508,
            -0.3173380494117737,
            2.61299991607666,
            0.44077823
          ],
          [
            -0.8234134316444397,
            -0.3030209243297577,
            2.6010000705718994,
            0.589309
          ],
          [
            -0.637179434299469,
            -0.22336561977863312,
            2.808000087738037,
            0.9807519
          ],
          [
            -0.9482017755508423,
            -0.17148715257644653,
            2.8359999656677246,
            0.9039582
          ],
          [
            -0.45659586787223816,
            -0.15155480802059174,
            2.822000026702881,
            0.98017603
          ],
          [
            -1.044569492340088,
            0.020398344844579697,
            3.068000078201294,
            0.75093824
          ],
          [
            -0.3072485327720642,
            -0.04018696770071983,
            2.7820000648498535,
            0.9212636
          ],
          [
            -0.9276692271232605,
            0.012398181483149529,
            2.996999979019165,
            0.6230976
          ],
          [
            -0.6472569704055786,
            0.221273273229599,
            3.059999942779541,
            0.95327884
          ],
          [
            -0.8047406673431396,
            0.24608004093170166,
            3.068000078201294,
            0.96794623
          ],
          [
            -0.6844540238380432,
            0.5985596179962158,
            3.239000082015991,
            0.5119949
          ],
          [
            -0.7602332830429077,
            0.6096081733703613,
            3.2939999103546143,
            0.42848608
          ],
          [
            -0.7334478497505188,
            0.8776589035987854,
            3.6559998989105225,
            0.47518107
          ],
          [
            -0.7344419360160828,
            0.877987802028656,
            3.6679999828338623,
            0.47972655
          ],
          [-0.744818389415741, -0.29079678654670715, 2.578000068664551],

          [
            -0.7374890446662903,
            -0.22849179804325104,
            2.6070001125335693,
            0.89278454
          ],
          [
            -0.7185604572296143,
            -0.26127955317497253,
            2.6070001125335693,
            0.7479338
          ],
          [
            -0.7696230411529541,
            -0.25587207078933716,
            2.572000026702881,
            0.8118735
          ],
          [-0.6998246312141418, -0.29512032866477966, 2.625, 0.4621948],
          [
            -0.8557076454162598,
            -0.2836565673351288,
            2.6480000019073486,
            0.7262345
          ],
          [
            -0.6444990038871765,
            -0.2045104056596756,
            2.802000045776367,
            0.9882316
          ],
          [
            -0.9676863551139832,
            -0.1459810435771942,
            2.8499999046325684,
            0.9440557
          ],
          [
            -0.45146530866622925,
            -0.13924473524093628,
            2.808000087738037,
            0.9855457
          ],
          [
            -1.0115479230880737,
            -0.0029942886903882027,
            2.989000082015991,
            0.77621496
          ],
          [
            -0.30119532346725464,
            -0.027590127661824226,
            2.76200008392334,
            0.9095003
          ],
          [
            -0.9406030178070068,
            -0.013575393706560135,
            2.9579999446868896,
            0.58067924
          ],
          [
            -0.6422368884086609,
            0.2687605619430542,
            3.0439999103546143,
            0.94044137
          ],
          [
            -0.807030439376831,
            0.2869732081890106,
            3.0840001106262207,
            0.98240983
          ],
          [
            -0.6766688227653503,
            0.547383189201355,
            3.2300000190734863,
            0.50935787
          ],
          [
            -0.7596497535705566,
            0.7233838438987732,
            3.440000057220459,
            0.23163311
          ],
          [
            -0.7227311730384827,
            0.875818133354187,
            3.621999979019165,
            0.2702678
          ],
          [
            -0.7317596673965454,
            0.8755996227264404,
            3.632999897003174,
            0.2824307
          ],
          [-0.746599018573761, -0.2621104419231415, 2.561000108718872],

          [
            -0.7588313817977905,
            -0.21468600630760193,
            2.5840001106262207,
            0.8645321
          ],
          [
            -0.7318246960639954,
            -0.24864913523197174,
            2.572000026702881,
            0.7397009
          ],
          [
            -0.7918667197227478,
            -0.24713104963302612,
            2.572000026702881,
            0.7671781
          ],
          [
            -0.7098363637924194,
            -0.27931779623031616,
            2.6549999713897705,
            0.58589077
          ],
          [
            -0.8472983837127686,
            -0.2613418400287628,
            2.5950000286102295,
            0.55646247
          ],
          [
            -0.6350116729736328,
            -0.1752634197473526,
            2.76200008392334,
            0.98097205
          ],
          [
            -0.969080924987793,
            -0.1280667632818222,
            2.8359999656677246,
            0.8550011
          ],
          [
            -0.4527961015701294,
            -0.12127171456813812,
            2.7950000762939453,
            0.97707725
          ],
          [
            -1.0187275409698486,
            0.04639553278684616,
            2.9809999465942383,
            0.39794722
          ],
          [
            -0.3083420693874359,
            -0.031748101115226746,
            2.7880001068115234,
            0.8757941
          ],
          [
            -0.9945162534713745,
            0.07800259441137314,
            3.01200008392334,
            0.1750212
          ],
          [
            -0.6268094182014465,
            0.30155766010284424,
            3.1089999675750732,
            0.7174751
          ],
          [
            -0.7668889760971069,
            0.32225438952445984,
            3.052000045776367,
            0.9004311
          ],
          [
            -0.6723186373710632,
            0.5306668877601624,
            3.1679999828338623,
            0.08230439
          ],
          [
            -0.4644172489643097,
            0.6556106805801392,
            2.437999963760376,
            0.042237546
          ],
          [
            -0.6844741106033325,
            0.8244044184684753,
            3.4709999561309814,
            0.16492793
          ],
          [
            -0.25235193967819214,
            0.6687352061271667,
            1.4789999723434448,
            0.16607425
          ],
          [-0.7549386024475098, -0.24707496166229248, 2.5439999103546143],

          [
            -0.7606382966041565,
            -0.20326735079288483,
            2.566999912261963,
            0.8581843
          ],
          [
            -0.7310943007469177,
            -0.23199337720870972,
            2.549999952316284,
            0.7499818
          ],
          [
            -0.7887310981750488,
            -0.23350569605827332,
            2.549999952316284,
            0.86244047
          ],
          [
            -0.7067949771881104,
            -0.2623271048069,
            2.6010000705718994,
            0.58362687
          ],
          [
            -0.8602635860443115,
            -0.2511855661869049,
            2.5950000286102295,
            0.7315228
          ],
          [
            -0.6410491466522217,
            -0.17784477770328522,
            2.7820000648498535,
            0.9828241
          ],
          [
            -0.9654016494750977,
            -0.13779470324516296,
            2.7820000648498535,
            0.89962757
          ],
          [
            -0.4397648274898529,
            -0.10926958173513412,
            2.802000045776367,
            0.96693647
          ],
          [
            -1.026383399963379,
            0.01391996443271637,
            2.928999900817871,
            0.554955
          ],
          [
            -0.3119438588619232,
            -0.030742324888706207,
            2.7750000953674316,
            0.87690544
          ],
          [
            -0.95180344581604,
            0.044853340834379196,
            2.936000108718872,
            0.46514225
          ],
          [
            -0.5712133049964905,
            0.4006473124027252,
            3.1679999828338623,
            0.324235
          ],
          [
            -0.7888086438179016,
            0.3095163106918335,
            3.0439999103546143,
            0.79198587
          ],
          [
            -0.2486276477575302,
            0.4362906813621521,
            1.2979999780654907,
            0.0071927328
          ],
          [
            -0.9776377081871033,
            0.19787432253360748,
            2.9809999465942383,
            0.367876
          ],
          [
            -0.2537613809108734,
            0.6594922542572021,
            1.472000002861023,
            0.04546999
          ],
          [
            -0.9550479054450989,
            0.2910194993019104,
            2.878000020980835,
            0.0965677
          ],
          [-0.7550002932548523, -0.2317577600479126, 2.5220000743865967],

          [
            -0.7598820328712463,
            -0.1776389628648758,
            2.5439999103546143,
            0.9292662
          ],
          [
            -0.7291213870048523,
            -0.21138517558574677,
            2.5220000743865967,
            0.85665524
          ],
          [
            -0.7809170484542847,
            -0.20922614634037018,
            2.50600004196167,
            0.91511506
          ],
          [
            -0.7072866559028625,
            -0.24828274548053741,
            2.5329999923706055,
            0.61144024
          ],
          [
            -0.8476582169532776,
            -0.22508276998996735,
            2.5390000343322754,
            0.734756
          ],
          [
            -0.6581739783287048,
            -0.15440477430820465,
            2.7360000610351562,
            0.98875856
          ],
          [
            -0.9803364276885986,
            -0.11839443445205688,
            2.76200008392334,
            0.9636033
          ],
          [
            -0.4353032112121582,
            -0.07148537784814835,
            2.7820000648498535,
            0.95195776
          ],
          [
            -1.0634058713912964,
            0.03771400451660156,
            2.928999900817871,
            0.73634636
          ],
          [
            -0.3188991844654083,
            -0.013063606806099415,
            2.7750000953674316,
            0.8839827
          ],
          [
            -1.0158872604370117,
            0.10388483852148056,
            2.944000005722046,
            0.34497097
          ],
          [
            -0.6543020606040955,
            0.3769771158695221,
            3.059999942779541,
            0.690656
          ],
          [
            -0.8303106427192688,
            0.37545835971832275,
            3.0759999752044678,
            0.8237242
          ],
          [
            -0.258951872587204,
            0.3920402228832245,
            1.277999997138977,
            0.012346912
          ],
          [
            -1.0086414813995361,
            0.18468840420246124,
            2.871000051498413,
            0.4025976
          ],
          [
            -0.2716803550720215,
            0.691874623298645,
            1.503999948501587,
            0.030392267
          ],
          [
            -0.981849730014801,
            0.3338440954685211,
            2.884999990463257,
            0.11052981
          ],
          [-0.753560483455658, -0.21441712975502014, 2.4739999771118164],

          [
            -0.7661290168762207,
            -0.15866594016551971,
            2.50600004196167,
            0.6994929
          ],
          [
            -0.7474480867385864,
            -0.18939174711704254,
            2.490000009536743,
            0.71005136
          ],
          [
            -0.7889233231544495,
            -0.18578505516052246,
            2.4790000915527344,
            0.69503546
          ],
          [-0.7167918086051941, -0.21749338507652283, 2.5, 0.662967],
          [
            -0.8483319282531738,
            -0.19266125559806824,
            2.5169999599456787,
            0.4327142
          ],
          [
            -0.6436635255813599,
            -0.13693515956401825,
            2.7170000076293945,
            0.95314485
          ],
          [
            -0.9833157658576965,
            -0.0889664962887764,
            2.7360000610351562,
            0.798175
          ],
          [
            -0.4520750641822815,
            -0.08450676500797272,
            2.7750000953674316,
            0.8677086
          ],
          [
            -1.0442757606506348,
            0.08251383900642395,
            2.8989999294281006,
            0.4173141
          ],
          [
            -0.3507079780101776,
            -0.021279873326420784,
            2.7950000762939453,
            0.8232967
          ],
          [
            -0.9744111895561218,
            0.14884501695632935,
            2.936000108718872,
            0.26350352
          ],
          [
            -0.6150725483894348,
            0.4030834436416626,
            3.0360000133514404,
            0.43069488
          ],
          [
            -0.8146597743034363,
            0.2829073667526245,
            2.944000005722046,
            0.6749925
          ],
          [
            -0.6749997735023499,
            0.65926593542099,
            3.1589999198913574,
            0.039303783
          ],
          [
            -0.7862780094146729,
            0.4487810730934143,
            3.0840001106262207,
            0.22540852
          ],
          [
            -0.6151911616325378,
            0.8045393228530884,
            3.134000062942505,
            0.17474037
          ],
          [
            -0.6206164956092834,
            0.8000059127807617,
            3.134000062942505,
            0.20000315
          ],
          [-0.7630822062492371, -0.18771934509277344, 2.4630000591278076],

          [
            -0.7511787414550781,
            -0.13799193501472473,
            2.490000009536743,
            0.80809414
          ],
          [
            -0.7357685565948486,
            -0.16271670162677765,
            2.4839999675750732,
            0.66491574
          ],
          [
            -0.7733535170555115,
            -0.16257382929325104,
            2.453000068664551,
            0.8110052
          ],
          [
            -0.7188406586647034,
            -0.19146576523780823,
            2.4839999675750732,
            0.5067745
          ],
          [
            -0.8508516550064087,
            -0.17227697372436523,
            2.4839999675750732,
            0.630598
          ],
          [
            -0.6552770733833313,
            -0.11017856746912003,
            2.690999984741211,
            0.98016065
          ],
          [
            -0.988747239112854,
            -0.06136726960539818,
            2.7039999961853027,
            0.9024163
          ],
          [
            -0.49334216117858887,
            -0.057845279574394226,
            2.749000072479248,
            0.9352064
          ],
          [
            -1.0179221630096436,
            0.08749433606863022,
            2.8289999961853027,
            0.6234401
          ],
          [
            -0.357943058013916,
            -0.0026794716250151396,
            2.8499999046325684,
            0.85612524
          ],
          [
            -0.9050215482711792,
            0.06675910949707031,
            2.7750000953674316,
            0.30937496
          ],
          [
            -0.6606858968734741,
            0.37104201316833496,
            2.9509999752044678,
            0.77136797
          ],
          [
            -0.8447819948196411,
            0.42413800954818726,
            3.068000078201294,
            0.8904818
          ],
          [
            -0.4780973792076111,
            0.6918395757675171,
            2.4170000553131104,
            0.034184676
          ],
          [
            -0.7236037254333496,
            0.7049362659454346,
            3.1679999828338623,
            0.0725307
          ],
          [
            -0.2588518261909485,
            0.9458961486816406,
            2.2190001010894775,
            0.21703257
          ],
          [
            -0.6501555442810059,
            0.8039565682411194,
            3.194000005722046,
            0.09904656
          ],
          [-0.7519287467002869, -0.16594946384429932, 2.427000045776367],

          [
            -0.7505701184272766,
            -0.13051533699035645,
            2.437999963760376,
            0.9319592
          ],
          [
            -0.7332592606544495,
            -0.15812309086322784,
            2.437999963760376,
            0.8515409
          ],
          [
            -0.7815834879875183,
            -0.1585848331451416,
            2.421999931335449,
            0.91942114
          ],
          [
            -0.7164658904075623,
            -0.18660902976989746,
            2.490000009536743,
            0.6403377
          ],
          [
            -0.8585484027862549,
            -0.17096412181854248,
            2.4739999771118164,
            0.73621
          ],
          [
            -0.6466788053512573,
            -0.09229542315006256,
            2.6610000133514404,
            0.98946905
          ],
          [
            -0.9875447750091553,
            -0.05105588957667351,
            2.697999954223633,
            0.96678215
          ],
          [
            -0.4640348255634308,
            -0.03954740986227989,
            2.76200008392334,
            0.95128316
          ],
          [
            -1.0370360612869263,
            0.15522199869155884,
            2.822000026702881,
            0.70668656
          ],
          [
            -0.31138280034065247,
            0.04230765998363495,
            2.7950000762939453,
            0.86379766
          ],
          [
            -0.9738861918449402,
            0.26844292879104614,
            2.8359999656677246,
            0.25066683
          ],
          [
            -0.6587803363800049,
            0.3946291506290436,
            2.9509999752044678,
            0.731243
          ],
          [
            -0.8132604360580444,
            0.4332651197910309,
            3.01200008392334,
            0.8604295
          ],
          [
            -0.7064903378486633,
            0.6019331812858582,
            3.1089999675750732,
            0.07951126
          ],
          [
            -0.7634111642837524,
            0.7960203289985657,
            3.194000005722046,
            0.08811174
          ],
          [
            -0.6672223806381226,
            0.7903773188591003,
            3.1510000228881836,
            0.11961953
          ],
          [
            -0.6463590264320374,
            0.7666863799095154,
            3.1510000228881836,
            0.13649851
          ],
          [-0.7646127939224243, -0.1596074402332306, 2.427000045776367],

          [
            -0.7636391520500183,
            -0.07260526716709137,
            2.447999954223633,
            0.9029825
          ],
          [
            -0.7421194314956665,
            -0.10954613983631134,
            2.421999931335449,
            0.8712139
          ],
          [
            -0.7924528121948242,
            -0.10455440729856491,
            2.421999931335449,
            0.9039908
          ],
          [
            -0.720559298992157,
            -0.1483985334634781,
            2.4790000915527344,
            0.7442216
          ],
          [
            -0.8670721054077148,
            -0.12860602140426636,
            2.4739999771118164,
            0.72358114
          ],
          [
            -0.6387598514556885,
            -0.051327720284461975,
            2.635999917984009,
            0.9905377
          ],
          [
            -0.9978174567222595,
            -0.012447435408830643,
            2.6730000972747803,
            0.9630625
          ],
          [
            -0.47888243198394775,
            -0.0019422016339376569,
            2.697999954223633,
            0.95387626
          ],
          [
            -1.0374068021774292,
            0.19319306313991547,
            2.808000087738037,
            0.77102154
          ],
          [
            -0.31569352746009827,
            0.07760708779096603,
            2.742000102996826,
            0.86348784
          ],
          [
            -0.9623443484306335,
            0.37328603863716125,
            2.7100000381469727,
            0.19253418
          ],
          [
            -0.6708306670188904,
            0.4321531057357788,
            2.9509999752044678,
            0.84937936
          ],
          [
            -0.9064708948135376,
            0.486886203289032,
            3.052000045776367,
            0.9245874
          ],
          [
            -0.7681856155395508,
            0.8434741497039795,
            3.177000045776367,
            0.19330996
          ],
          [
            -0.7372682690620422,
            0.8937336802482605,
            3.184999942779541,
            0.14084855
          ],
          [
            -0.32824432849884033,
            0.4612323045730591,
            1.3459999561309814,
            0.023510154
          ],
          [
            -0.20248198509216309,
            0.6038095355033875,
            1.402999997138977,
            0.18924811
          ],
          [-0.7646017074584961, -0.11426376551389694, 2.4070000648498535]
        ]
      ],
      camaPoints: [
        0.10985056310892105,
        -0.13395646214485168,
        3.380000114440918
      ],
      dispensadores: [
        [0.2630771994590759, -0.019362561404705048, 3.4200000762939453]
      ],
      floor: [
        [-1.1797891855239868, 1.4506481885910034, 3.2119998931884766],
        [-1.1293202638626099, 0.6508018970489502, 4.093999862670898],
        [1.1487586498260498, 0.4948367774486542, 4.421000003814697],
        [1.1579986810684204, 1.4244699478149414, 3.247999906539917],
        [-1.1797891855239868, 1.4506481885910034, 3.2119998931884766]
      ]
    };

    frameConfig = data.frameConfig;
    frame = data.actores[0];
    framePointsCount = frameConfig.framePointsCount;
    maxFrames = data.actores[0].length / framePointsCount;
    init();
    animate();

    function init() {
      console.log('Positions using', frameConfig.mode);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(
        document.getElementById('viewer').offsetWidth,
        document.getElementById('viewer').offsetWidth / 2
      );
      document.getElementById('viewer').appendChild(renderer.domElement);

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xeeeeee);
      floor = new THREE.GridHelper(frameConfig.x, 10);

      scene.add(floor);

      clock = new THREE.Clock();
      const axesHelper = new THREE.AxesHelper(500);

      camera = new THREE.PerspectiveCamera(70, 1.5, 1, 2000);
      camera.up.set(0, 0.5, 0);

      cameraControls = new CameraControls(camera, renderer.domElement);
      cameraControls.setLookAt(
        0,
        frameConfig.x / 4,
        frameConfig.x / 2,
        0,
        0,
        0,
        true
      );

      sessao = new THREE.Group();
      sessao.name = 'sessao';

      scene.add(axesHelper);

      //CAMA
      const cama = new THREE.Group();
      cama.name = 'cama';
      let camaWidth = frameConfig.bedW,
        camaHeight = frameConfig.bedH,
        camaDepth = frameConfig.bedD;
      const camaGeo = new THREE.BoxGeometry(camaWidth, camaHeight, camaDepth);
      const camaMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
      const camaMesh = new THREE.Mesh(camaGeo, camaMaterial);
      let camaPoint = fixAxis(data.camaPoints);
      cama.position.set(camaPoint.x, camaPoint.y, camaPoint.z);
      camaMesh.position.set(0, 0, camaDepth / 2);
      cama.add(camaMesh);
      sessao.add(cama);

      //DISPENSADOR
      const dispensadorMat = new THREE.MeshPhongMaterial({ color: 0xffff00 });

      const dispensador1Geo = new THREE.BoxGeometry(25, 50, 25);
      const dispensador2Geo = new THREE.BoxGeometry(25, 50, 25);

      const dispensador1 = new THREE.Mesh(dispensador1Geo, dispensadorMat);
      let fixedDispensadorPoint = fixAxis(data.dispensadores[0]);
      dispensador1.position.set(
        fixedDispensadorPoint.x,
        fixedDispensadorPoint.y,
        fixedDispensadorPoint.z
      );
      //dispensador1.rotation.x = THREE.Math.degToRad( frameConfig.camR );

      const dispensador2 = new THREE.Mesh(dispensador2Geo, dispensadorMat);
      fixedDispensadorPoint = fixAxis([903.75, 186.5, 3.917]);
      dispensador2.position.set(
        fixedDispensadorPoint.x,
        fixedDispensadorPoint.y,
        fixedDispensadorPoint.z
      );
      dispensador2.rotation.x = THREE.Math.degToRad(frameConfig.camR);

      //sessao.add( dispensador1 )
      //scene.add( dispensador2 )

      //ADD Detected floor
      //create a blue LineBasicMaterial
      var floorLineineMaterial = new THREE.LineBasicMaterial({
        color: '#00ff00'
      });
      const floorPoints = [];
      for (let i = 0; i < data.floor.length; i++) {
        let fixedFloorPoint = fixAxis(data.floor[i]);
        floorPoints.push(
          new THREE.Vector3(
            fixedFloorPoint.x,
            fixedFloorPoint.y,
            fixedFloorPoint.z
          )
        );
      }

      const floorGeometry = new THREE.BufferGeometry().setFromPoints(
        floorPoints
      );
      const baseFloor = new THREE.Line(floorGeometry, floorLineineMaterial);
      sessao.add(baseFloor);

      //Create actor group for animation
      actor = new THREE.Group();
      actor.name = 'actor';
      sessao.add(actor);
      scene.add(sessao);
      newFrame2();

      //lights
      const dirLight1 = new THREE.DirectionalLight(0xffffff);
      dirLight1.position.set(1, 1, 1);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0x002288);
      dirLight2.position.set(-1, -1, -1);
      scene.add(dirLight2);

      const ambientLight = new THREE.AmbientLight(0x222222);
      scene.add(ambientLight);

      //
      window.removeEventListener('resize', onWindowResize);
      window.addEventListener('resize', onWindowResize);
      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      document.getElementById('viewer').appendChild(stats.dom);

      //initGui();
    }

    function fixAxis(point: any[]) {
      if (frameConfig.mode == 'pixel') {
        //Frame axis is top left, world is center bottom
        //offset x half the frame withd to the left
        let tempX = scale(
          point[0],
          0,
          frameConfig.x,
          (frameConfig.x / 2) * -1,
          frameConfig.x / 2
        ); //point[0] - (frameConfig.x /2);
        let tempY = scale(point[1], 0, frameConfig.y, frameConfig.y, 0); //frameConfig.y-point[1]-frameConfig.camY;
        let tempZ = scale(
          point[2],
          0,
          frameConfig.z,
          frameConfig.x / 2,
          (frameConfig.x / 2) * -1
        );

        return { x: tempX, y: tempY, z: tempZ, p: point[3] };
        //return {x: point[0], y:point[1], z:point[2]*200, p:point[3]}
      } else {
        let tempX = point[0] * factor;
        let tempY = point[1] * factor * -1;
        let tempZ = point[2] * factor * -1;

        return { x: tempX, y: tempY, z: tempZ, p: point[3] };
      }
    }

    function onWindowResize() {
      if (document.getElementById('viewer')) {
        //camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(
          document.getElementById('viewer').offsetWidth,
          document.getElementById('viewer').offsetWidth / 2
        );
      }
    }

    function animate() {
      requestAnimationFrame(animate);

      stats.update();

      const delta = clock.getDelta();
      const hasControlsUpdated = cameraControls.update(delta);

      // you can skip this condition to render though
      if (hasControlsUpdated) {
        renderer.render(scene, camera);
      }
      sessao.rotation.x = THREE.Math.degToRad(frameConfig.camRX);
      sessao.getObjectByName('cama').rotation.x = THREE.Math.degToRad(
        frameConfig.camRX * -1
      );

      sessao.position.z = -frameConfig.camY / 2;
      sessao.position.y = -frameConfig.camY;

      render();
    }

    function render() {
      renderer.render(scene, camera);
    }
    function newFrame2() {
      if (play) {
        //var selectedObject = scene.getObjectByName('actor');
        actor.clear();
        sessao.remove(actor);
        let startIndex =
          (currentFrame % (frame.length / framePointsCount)) * framePointsCount;

        //console.log('/////////////////')
        //console.log('// FRAME',currentFrame%(frame.length/framePointsCount))

        //rebuild actor
        //create a blue LineBasicMaterial
        const lineMaterial = new THREE.LineBasicMaterial({
          vertexColors: THREE.VertexColors, // inform material that geometry will provide color info
          linewidth: 40 // lineWidth not universally supported works with safari
        });
        const pointMaterial = new THREE.PointsMaterial({
          size: 2,
          vertexColors: THREE.VertexColors
        });

        let pointColors = [];
        let points = [];

        actor = new THREE.Group();
        actor.name = 'actor';

        for (let i = 0; i < 5; i++) {
          let fixedPoint = fixAxis(frame[startIndex + i]);
          pointColors.push(1 - 1 * frame[i][3], 1 * frame[i][3], 0);
          points.push(fixedPoint.x, fixedPoint.y, fixedPoint.z);
        }

        const headGeometry = new THREE.BufferGeometry();
        headGeometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(points, 3)
        );
        headGeometry.setAttribute(
          'color',
          new THREE.Float32BufferAttribute(pointColors, 3)
        );
        let head = new THREE.Points(headGeometry, pointMaterial);

        actor.add(head);

        const bodyPointsIndex = [
          [10, 8, 6, 12, 14, 16],
          [11, 9, 7, 13, 15, 17],
          [6, 7],
          [12, 13]
        ];
        let linePoints = [];
        let lineGeometries = [];
        let lineColors = [];
        let lines = [];
        let currentPoint;
        for (let i = 0; i < bodyPointsIndex.length; i++) {
          linePoints[i] = [];
          lineColors[i] = [];
          lineGeometries[i] = new THREE.BufferGeometry().setFromPoints(
            linePoints[i]
          );
          for (let j = 0; j < bodyPointsIndex[i].length; j++) {
            //Skip point if it's above threshold
            if (
              frame[startIndex + (bodyPointsIndex[i][j] - 1)][3] >
              frameConfig.minP
            ) {
              let fixedPoint = { x: 0, y: 0, z: 0, p: 0 };
              let newPoint = { x: 0, y: 0, z: 0, p: 1 };
              //if starting frame skip max velocity check
              if (startIndex < framePointsCount) {
                fixedPoint = fixAxis(
                  frame[startIndex + (bodyPointsIndex[i][j] - 1)]
                );
                currentPoints[bodyPointsIndex[i][j] - 1] = fixedPoint;
              } else {
                fixedPoint = fixAxis(
                  frame[startIndex + (bodyPointsIndex[i][j] - 1)]
                );
                currentPoint = currentPoints[bodyPointsIndex[i][j] - 1];
                newPoint.x = motionLimiter(
                  fixedPoint.x,
                  currentPoint.x,
                  frameConfig.maxMovement
                );
                newPoint.y = motionLimiter(
                  fixedPoint.y,
                  currentPoint.y,
                  frameConfig.maxMovement
                );
                newPoint.z = motionLimiter(
                  fixedPoint.z,
                  currentPoint.z,
                  frameConfig.maxMovement
                );
                newPoint.p = fixedPoint.p;
                fixedPoint = newPoint;
                currentPoints[bodyPointsIndex[i][j] - 1] = fixedPoint;
              }

              linePoints[i].push(fixedPoint.x, fixedPoint.y, fixedPoint.z);
              lineColors[i].push(1 - 1 * fixedPoint.p, 1 * fixedPoint.p, 0);
            }
          }
          lineGeometries[i].setAttribute(
            'position',
            new THREE.Float32BufferAttribute(linePoints[i], 3)
          );
          lineGeometries[i].setAttribute(
            'color',
            new THREE.Float32BufferAttribute(lineColors[i], 3)
          );
          lines[i] = new THREE.Line(lineGeometries[i], lineMaterial);
          lines[i].computeLineDistances();
          actor.add(lines[i]);
        }
        sessao.add(actor);
        //scene.add(sessao)
        if (!paused) {
          currentFrame++;
        }
      }
      setTimeout(newFrame2, 1000 / fps);
      //console.log(actor)
    }
    function newFrame() {
      if (play) {
        actor.clear();
        //console.log('frame', actor.geometry.attributes.position.array[0])
        let startIndex = (currentFrame % (frame.length / 18)) * 18;
        //console.log(startIndex)
        //[10,8,6,12,14,16],
        //[11,9,7,13,15,17],
        //[6,7],
        //[12,13]
        //Head points update [0,1,2,3,4] (5*3) [0]
        updateBodyPart(
          [
            fixAxis(frame[startIndex + 0]),
            fixAxis(frame[startIndex + 1]),
            fixAxis(frame[startIndex + 2]),
            fixAxis(frame[startIndex + 3]),
            fixAxis(frame[startIndex + 4])
          ],
          0
        );
        //Left body line update [10,8,6,12,14,16] (6*3=17) [1]
        updateBodyPart(
          [
            fixAxis(frame[startIndex + 9]),
            fixAxis(frame[startIndex + 7]),
            fixAxis(frame[startIndex + 5]),
            fixAxis(frame[startIndex + 11]),
            fixAxis(frame[startIndex + 13]),
            fixAxis(frame[startIndex + 15])
          ],
          1
        );
        //Right body line update [11,9,7,13,15,17] (6*3=17) [2]
        updateBodyPart(
          [
            fixAxis(frame[startIndex + 10]),
            fixAxis(frame[startIndex + 8]),
            fixAxis(frame[startIndex + 6]),
            fixAxis(frame[startIndex + 12]),
            fixAxis(frame[startIndex + 14]),
            fixAxis(frame[startIndex + 16])
          ],
          2
        );
        //Colar bone line update [6,7] (2*3=6) [3]
        updateBodyPart(
          [fixAxis(frame[startIndex + 5]), fixAxis(frame[startIndex + 6])],
          3
        );
        //Hip line update [12,13] (2*3=6) [4]
        updateBodyPart(
          [fixAxis(frame[startIndex + 11]), fixAxis(frame[startIndex + 12])],
          4
        );

        scene.add(actor);
        currentFrame++;
      }
      setTimeout(newFrame, 1000 / fps);
      //console.log(actor)
    }
    function updateBodyPart(tempP, part) {
      let p = 0;
      //(part == 0)?console.log(tempP[4].x):null;
      //console.log('Update part', part, 'with', tempP.length, 'points', tempP)
      for (let i = 0; i < tempP.length / 3; i++) {
        actor.children[part].geometry.attributes.position.array[p] = tempP[i].x;
        actor.children[part].geometry.attributes.color.array[p++] =
          1 * tempP[i].p;
        actor.children[part].geometry.attributes.position.array[p] = tempP[i].y;
        actor.children[part].geometry.attributes.color.array[p++] =
          1 - 1 * tempP[i].p;
        actor.children[part].geometry.attributes.position.array[p++] =
          tempP[i].z;
      }
      actor.children[part].geometry.attributes.position.needsUpdate = true;
      actor.children[part].geometry.attributes.color.needsUpdate = true;
      actor.children[part].geometry.verticesNeedUpdate = true;
    }

    function scale(number, inMin, inMax, outMin, outMax) {
      return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
    function motionLimiter(x, current, limit) {
      //determine if x if in inside the left limit
      if (x < current - limit) {
        //console.log('from', current, 'to', x, 'limited to', current-limit)
        return current - limit;
      } else if (x >= current - limit && x <= current + limit) {
        //console.log('from', current, 'to', x, 'no limit aplied', x)
        return x;
      } else if (x > current + limit) {
        //console.log('from', current, 'to', x, 'limited to', current+limit)
        return current + limit;
      } else {
        //console.log('limiter exception, keeping original value', current)
        return current;
      }
    }

    function initGui() {
      gui = new GUI();

      const param = {
        FPS: 1,
        Frame: currentFrame,
        Playing: true,
        Paused: false,
        Factor: factor,
        camRX: frameConfig.camRX,
        camY: frameConfig.camY,
        minP: frameConfig.minP,
        maxM: frameConfig.maxMovement
      };
      gui
        .add(param, 'Frame', 1, maxFrames)
        .step(1)
        .onChange(function(val) {
          if (paused) {
            currentFrame = val;
          }
        });
      gui.add(param, 'FPS', 1, 15).onChange(function(val) {
        fps = val;
      });
      gui.add(param, 'camRX', -180, 180).onChange(function(val) {
        frameConfig.camRX = val;
      });
      gui.add(param, 'camY', -800, 800).onChange(function(val) {
        frameConfig.camY = val;
      });
      gui.add(param, 'minP', 0, 1).onChange(function(val) {
        frameConfig.minP = val;
      });
      gui.add(param, 'maxM', 0, 100).onChange(function(val) {
        frameConfig.maxMovement = val;
      });
      gui.add(param, 'Factor', 0, 1000).onChange(function(val) {
        factor = val;
      });

      gui.add(param, 'Playing').onChange(function(val) {
        play = val;
      });
      gui.add(param, 'Paused').onChange(function(val) {
        paused = val;
      });
    }
  }

  ngOnDestroy() {}
}
