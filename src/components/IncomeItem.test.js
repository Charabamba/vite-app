import { render, screen } from "@testing-library/vue";
import IncomeItem from "./IncomeItem.vue";

test("renders disabled income item", () => {
	const options = {
		props: {
			id: "1",
			name: "Test name",
			price: 100,
			income: 10,
			disabled: true,
			quantity: 1,
		},
	};

	render(IncomeItem, options);

	expect(screen.getByRole("button").disabled).toBe(true);
});

test("renders income item", () => {
	const options = {
		props: {
			id: "1",
			name: "Test name",
			price: 100,
			income: 10,
			disabled: false,
			quantity: 1,
		},
	};

	render(IncomeItem, options);

	expect(screen.getByRole("button").disabled).toBe(false);
});
