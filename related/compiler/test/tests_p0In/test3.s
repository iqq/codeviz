	.section	__TEXT,__text,regular,pure_instructions
	.globl		_main
	.align		4, 0x90
_main:
	pushl	%ebp
	movl	%esp,%ebp
	subl	$72,%esp
	call	_input
	movl	%eax,-4(%ebp)
	movl	-4(%ebp),%eax
	movl	%eax,-8(%ebp)
	movl	-8(%ebp),%eax
	movl	%eax,(%esp)
	call	_create_int
	movl	%eax,-12(%ebp)
	movl	-12(%ebp),%eax
	movl	%eax,-16(%ebp)
	movl	-16(%ebp),%eax
	movl	%eax,(%esp)
	call	_project_int
	movl	%eax,-20(%ebp)
	movl	$1,%eax
	movl	%eax,-24(%ebp)
	movl	-24(%ebp),%eax
	movl	%eax,(%esp)
	call	_create_int
	movl	%eax,-28(%ebp)
	movl	-28(%ebp),%eax
	movl	%eax,-32(%ebp)
	movl	-32(%ebp),%eax
	movl	%eax,(%esp)
	call	_project_int
	movl	%eax,-36(%ebp)
	movl	-20(%ebp), %eax
	movl	%eax, -40(%ebp)
	movl	-36(%ebp), %eax
	subl	%eax,-40(%ebp)
	movl	-40(%ebp),%eax
	movl	%eax,-44(%ebp)
	movl	-44(%ebp),%eax
	movl	%eax,(%esp)
	call	_create_int
	movl	%eax,-48(%ebp)
	movl	-48(%ebp),%eax
	movl	%eax,-52(%ebp)
	movl	$0, %eax
	leave
	ret

