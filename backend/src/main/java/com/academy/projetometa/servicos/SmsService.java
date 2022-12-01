package com.academy.projetometa.servicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.academy.projetometa.entidades.Vendas;
import com.academy.projetometa.repositorios.VendaRepositorio;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;
	
	@Autowired
	private VendaRepositorio vendaRepositorio;
	
	public void sendSms(Long vendaId) {

		Vendas venda = vendaRepositorio.findById(vendaId).get();
		
		String date = venda.getDate().getMonthValue() + "/" + venda.getDate().getYear();
		
		
		String msg = "Vendedor " + venda.getVendedorNome() + "foi destaque em "+ date +" com o total de R$ " + String.format("%.2f",venda.getTotal()) + " em vendas";
		
		
		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}
