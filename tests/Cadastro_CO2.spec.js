// @ts-check
import { test, expect } from '@playwright/test';

test('Acesso a página', async ({ page }) => {
  await page.goto('/');
test('Cadastro de Solicitação', async ({ page }) => {
  await page.getByRole('button', { name: 'Calcular emissão' }).click();
  await page.getByRole('combobox', { name: 'Tipo de Carga' }).locator('span').click();
  await page.getByText('Algodão e derivados').click();
  await page.getByRole('spinbutton', { name: 'Peso' }).click();
  await page.getByRole('spinbutton', { name: 'Peso' }).fill('123');
  await page.getByRole('spinbutton', { name: 'Volume Anual' }).click();
  await page.getByRole('spinbutton', { name: 'Volume Anual' }).fill('321');
  await page.locator('div').filter({ hasText: /^Cidade Origem \*$/ }).nth(1).click();
  await page.getByRole('combobox', { name: 'Cidade Origem' }).fill('rondo');
  await page.getByText('Rondonópolis - MT').click();
  await page.getByRole('combobox', { name: 'Cidade Destino' }).click();
  await page.getByRole('combobox', { name: 'Cidade Destino' }).fill('sumare');
  await page.getByText('Sumaré - SP').click();
  await page.getByRole('button', { name: 'Avançar' }).click();
  });
test('Cadastro Dados Pessoais', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Nome' }).click();
  await page.getByRole('textbox', { name: 'Nome' }).fill('Rodolpho Alberto Magalhaes');
  await page.getByRole('textbox', { name: 'Empresa' }).click();
  await page.getByRole('textbox', { name: 'Empresa' }).fill('Brado');
  await page.getByRole('textbox', { name: 'Cargo' }).click();
  await page.getByRole('textbox', { name: 'Cargo' }).fill('Analista');
  await page.getByRole('textbox', { name: 'Telefone' }).click();
  await page.getByRole('textbox', { name: 'Telefone' }).fill('41997995522');
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('tr.rmagalhaes@brado.com.br');
  await page.screenshot({ path: 'screenshot_Email.png' }); //(para tirar print da tela )
  //await page.getByRole('button', { name: 'Avançar' }).click();
  //await page.getByRole('button', { name: 'fechar' }).click();
  });

});