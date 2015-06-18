package model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.Date;
import java.util.Set;


/**
 * The persistent class for the popisni_dokument database table.
 * 
 */
@Entity
@Table(name="popisni_dokument")
@NamedQuery(name="PopisniDokument.findAll", query="SELECT p FROM PopisniDokument p")
public class PopisniDokument implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="ID_POPISNI_DOKUMENT")
	private int idPopisniDokument;

	@Column(name="BROJ_POPISA_U_GODNI")
	private int brojPopisaUGodni;

	@Temporal(TemporalType.DATE)
	@Column(name="DATUM_POPISA")
	private Date datumPopisa;

	@Column(name="SIFRA_POPISA")
	private String sifraPopisa;

	@Column(name="STATUS_PREDAJE")
	private String statusPredaje;
	//bi-directional many-to-one association to Magacin
	@ManyToOne
	@JoinColumn(name="ID_MAGACIN")
	private Magacin magacin;

	//bi-directional many-to-one association to PoslovnaGodina
	@ManyToOne
	@JoinColumn(name="ID_POSLOVNA_GODINA")
	private PoslovnaGodina poslovnaGodina;
	
	public PopisniDokument() {
	}

	public int getIdPopisniDokument() {
		return this.idPopisniDokument;
	}

	public void setIdPopisniDokument(int idPopisniDokument) {
		this.idPopisniDokument = idPopisniDokument;
	}

	public int getBrojPopisaUGodni() {
		return this.brojPopisaUGodni;
	}

	public void setBrojPopisaUGodni(int brojPopisaUGodni) {
		this.brojPopisaUGodni = brojPopisaUGodni;
	}

	public Date getDatumPopisa() {
		return this.datumPopisa;
	}

	public void setDatumPopisa(Date datumPopisa) {
		this.datumPopisa = datumPopisa;
	}

	public String getSifraPopisa() {
		return this.sifraPopisa;
	}

	public void setSifraPopisa(String sifraPopisa) {
		this.sifraPopisa = sifraPopisa;
	}

	public String getStatusPredaje() {
		return this.statusPredaje;
	}

	public void setStatusPredaje(String statusPredaje) {
		this.statusPredaje = statusPredaje;
	}

	public Magacin getMagacin() {
		return this.magacin;
	}

	public void setMagacin(Magacin magacin) {
		this.magacin = magacin;
	}

	public PoslovnaGodina getPoslovnaGodina() {
		return this.poslovnaGodina;
	}

	public void setPoslovnaGodina(PoslovnaGodina poslovnaGodina) {
		this.poslovnaGodina = poslovnaGodina;
	}


}