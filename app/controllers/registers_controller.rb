class RegistersController < ApplicationController

	def show
    @register = Register.find(params[:id])
        @buddies = []
    current_user.registers.each do |pet|
      buds = Buddy.where(:register_id => pet.id)
      buds.each do |buddy|
        if buddy.register == pet
          @buddies += [buddy]
      end
    end
  end
    

  end
  def index
    @reg= Register.new
    @register = current_user.registers
    #Here im creating an array of pets to be showed to the current user who is considered to be a buddy that have access on these pets.

    @registers = []
    @buddies = Buddy.where(:user => current_user)
    @buddies.each do |buddy|
    if !@register.include?(buddy.register)
      @registers += [buddy.register]  
    end
    end   
  end

  def edit
  @register = Register.find(params[:id])
	end
	def update
  @register = Register.find(params[:id])
 	end
  
  
	def new
    @reg= Register.new
  	end
  def create
  @register = Register.new(register_params)
  @register.User = current_user
 
  if @register.save
  redirect_to registers_path
else
  render'new'
end
end


def destroy
  @register = Register.find(params[:id])
  @register.destroy
 
  redirect_to registers_path
end






 
private
  def register_params
    params.require(:register).permit(:name, :breed, :gender, :species, :image, :date_of_birth)
  end
end
