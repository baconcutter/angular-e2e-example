import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:4200`;

test('Homepage should be the Todo items page', async t => {
    await t.expect(Selector('h1').innerText).eql('Todo');
});

test('When the "show done items" link is clicked, it should navigate to the Done Items page', async t => {
    await t
        .click(Selector('.page-link'))
        .expect(Selector('h1').innerText).eql('Done Items');
});