const pkmnTotal = 802;
const url = `https://pokeapi.co/api/v2/pokemon/?limit=${pkmnTotal}`;
const optionAmount = 4;
let pokemonData = [];
const prettyNames = {
	"nidoran-f": "nidoran♀",
	"nidoran-m": "nidoran♂",
	"mr-mime": "mr. mime",
	"deoxys-normal": "deoxys",
	"wormadam-plant": "wormadam",
	"mime-jr": "mime jr.",
	"giratina-altered": "giratina",
	"shaymin-land": "shaymin",
	"basculin-red-striped": "basculin",
	"darmanitan-standard": "darmanitan",
	"tornadus-incarnate": "tornadus",
	"thundurus-incarnate": "thundurus",
	"landorus-incarnate": "landorus",
	"keldeo-ordinary": "keldeo",
	"meloetta-aria": "meloetta",
	"meowstic-male": "meowstic",
	"aegislash-shield": "aegislash",
	"pumpkaboo-average": "pumpkaboo",
	"gourgeist-average": "gourgeist",
	"oricorio-baile": "oricorio",
	"lycanroc-midday": "lycanroc",
	"wishiwashi-solo": "wishiwashi",
	"type-null": "type: null",
	"minior-red-meteor": "minior",
	"mimikyu-disguised": "mimikyu",
	"tapu-koko": "tapu koko",
	"tapu-lele": "tapu lele",
	"tapu-bulu": "tapu bulu",
	"tapu-fini": "tapu fini"
};

const app = new Vue({
	el: "#app",
	filters: {
		prettifyName(name) {
			return prettyNames[name] || name;
		}
	},
	data() {
		return {
			pokemon: [],
			pkmnAmount: null,
			score: 0,
			question: 0,
			questionAmount: 10,
			answer: {},
			selected: {},
			options: [],
			isPlaying: false,
			isDone: false,
			isChecked: false,
			trainerHovered: null
		};
	},
	computed: {
		image() {
			let url =
				"https://raw.githubusercontent.com/tiffachoo/pokesprites/master/pokemon/";
			let imageUrl = `${url}${this.classic ? "redblue" : "sunmoon"}/`;
			let number = this.answer.url.match(/\/(\d+)/)[1];
			return `${imageUrl}${number}.png`;
		},
		classic() {
			return this.pkmnAmount <= 151;
		}
	},
	mounted() {
		let pokeList = localStorage.getItem("pokeList");

		if (pokeList) {
			pokemonData = JSON.parse(pokeList);
		} else {
			this.getData().then((res) => {
				pokemonData = res.results;
				localStorage.setItem("pokeList", JSON.stringify(res.results));
			});
		}
	},
	methods: {
		getData() {
			return fetch(url)
				.then((res) => res.json())
				.catch((err) => console.log("errrr"));
		},
		startGame(val) {
			this.question = 0;
			this.score = 0;
			this.isPlaying = true;
			this.pokemon = [...pokemonData];

			this.pkmnAmount = val || pkmnTotal;

			this.getNextQuestion();
		},
		getNextQuestion() {
			this.question += 1;
			this.resetAnswer();

			if (this.question <= this.questionAmount) {
				let removed = "";
				for (let i = 1; i <= optionAmount; i++) {
					removed = this.pokemon.splice(this.getRandomPokemon(i), 1)[0];
					if (i === 1) {
						this.answer = removed;
					} else {
						this.options.push(removed);
					}
				}

				let pos = Math.floor(Math.random() * optionAmount);
				this.options.splice(pos, 0, this.answer);
			} else {
				this.isPlaying = false;
				this.isDone = true;
				this.resetAnswer();
			}
		},
		selectAnswer(ans, index) {
			if (!this.isChecked) {
				this.$set(this.selected, "name", ans);
				this.$set(this.selected, "index", index);
			}
		},
		checkAnswer() {
			this.isChecked = true;

			if (this.selected.name === this.answer.name) {
				this.score += 10;
			}
		},
		getRandomPokemon(index) {
			const diff = (this.question - 1) * 4 + index;
			return Math.floor(Math.random() * (this.pkmnAmount + 1 - diff));
		},
		resetAnswer() {
			this.options = [];
			this.selected = {};
			this.answer = {};
			this.isChecked = false;
		},
		restartGame() {
			this.isDone = false;
		},
		trainerHover(val) {
			this.trainerHovered = val;
		}
	}
});