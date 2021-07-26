package com.init.products.entitys;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.*;
//import org.hibernate.annotations.Table;

/*C)1- Anotamos al Product como si fuera una entidad, es decir
 * podemos llevar esto a la base datos y despues consultarlo, esto lo hacemos colocando @Entity*/
@Entity
/*C) 2- Le decimos que crearemos una Entidad y se va guardar en la  tabla llamada products */
@Table(name="products")
public class Product {

	/*B) 1.- Comenzamos colocando los atributos de tu tabla de la DB, es decir nombre, link, precio, etc y cada uno
	 * tendra su metodo get y set para que nos deje insertar y consultar */
	/*C) 3- Le indicamos que las propiedades o atributos de abajo, se van a guardar en la columna id */
	/*C) 4- LAS ANOTACIONES QUE ESTAN ABAJO, NO SON SOLO POR ANOTAR, AQUÍ LE ESTAMOS DICIENDO A JPA QUE REGISRTE UNA TABLA CON
	 * LAS PROPIEDADES DE ABAJO DE FORMA AUTOMATICA*/
	@Id //le decimos que este es el ID de la entidad
	@Column(name="id")
	// le deimos que va ser auto- incrementable
	@GeneratedValue(strategy=GenerationType.IDENTITY)	
	private long Id;
	
	@Column(name="name", nullable=false, length=255)
	private String name;
	
	
	
	/*2.- estos son los metodos get y set de tus atributos (objeto plano)*/
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		this.Id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
